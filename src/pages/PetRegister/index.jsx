import { Container, Content, InfoIcon, Text, Form, Row, RowFile, InputTitle, InputPetRegister, FileInput } from "./styles"
import RegisterSteps from "../../assets/images/RegisterSteps.svg"
import { Select } from "../../components/Select"

export function PetRegister() {
    return (
        <Container>
            <Content>
                <img src={RegisterSteps} alt="Passo um" />
                <h1>Registro de informações</h1>
                <Text>
                    <InfoIcon />
                    <p>Apenas os campos com &quot;*&quot; são obrigatórios,
                        caso você não saiba alguma informação dos demais campos,
                        é permitido deixar em branco.
                    </p>
                </Text>
                <Form>
                    <Row>
                        <div>
                            <InputTitle>Espécie *</InputTitle>
                            <InputPetRegister />
                        </div>
                        <div>
                            <InputTitle>Sexo *</InputTitle>
                            <Select />
                        </div>
                        <div>
                            <InputTitle>Raça *</InputTitle>
                            <InputPetRegister />
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <InputTitle>Temperamento</InputTitle>
                            <InputPetRegister />
                        </div>
                        <div>
                            <InputTitle>Porte *</InputTitle>
                            <Select />
                        </div>
                        <div>
                            <InputTitle>Cor *</InputTitle>
                            <Select />
                        </div>
                    </Row>
                    <RowFile>
                        <div>
                        <InputTitle>Fotos (min 2, max 6) *</InputTitle>
                        <FileInput />
                        </div>
                    </RowFile>
                </Form>
            </Content>
        </Container>
    )
}