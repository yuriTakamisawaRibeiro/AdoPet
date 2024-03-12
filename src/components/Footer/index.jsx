import { Container, Content, Navigation, Info, Suport } from "./styles";
import { Title2 } from "../../pages/Home/styles"
import AdopetImg from '../../assets/images/AdopetLogo.svg';


export function Footer() {
    return (
        <Container>
            <Content>
                <img src={AdopetImg} alt="Logo do site" />
                <Info>
                    <Title2>Informações</Title2>
                    <p>Avenida Aguia de Haia</p>
                    <p>Alguma info</p>
                    <p>+55 (11) 95158-0560</p>
                </Info>
                <Navigation>
                <Title2>Navegação</Title2>
                    <ul>
                        <li>PetFinder</li>
                        <li>EducaPet</li>
                        <li>Editar Perfil</li>
                        <li>Cadastro Parceiros</li>
                    </ul>
                </Navigation>
                <Suport>
                    <Title2>Suporte</Title2>
                    <ul>
                        <li>Sobre nós</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Fale conosco</li>
                    </ul>
                </Suport>
            </Content>
        </Container>
    )
}