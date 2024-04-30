import { Container, Content, Navigation, Info, Suport, ContentMobile } from "./styles";
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
                    <p>contato@adopet.com</p>
                    <p>+55 (11) 95158-0560</p>
                </Info>
                <Navigation>
                <Title2>Navegação</Title2>
                <ul>
                        <Link to="/petfinder">BuscaPata </Link>
                        <Link>EducaPet</Link>
                        <Link>Editar Perfil</Link>
                        <Link to="/companyregister">Cadastro Parceiros</Link>
                        </ul>
                </Navigation>
                <Suport>
                    <Title2>Suporte</Title2>
                    <ul>
                        <Link to="/aboutus">Sobre Nós</Link>
                        <Link>FAQ</Link>
                        <Link>Blog</Link>
                        <Link to="/contact">Fale Conosco</Link>
                    </ul>
                </Suport>
            </Content>
            <ContentMobile>
                <p>Copyright © 2024. Feito com 🧡 por <span>Adopet</span> Todos os direitos reservados.</p>
            </ContentMobile>
        </Container>
    )
}