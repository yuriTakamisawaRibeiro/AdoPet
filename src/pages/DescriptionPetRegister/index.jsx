import { Container, Content, InfoIcon, Text, Form, InputTitle, TextAreaPetDescription } from "./styles"
import RegisterSteps2 from "../../assets/images/RegisterSteps2.svg"
import { StepsButtons } from "../../components/StepsButtons"

export  default function DescriptionPetRegister() {
    return (
        <Container>
            <Content>
                <img src={RegisterSteps2} alt="Passo dois" />
                <h1>Descrição do animal</h1>
                <Text>
                    <InfoIcon />
                    <p>Apenas os campos com &quot;*&quot; são obrigatórios,
                        caso você não saiba alguma informação dos demais campos,
                        é permitido deixar em branco.
                    </p>
                </Text>
                <Form>
                            <InputTitle>História do Pet *</InputTitle>
                            <TextAreaPetDescription placeholder="Neste campo, conte a história que o levou até esse momento de colocar o pet para adoção" />
                            <InputTitle>Cuidados Especiais *</InputTitle>
                            <TextAreaPetDescription placeholder="Neste campo, informe qualquer tipo de necessidades especiais do pet" />
                </Form>
            </Content>
            <StepsButtons />
        </Container>
    )
}