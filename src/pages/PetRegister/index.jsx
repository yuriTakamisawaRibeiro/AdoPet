import { Container, InfoIcon, Text, Form, Row, RowFile, InputTitle, InputPetRegister, DescriptionPet, InfoPet, LastInput, TextAreaPetDescription, ContactStep, Row2, TermsStep, TermsArea } from "./styles"
import { Select } from "../../components/Select"
import { FileInput } from "../../components/FileInput"
import { StepsButtons } from "../../components/StepsButtons"
import { PetRegisterHeader } from "../../components/PetRegisterHeader"
import { useState } from "react"
import { firestore, storage } from "../../firebase/index";
import { addDoc, collection } from "firebase/firestore"
import { ref, uploadBytes } from "firebase/storage"


export function PetRegister() {
    const [currentStep, setCurrentStep] = useState(0);
    const [infoPetVisible, setInfoPetVisible] = useState(true);
    const [descriptionPetVisible, setDescriptionPetVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [termsAndConditionsVisible, setTermsAndConditionsVisible] = useState(false);
    const [formData, setFormData] = useState({
        species: "",
        gender: "",
        breed: "",
        temperament: "",
        size: "",
        color: "",
        history: "",
        specialCare: "",
        tutorName: "",
        tutorCep: "",
        tutorPhone: "",
        tutorEmail: "",
        tutorSocialMedia: ""
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleFileChange = (files) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedFiles: Array.isArray(files) ? files : [files] // Garante que selectedFiles seja sempre um array
        }));
    };
    
    const handleSubmit = async () => {
        try {
            // Adiciona os dados do formData ao Firestore
            const formsPetsCollectionRef = collection(firestore, 'formsPets');
            const docRef = await addDoc(formsPetsCollectionRef, formData);
            console.log('Documento adicionado com ID:', docRef.id);
    
            // Envia os arquivos para o Storage
            const files = formData.selectedFiles; // Obtém a lista de arquivos selecionados
            const petFilesRef = ref(storage, `petsForms/${docRef.id}`);
    
            // Itera sobre cada arquivo e envia para o Storage
            files.forEach(async (file) => {
                const fileRef = ref(petFilesRef, file.name);
                await uploadBytes(fileRef, file);
                console.log(`Arquivo ${file.name} enviado com sucesso.`);
            });
        } catch (error) {
            console.error('Erro ao adicionar documento:', error);
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prevStep => prevStep + 1);
            toggleVisibility(currentStep + 1);
        }
        else {
            handleSubmit()
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

    const optionsSexo = [
        { label: 'Selecione uma opção', value: '' },
        { label: 'Macho', value: 'macho' },
        { label: 'Fêmea', value: 'femea' },
    ];

    const optionsSize = [
        { label: 'Selecione uma opção', value: '' },
        { label: 'Porte Pequeno', value: 'pequeno' },
        { label: 'Porte Médio', value: 'medio' },
        { label: 'Porte Grande', value: 'grande' },
    ]

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
                                <InputPetRegister name="species"
                                    value={formData.species}
                                    onChange={handleInputChange} />
                            </div>
                            <div>
                                <InputTitle >Sexo *</InputTitle>
                                <Select options={optionsSexo}
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>Raça *</InputTitle>
                                <InputPetRegister name="breed"
                                value={formData.breed}
                                onChange={handleInputChange}/>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <InputTitle>Temperamento</InputTitle>
                                <InputPetRegister name="temperament"
                                value={formData.temperament}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>Porte *</InputTitle>
                                <Select options={optionsSize}
                                name= "size"
                                value={formData.size} 
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>Cor *</InputTitle>
                                <InputPetRegister name="color"
                                value={formData.color}
                                onChange={handleInputChange}/>
                            </div>
                        </Row>
                        <RowFile>
                            <div>
                                <InputTitle>Fotos (min 2, max 6) *</InputTitle>
                                <FileInput onChange={handleFileChange}/>
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
                        <TextAreaPetDescription name= "history"
                                value={formData.history} 
                                onChange={handleInputChange} placeholder="Neste campo, conte a história que o levou até esse momento de colocar o pet para adoção" />
                        <LastInput>
                            <InputTitle>Cuidados Especiais *</InputTitle>
                            <TextAreaPetDescription  name= "specialCare"
                                value={formData.specialCare} 
                                onChange={handleInputChange} placeholder="Neste campo, informe qualquer tipo de necessidades especiais do pet" />
                        </LastInput>
                    </Form>
                </DescriptionPet>
            )}
            {contactVisible && (
                <ContactStep>
                    <h1>Contato</h1>
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
                                <InputTitle>Nome completo *</InputTitle>
                                <InputPetRegister name= "tutorName"
                                value={formData.tutorName} 
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>CEP *</InputTitle>
                                <InputPetRegister name= "tutorCep"
                                value={formData.tutorCep} 
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>Telefone *</InputTitle>
                                <InputPetRegister name= "tutorPhone"
                                value={formData.tutorPhone} 
                                onChange={handleInputChange}/>
                            </div>
                        </Row>
                        <Row2>
                            <div>
                                <InputTitle>E-mail *</InputTitle>
                                <InputPetRegister name= "tutorEmail"
                                value={formData.tutorEmail} 
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <InputTitle>Redes sociais</InputTitle>
                                <InputPetRegister name= "tutorSocialMedia"
                                value={formData.tutorSocialMedia} 
                                onChange={handleInputChange}/>
                            </div>
                        </Row2>
                    </Form>
                </ContactStep>
            )}
            {termsAndConditionsVisible && (
                <TermsStep>
                    <h1>Termos e condições</h1>
                    <TermsArea>
                        <p>
                            Termos e Condições para Cadastro de Pets:</p>
                        Ao cadastrar um pet na plataforma Adopet, você concorda com os seguintes termos e condições:<br /><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>1. Veracidade das Informações: Você declara que todas as informações fornecidas sobre o pet são precisas e atualizadas. Qualquer informação falsa ou enganosa pode resultar na remoção do cadastro.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>2. Responsabilidade do Tutor: Como tutor do pet cadastrado, você é responsável por fornecer cuidados adequados ao animal e garantir seu bem-estar físico e emocional.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>3. Autorização para Adoção: Você autoriza a Adopet a compartilhar as informações do pet com potenciais adotantes interessados em sua adoção.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>4. Processo de Adoção: Você reconhece que a Adopet não realiza processos de adoção diretamente e que qualquer adoção é realizada diretamente entre você (tutor) e o adotante.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>5. Remoção do Cadastro: A Adopet se reserva o direito de remover o cadastro do pet a qualquer momento, se considerar necessário, sem aviso prévio.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>6. Atualização de Informações: Você concorda em manter suas informações de contato e sobre o pet atualizadas na plataforma.</p><br />
                        <p style={{ marginLeft: '3vw', marginRight: '4vw', textAlign: 'justify' }}>7. Uso de Imagens: Você autoriza o uso das imagens do pet cadastradas na plataforma para fins de divulgação e promoção da adoção responsável.</p><br />
                    </TermsArea>
                </TermsStep>
            )}
            <StepsButtons onNext={handleNext} onBack={handleBack} />
        </Container>
    )
}