import { FileInput } from "../../components/FileInput";
import { Select } from "../../components/Select";
import { Container, Form, InfoSection, InputPostAuthor, InputPostContent, InputPostDescription, InputPostTitle, InputTitle, PostButton, Row } from "./styles";
import { firestore, storage } from "../../services/firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export function PostRegister() {
    const optionsCategories = [
        { label: 'Selecione uma opção', value: '' },
        { label: 'Treinamento', value: 'trainment' },
        { label: 'Saúde', value: 'pet-health' },
        { label: 'Diversão', value: 'fun' },
        { label: 'Cuidados', value: 'care' },
    ];

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        content: "",
        author: "",
        created_at: serverTimestamp(),
    });

    const [files, setFiles] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategoryChange = (newValue) => {
        setFormData((prevData) => ({
            ...prevData,
            category: newValue,
        }));
    };

    const handleFileChange = (selectedFiles) => {
        const filesArray = Array.from(selectedFiles);
        setFiles(filesArray);
    };

    const handleSubmit = async () => {
        try {
            // Add document to Firestore without the file
            const posts = collection(firestore, "posts");
            const docRef = await addDoc(posts, formData);
            console.log("Document added with ID:", docRef.id);

            // Upload the file to Firebase Storage
            const file = files[0];
            if (file) {
                const postImageRef = ref(storage, `posts/${docRef.id}/image`);
                await uploadBytes(postImageRef, file);
                console.log("Image uploaded successfully.");

                // Get the download URL of the uploaded file
                const imageUrl = await getDownloadURL(postImageRef);

                // Update the Firestore document with the file URL
                await updateDoc(doc(posts, docRef.id), {
                    image_url: imageUrl
                });

                console.log("Document updated with image URL.");
            }
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };

    return (
        <Container>
            <InfoSection>
                <h1>Informações da postagem</h1>
                <p>Preencha corretamente os campos para realizar a publicação da postagem no EducaPet</p>
            </InfoSection>
            <Form>
                <Row>
                    <div>
                        <InputTitle>Título da postagem</InputTitle>
                        <InputPostTitle
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="post-category">
                        <InputTitle>Categoria da postagem</InputTitle>
                        <Select
                            name="category"
                            options={optionsCategories}
                            value={formData.category}
                            onChange={(newValue) => handleCategoryChange(newValue)}
                        />
                    </div>
                </Row>
                <Row>
                    <div className="post-description">
                        <InputTitle>Descrição da postagem</InputTitle>
                        <InputPostDescription
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                </Row>
                <Row>
                    <div className="post-content">
                        <InputTitle>Conteúdo da postagem</InputTitle>
                        <InputPostContent
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                </Row>
                <Row>
                    <div className="post-image">
                        <InputTitle>Imagem de capa da postagem</InputTitle>
                        <FileInput onChange={handleFileChange} />
                    </div>
                </Row>
                <Row>
                    <div>
                        <InputTitle>Autor da postagem</InputTitle>
                        <InputPostAuthor
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <PostButton
                            type="button"
                            onClick={handleSubmit}
                        >Fazer postagem</PostButton>
                    </div>
                </Row>
            </Form>
        </Container>
    )
}
