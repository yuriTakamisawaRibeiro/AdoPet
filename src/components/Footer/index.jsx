import { Container, Content, Navigation, Info, Suport } from "./styles";
import { Title2 } from "../../pages/Home/styles"
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import {Link} from 'react-router-dom'


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
                        <Link to="/petfinder">PetFinder </Link>
                        <li>EducaPet</li>
                        <li>Editar Perfil</li>
                        <li>Cadastro Parceiros</li>
                    </ul>
                </Navigation>
                <Suport>
                    <Title2>Suporte</Title2>
                    <ul>
                        <Link to="/aboutus">Sobre Nós</Link>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <Link to="/contact">Fale Conosco</Link>
                    </ul>
                </Suport>
            </Content>
        </Container>
    )
}