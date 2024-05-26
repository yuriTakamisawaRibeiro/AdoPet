import { FileInput } from "../../components/FileInput";
import { Select } from "../../components/Select";
import { Container, Form, InfoSection, InputPostAuthor, InputPostContent, InputPostDescription, InputPostTitle, InputTitle, PostButton, Row } from "./styles";

export function PostRegister() {

    const optionsCategories = [
        { label: 'Selecione uma opção', value: '' },
        { label: 'Treinamento', value: 'trainment' },
        { label: 'Saúde', value: 'pet-health' },
        { label: 'Diversão', value: 'fun' },
        { label: 'Cuidados', value: 'care' },
    ];

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
                        <InputPostTitle />
                    </div>
                    <div className="post-category">
                        <InputTitle>Categoria da postagem</InputTitle>
                        <Select options={optionsCategories} />
                    </div>
                </Row>
                <Row>
                    <div className="post-description">
                        <InputTitle>Descrição da postagem</InputTitle>
                        <InputPostDescription />
                    </div>
                </Row>
                <Row>
                    <div className="post-content">
                        <InputTitle>Conteúdo da postagem</InputTitle>
                        <InputPostContent />
                    </div>
                </Row>
                <Row>
                    <div className="post-image">
                        <InputTitle>Imagem de capa da postagem</InputTitle>
                        <FileInput />
                    </div>
                </Row>
                <Row>
                    <div>
                        <InputTitle>Autor da postagem</InputTitle>
                        <InputPostAuthor />
                    </div>
                    <div>
                        <PostButton>Fazer postagem</PostButton>
                    </div>
                </Row>
            </Form>
        </Container>
    )
}