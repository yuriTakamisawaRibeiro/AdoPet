import { FileInput } from "../../components/FileInput";
import { Select } from "../../components/Select";
import { Container, Form, InfoSection, InputPostAuthor, InputPostContent, InputPostDescription, InputPostTitle, InputTitle, PostButton, Row } from "./styles";
import { firestore, storage } from "../../services/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { getDownloadURL } from "firebase/storage";

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
        image_url: "",
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
        // Convert FileList to an array
        const filesArray = Array.from(selectedFiles);
        // Update the state with the selected files
        setFiles(filesArray);
    
        // Assuming you want to update formData with the first file selected
        if (filesArray.length > 0) {
            setFormData((prevData) => ({
               ...prevData,
                image_file: filesArray[0], // Atualiza o arquivo da imagem no formData
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            // Adiciona os dados do formData ao Firestore
            const posts = collection(firestore, "posts");
            const docRef = await addDoc(posts, formData);
            console.log("Documento adicionado com ID:", docRef.id);
    
            // Envia a imagem selecionada para o Storage
            const file = files[0]; // Assume que 'files' contém pelo menos um arquivo
            if (!file) {
                console.error("Nenhum arquivo foi selecionado.");
                return;
            }
    
            const postImageRef = ref(storage, `posts/${docRef.id}/image`);
            await uploadBytes(postImageRef, file);
            console.log(`Imagem enviada com sucesso.`);
    
            // Atualiza o estado formData para incluir a URL da imagem enviada
            const imageUrl = await getDownloadURL(postImageRef);
            setFormData((prevData) => ({
               ...prevData,
                image_url: imageUrl, // Adicione 'image_url' ao seu estado formData se ainda não estiver presente
            }));
        } catch (error) {
            console.error("Erro ao adicionar documento:", error);
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