import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { InputTitle } from '../PetRegister/styles';
import { Container, Info, SideInfo, Title, Form, RegisterContent, Input, Row, TextArea, Row2, LogoTitle, ButtonDiv } from './styles';

import { firestore } from '../../firebase';
import { useState } from 'react';

export function CompanyRegister() {
    const [formData, setFormData] = useState({
        companyName: '',
        contact: '',
        address: '',
        email: '',
        cnpj: '',
        businessSegment: 'none',
        companyDescription: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firestore.collection('partner').add({
                companyName: formData.companyName,
                contact: formData.contact,
                address: formData.address,
                email: formData.email,
                cnpj: formData.cnpj,
                businessSegment: formData.businessSegment,
                companyDescription: formData.companyDescription,
                timestamp: new Date().toISOString() // Adicionando um timestamp como exemplo
            });

            // Limpa os campos do formulário após o envio
            setFormData({
                companyName: '',
                contact: '',
                address: '',
                email: '',
                cnpj: '',
                businessSegment: 'none',
                companyDescription: ''
            });

            alert('Registro enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o registro:', error);
            alert('Erro ao enviar o registro. Por favor, tente novamente.');
        }
    };

    const optionsSegment = [
        { label: 'Selecione uma opção', value: '' },
        { label: 'Canis e casas de adoção', value: 'adoption' },
        { label: 'Loja para pets, banho e tosa', value: 'petshop' },
        { label: 'Clínicas veterinárias', value: 'vet' },
        { label: 'ONGs e instituições de caridade', value: 'ongs' },
    ];

    
    return (
        <Container>
        <SideInfo>
            <LogoTitle>
            <img src={AdopetImg} alt="Logo do site" />
            <Title>Juntos, Podemos Fazer a Diferença!</Title>
            </LogoTitle>
            <p>Na Adopet, acreditamos que o verdadeiro impacto é feito através da colaboração e do trabalho em equipe. É por isso que estamos sempre em busca de parcerias com empresas que compartilham nossa paixão por ajudar animais em busca de um lar amoroso.
                Ao se tornar um parceiro da Adopet, sua empresa terá a oportunidade única de fazer uma diferença significativa na vida de animais em situação de vulnerabilidade. Sua contribuição não apenas ajuda a salvar vidas, mas também demonstra o compromisso da sua empresa com a responsabilidade social e o bem-estar animal.</p>
        </SideInfo>
        <RegisterContent>
            <Info>
                <h1>Enviar Registro</h1>
                <p>Preencha o formulário e solicite o registro da sua empresa</p>
            </Info>
            <Form>
                <Row>
                    <div>
                        <InputTitle>Nome da empresa</InputTitle>
                        <Input
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder='Nome Fantasia'
                        />
                    </div>
                    <div>
                        <InputTitle>Contato</InputTitle>
                        <Input
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            placeholder='(xx) xxxxx-xxxx'
                        />
                    </div>
                    <div>
                        <InputTitle>Endereço da empresa</InputTitle>
                        <Input
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder='Avenida Aguia de Haia, 2250'
                        />
                    </div>
                </Row>
                <Row>
                    <div>
                        <InputTitle>E-mail</InputTitle>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='contato@adopet.com'
                        />
                    </div>
                    <div>
                        <InputTitle>CNPJ</InputTitle>
                        <Input
                            name="cnpj"
                            value={formData.cnpj}
                            onChange={handleInputChange}
                            placeholder='XX.XXX.XXX/0001-XX'
                        />
                    </div>
                    <div>
                        <InputTitle>Segmento da empresa</InputTitle>
                        <Select
                            name="businessSegment"
                            options={optionsSegment}
                            value={formData.businessSegment}
                            onChange={handleInputChange}
                        >
                        </Select>
                    </div>
                </Row>
                <Row2>
                    <div>
                        <InputTitle>Descrição da empresa</InputTitle>
                        <TextArea
                            name="companyDescription"
                            value={formData.companyDescription}
                            onChange={handleInputChange}
                            placeholder='Nesse campo coloque uma breve descrição da empresa, uma breve explicação sobre por que deseja se tornar parceira da Adopet e o tipo de parceria que a empresa está interessada em estabelecer, como patrocínio, doações, voluntariado, entre outros.'
                        />
                    </div>
                </Row2>
                <ButtonDiv>
                    <Button title="Enviar Registro" onClick={handleSubmit} />
                </ButtonDiv>
            </Form>
        </RegisterContent>
    </Container>
    )
}