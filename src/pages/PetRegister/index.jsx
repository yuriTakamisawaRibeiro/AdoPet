import { Container, InfoIcon, Text, Form, Row, RowFile, InputTitle, InputPetRegister, DescriptionPet, InfoPet, LastInput, TextAreaPetDescription } from "./styles"
import { Select } from "../../components/Select"
import { FileInput } from "../../components/FileInput"
import { StepsButtons } from "../../components/StepsButtons"
import { PetRegisterHeader } from "../../components/PetRegisterHeader"
import { useState } from "react"


export function PetRegister() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    return (
        <Container>
            <PetRegisterHeader currentStep={currentStep} />
            {currentStep === 0 && (
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
            )}
            {currentStep === 1 && (
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
            )}
            <StepsButtons onNext={handleNext} onBack={handleBack} />
        </Container>
    )
}