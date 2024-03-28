import { Container, InfoIcon, Text, Form, Row, RowFile, InputTitle, InputPetRegister, DescriptionPet, InfoPet, LastInput } from "./styles"
import { Select } from "../../components/Select"
import { FileInput } from "../../components/FileInput"
import { StepsButtons } from "../../components/StepsButtons"
import { PetRegisterHeader } from "../../components/PetRegisterHeader"

import { TextAreaPetDescription } from "./styles"


export function PetRegister() {
    return (
        <Container>
            <PetRegisterHeader />
            <InfoPet>
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
            </InfoPet>
            <DescriptionPet>
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
                    <LastInput>
                        <InputTitle>Cuidados Especiais *</InputTitle>
                        <TextAreaPetDescription placeholder="Neste campo, informe qualquer tipo de necessidades especiais do pet" />
                    </LastInput>
                </Form>
            </DescriptionPet>
            <StepsButtons />
        </Container>
    )
}