import { Container, InfoIcon, Text, Form, Row, RowFile, InputTitle, InputPetRegister, DescriptionPet, InfoPet, LastInput, TextAreaPetDescription } from "./styles"
import { Select } from "../../components/Select"
import { FileInput } from "../../components/FileInput"
import { StepsButtons } from "../../components/StepsButtons"
import { PetRegisterHeader } from "../../components/PetRegisterHeader"
import { useState } from "react"


export function PetRegister() {
    const [currentStep, setCurrentStep] = useState(0);
    const [infoPetVisible, setInfoPetVisible] = useState(true);
    const [descriptionPetVisible, setDescriptionPetVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [termsAndConditionsVisible, setTermsAndConditionsVisible] = useState(false);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prevStep => prevStep + 1);
            toggleVisibility(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prevStep => prevStep - 1);
            toggleVisibility(currentStep - 1);
        }
    };

    const toggleVisibility = (step) => {
        switch (step) {
            case 0:
                setInfoPetVisible(true);
                setDescriptionPetVisible(false);
                setContactVisible(false);
                setTermsAndConditionsVisible(false);
                break;
            case 1:
                setInfoPetVisible(false);
                setDescriptionPetVisible(true);
                setContactVisible(false);
                setTermsAndConditionsVisible(false);
                break;
            case 2:
                setInfoPetVisible(false);
                setDescriptionPetVisible(false);
                setContactVisible(true);
                setTermsAndConditionsVisible(false);
                break;
            case 3:
                setInfoPetVisible(false);
                setDescriptionPetVisible(false);
                setContactVisible(false);
                setTermsAndConditionsVisible(true);
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            <PetRegisterHeader currentStep={currentStep} />
            {infoPetVisible && (
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
            {descriptionPetVisible && (
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
            {contactVisible && (
                <h1>Contato teste</h1>
            )}
            {termsAndConditionsVisible && (
                <h1>Termos e condições teste</h1>
            )}
            <StepsButtons onNext={handleNext} onBack={handleBack} />
        </Container>
    )
}