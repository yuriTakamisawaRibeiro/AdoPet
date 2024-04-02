import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Row } from '../PetRegister/styles';
import { Container, Info, SideInfo, Title, Form, RegisterContent } from './styles';

export function CompanyRegister() {
    return(
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
                <Row></Row>
            </Form>
            </RegisterContent>
        </Container>
    )
}