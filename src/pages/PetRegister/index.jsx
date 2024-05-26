import {
  Container,
  InfoIcon,
  Text,
  Form,
  Row,
  RowFile,
  InputTitle,
  InputPetRegister,
  DescriptionPet,
  InfoPet,
  LastInput,
  TextAreaPetDescription,
  ContactStep,
  Row2,
  TermsStep,
  TermsArea,
} from "./styles";
import { Select } from "../../components/Select";
import { FileInput } from "../../components/FileInput";
import { StepsButtons } from "../../components/StepsButtons";
import { PetRegisterHeader } from "../../components/PetRegisterHeader";
import { useState } from "react";
import { firestore, storage } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

export function PetRegister() {
  const [currentStep, setCurrentStep] = useState(0);
  const [infoPetVisible, setInfoPetVisible] = useState(true);
  const [descriptionPetVisible, setDescriptionPetVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [termsAndConditionsVisible, setTermsAndConditionsVisible] =
    useState(false);
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
    tutorSocialMedia: "",
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

  const handleFileChange = (selectedFiles) => {
    // Convert FileList to an array
    const filesArray = Array.from(selectedFiles);
    // Update the state with the selected files
    setFiles(filesArray);
  };

  const handleSubmit = async () => {
    try {
      // Adiciona os dados do formData ao Firestore
      const formsPetsCollectionRef = collection(firestore, "formsPets");
      const docRef = await addDoc(formsPetsCollectionRef, formData);
      console.log("Documento adicionado com ID:", docRef.id);

      // Envia os arquivos para o Storage
      const files = formData.selectedFiles; // Obtém a lista de arquivos selecionados
      const petFilesRef = ref(storage, `petsForms/${docRef.id}`);

      // Itera sobre cada arquivo e envia para o Storage
      files.forEach(async (file) => {
        const fileRef = ref(petFilesRef, file.name);
        await uploadBytes(fileRef, file);
        console.log(`Arquivo ${file.name} enviado com sucesso.`);
      });

      Object.keys(files).forEach((fileKey) => {
        const file = files[fileKey];
        const storageRef = ref(storage, `formsPets/${docRef.id}/${file.name}`);
        const uploadTask = uploadBytes(storageRef, file);
      });
    } catch (error) {
      console.error("Erro ao adicionar documento:", error);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
      toggleVisibility(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
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
    { label: "Selecione uma opção", value: "" },
    { label: "Macho", value: "macho" },
    { label: "Fêmea", value: "femea" },
  ];

  const optionsSize = [
    { label: "Selecione uma opção", value: "" },
    { label: "Porte Pequeno", value: "pequeno" },
    { label: "Porte Médio", value: "medio" },
    { label: "Porte Grande", value: "grande" },
  ];

  return (
    <Container>
      <PetRegisterHeader currentStep={currentStep} />
      {infoPetVisible && (
        <InfoPet>
          <h1>Registro de informações</h1>
          <Text>
            <InfoIcon />
            <p>
              Apenas os campos com &quot;*&quot; são obrigatórios, caso você não
              saiba alguma informação dos demais campos, é permitido deixar em
              branco.
            </p>
          </Text>
          <Form>
            <Row>
              <div>
                <InputTitle>Espécie *</InputTitle>
                <InputPetRegister
                  name="species"
                  value={formData.species}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Sexo *</InputTitle>
                <Select
                  options={optionsSexo}
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Raça *</InputTitle>
                <InputPetRegister
                  name="breed"
                  value={formData.breed}
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <Row>
              <div>
                <InputTitle>Temperamento</InputTitle>
                <InputPetRegister
                  name="temperament"
                  value={formData.temperament}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Porte *</InputTitle>
                <Select
                  options={optionsSize}
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Cor *</InputTitle>
                <InputPetRegister
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <RowFile>
              <div>
                <InputTitle>Fotos (min 2, max 6) *</InputTitle>
                <FileInput onChange={handleFileChange} />
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
            <p>
              Apenas os campos com &quot;*&quot; são obrigatórios, caso você não
              saiba alguma informação dos demais campos, é permitido deixar em
              branco.
            </p>
          </Text>
          <Form>
            <InputTitle>História do Pet *</InputTitle>
            <TextAreaPetDescription
              name="history"
              value={formData.history}
              onChange={handleInputChange}
              placeholder="Neste campo, conte a história que o levou até esse momento de colocar o pet para adoção"
            />
            <LastInput>
              <InputTitle>Cuidados Especiais *</InputTitle>
              <TextAreaPetDescription
                name="specialCare"
                value={formData.specialCare}
                onChange={handleInputChange}
                placeholder="Neste campo, informe qualquer tipo de necessidades especiais do pet"
              />
            </LastInput>
          </Form>
        </DescriptionPet>
      )}
      {contactVisible && (
        <ContactStep>
          <h1>Contato</h1>
          <Text>
            <InfoIcon />
            <p>
              Apenas os campos com &quot;*&quot; são obrigatórios, caso você não
              saiba alguma informação dos demais campos, é permitido deixar em
              branco.
            </p>
          </Text>
          <Form>
            <Row>
              <div>
                <InputTitle>Nome completo *</InputTitle>
                <InputPetRegister
                  name="tutorName"
                  value={formData.tutorName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>CEP *</InputTitle>
                <InputPetRegister
                  name="tutorCep"
                  value={formData.tutorCep}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Telefone *</InputTitle>
                <InputPetRegister
                  name="tutorPhone"
                  value={formData.tutorPhone}
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <Row2>
              <div>
                <InputTitle>E-mail *</InputTitle>
                <InputPetRegister
                  name="tutorEmail"
                  value={formData.tutorEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <InputTitle>Redes sociais</InputTitle>
                <InputPetRegister
                  name="tutorSocialMedia"
                  value={formData.tutorSocialMedia}
                  onChange={handleInputChange}
                />
              </div>
            </Row2>
          </Form>
        </ContactStep>
      )}
      {termsAndConditionsVisible && (
        <TermsStep>
          <h1>Termos e condições</h1>
          <TermsArea>
            <p>Termos e Condições para Cadastro de Pets na Plataforma AdoPet</p>
            Antes de prosseguir com o cadastro do seu pet, por favor, leia
            atentamente os seguintes termos e condições:
            <br />
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              1. Ao cadastrar o seu pet na plataforma AdoPet, você confirma que
              possui autoridade legal para realizar tal ação e que todas as
              informações fornecidas são precisas e verdadeiras.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              2. Você concorda em fornecer fotos, descrições e informações
              precisas sobre o seu pet para facilitar o processo de adoção.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              3. Você é responsável por garantir que seu pet esteja em boa saúde
              e tenha as vacinas necessárias de acordo com a legislação local.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              4. Você concorda em fornecer toda a assistência necessária para
              garantir o bem-estar do seu pet durante o processo de adoção.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              5. A plataforma AdoPet atua apenas como intermediária no processo
              de adoção de pets, conectando donos de pets cadastrados com
              potenciais adotantes..
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              6. A plataforma não assume responsabilidade por qualquer problema
              que possa surgir durante ou após o processo de adoção, incluindo,
              mas não se limitando a, questões de saúde, comportamento ou
              legalidade.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              7. A plataforma não se responsabiliza por qualquer acordo feito
              entre o dono do pet e o adotante, incluindo, mas não se limitando
              a, termos de adoção, custos associados ou questões de transporte.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              8. Recomendamos que os usuários da plataforma formalizem seus
              acordos por escrito e, quando aplicável, busquem a orientação de
              profissionais qualificados, como veterinários e advogados.
            </p>
            <br />
            <p
              style={{
                marginLeft: "3vw",
                marginRight: "4vw",
                textAlign: "justify",
              }}
            >
              8. A plataforma AdoPet reserva-se o direito de fazer alterações
              nestes termos e condições a qualquer momento, sem aviso prévio.
              Recomendamos que os usuários revisem periodicamente os termos e
              condições para estar ciente de quaisquer atualizações.
            </p>
            <br />
            <p>
              Ao prosseguir com o cadastro do seu pet na plataforma AdoPet, você
              concorda com todos os termos e condições acima mencionados. Se
              você não concordar com estes termos, por favor, não prossiga com o
              cadastro do seu pet.
            </p>
          </TermsArea>
        </TermsStep>
      )}
      <StepsButtons onNext={handleNext} onBack={handleBack} />
    </Container>
  );
}
