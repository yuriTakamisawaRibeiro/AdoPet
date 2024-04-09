import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { InputTitle } from '../PetRegister/styles';
import { Container, Info, SideInfo, Title, Form, RegisterContent, Input, Row, TextArea, Row2 } from './styles';

export function CompanyRegister() {
    return (
        <Container>
            <SideInfo>
                <img src={AdopetImg} alt="Logo do site" />
                <Title>Juntos, Podemos Fazer a Diferença!</Title>
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
                            <Input placeholder='Nome Fantasia' />
                        </div>
                        <div>
                            <InputTitle>Contato</InputTitle>
                            <Input placeholder='(xx) xxxxx-xxxx' />
                        </div>
                        <div>
                            <InputTitle>Endereço da empresa</InputTitle>
                            <Input placeholder='Avenida Aguia de Haia ,2250' />
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <InputTitle>E-mail</InputTitle>
                            <Input placeholder='contato@adopet.com' />
                        </div>
                        <div>
                            <InputTitle>CNPJ</InputTitle>
                            <Input placeholder='XX.XXX.XXX/0001-XX' />
                        </div>
                        <div>
                            <InputTitle>Segmento da empresa</InputTitle>
                            <Select placeholder='Selecione alguma opção'>
                                <option value="none">Escolha um tópico</option>
                                <option value="adoption">Ajuda com adoção</option>
                                <option value="petRegister">Cadastro de Pets</option>
                                <option value="products">Produtos Adopet</option>
                                <option value="partnership">Parceirias</option>
                            </Select>
                        </div>
                    </Row>
                    <Row2>
                        <div>
                            <InputTitle>Segmento da empresa</InputTitle>
                            <TextArea placeholder='Nesse campo coloque uma breve descrição da empresa, uma breve explicação sobre por que deseja se tornar parceira da Adopet e o tipo de parceria que a empresa está interessada em estabelecer, como patrocínio, doações, voluntariado, entre outros.' />
                        </div>
                    </Row2>
                    <div className="button">
                        <Button title="Enviar Registro" type="submit" />
                    </div>
                </Form>
            </RegisterContent>
        </Container>
    )
}