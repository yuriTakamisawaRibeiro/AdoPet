import {
  Container,
  Content,
  Info,
  Text,
  InfoIcon,
  Form,
  Row,
  InputTitle,
  InputFormAdotante,
  Row2,
  TermsStep,
  TermsArea

} from "./styles";
import { AdotanteRegisterHeader } from "./../../components/AdotanteRegisterHeader";
import { StepsButtons } from "../../components/StepsButtons";
import { Select } from "../../components/Select";
import { useState } from "react";

export function FormAdotante() {
  const [currentStep, setCurrentStep] = useState(0);
  const [infoPersonVisible, setInfoPersonVisible] = useState(true);
  const [residentialInfoVisible, setResidentialInfoVisible] = useState(false);
  const [termsAndConditionsVisible, setTermsAndConditionsVisible] =
    useState(false);

  const toggleVisibility = (step) => {
    switch (step) {
      case 0:
        setInfoPersonVisible(true);
        setResidentialInfoVisible(false);
        setTermsAndConditionsVisible(false);
        break;
      case 1:
        setInfoPersonVisible(false);
        setResidentialInfoVisible(true);
        setTermsAndConditionsVisible(false);
        break;
      case 2:
        setInfoPersonVisible(false);
        setResidentialInfoVisible(false);
        setTermsAndConditionsVisible(true);
        break;
      default:
        break;
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

  const optionsResidencia = [
    {label: "Selecione uma opção", value: ""},
    {label: "Casa", value: "casa"},
    {label: "Apartamento", value: "apartamento"},
    
  ]
  return (
    <>
      <Container>
        <AdotanteRegisterHeader
          currentStep={currentStep}
        ></AdotanteRegisterHeader>
      </Container>
      <Content>
        {infoPersonVisible && (
          <Info>
            <h1>Informações do adotante</h1>
            <Text>
              <InfoIcon />
              <p>
                Apenas os campos com &quot;*&quot; são obrigatórios, caso você
                não saiba alguma informação dos demais campos, é permitido
                deixar em branco.
              </p>
            </Text>
            <Form>
              <Row>
                <div>
                  <InputTitle>Nome completo *</InputTitle>
                  <InputFormAdotante name="name" />
                </div>
                <div>
                  <InputTitle>CPF *</InputTitle>
                  <InputFormAdotante name="cpf" />
                </div>
                <div>
                  <InputTitle>Telefone *</InputTitle>
                  <InputFormAdotante name="cpf" />
                </div>
              </Row>
            </Form>
          </Info>
        )}
        {residentialInfoVisible && (
          <Info>
            <h1>Informações residenciais</h1>
            <Text>
              <InfoIcon />
              <p>
                Apenas os campos com &quot;*&quot; são obrigatórios, caso você
                não saiba alguma informação dos demais campos, é permitido
                deixar em branco.
              </p>
            </Text>
            <Form>
              <Row2>
                <div>
                  <InputTitle>CEP *</InputTitle>
                  <InputFormAdotante name="cep" />
                </div>
                <div>
                  <InputTitle>Tipo de residencia *</InputTitle>
                  <Select
                  options={optionsResidencia} 
                  name="residence"
                  />
                </div>
              </Row2>
              <Row>
              <div>
                  <InputTitle>Endereço *</InputTitle>
                  <InputFormAdotante name="endereco" />
                </div>
                <div>
                  <InputTitle>Número *</InputTitle>
                  <InputFormAdotante name="numero" />
                </div>
                <div>
                  <InputTitle>Complemento </InputTitle>
                  <InputFormAdotante name="complemento" />
                </div>
              </Row>
              <Row>
              <div>
                  <InputTitle>Bairro *</InputTitle>
                  <InputFormAdotante name="bairro" />
                </div>
                <div>
                  <InputTitle>Estado *</InputTitle>
                  <InputFormAdotante name="estado" />
                </div>
                <div>
                  <InputTitle>Cidade * </InputTitle>
                  <InputFormAdotante name="cidade" />
                </div>
              </Row>
            </Form>
          </Info>
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
      </Content>
    </>
  );
}
