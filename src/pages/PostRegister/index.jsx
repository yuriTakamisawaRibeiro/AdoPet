import { FileInput } from "../../components/FileInput";
import { Select } from "../../components/Select";
import { Container, Form, InfoSection, InputPostAuthor, InputPostContent, InputPostDescription, InputPostTitle, InputTitle, PostButton, Row } from "./styles";
import { firestore, storage } from "../../services/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
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
        files: [],
    });

    const [files, setFiles] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleCategoryChange = (newValue) => {
      setSelectedOption(newValue);
    };

    const handleFileChange = (selectedFiles) => {
        // Convert FileList to an array
        const filesArray = Array.from(selectedFiles);
        // Update the state with the selected files
        setFiles(filesArray);
    };

    const handleSubmit = async () => {
        try {
            // Adiciona os dados do formData ao Firestore
            const posts = collection(firestore, "posts");
            const docRef = await addDoc(posts, formData);
            console.log("Documento adicionado com ID:", docRef.id);

            // Envia os arquivos para o Storage
            const files = formData.selectedFiles; // Obtém a lista de arquivos selecionados
            const postFileRef = ref(storage, `posts/${docRef.id}`);

            // Itera sobre cada arquivo e envia para o Storage
            files.forEach(async (file) => {
                const fileRef = ref(postFileRef, file.name);
                await uploadBytes(fileRef, file);
                console.log(`Arquivo ${file.name} enviado com sucesso.`);
            });

            Object.keys(files).forEach((fileKey) => {
                const file = files[fileKey];
                const storageRef = ref(storage, `posts/${docRef.id}/${file.name}`);
                const uploadTask = uploadBytes(storageRef, file);
            });
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
                            options={optionsCategories}
                            name="category"
                            value={formData.category}
                            onChange={handleCategoryChange}
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