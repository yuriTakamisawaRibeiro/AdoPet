import { Container, Content, Icon, Navigation } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { FaUser } from "react-icons/fa6";

export function Header() {
    return (
        <Container>
            <Content>


                <img src={AdopetImg} alt="Logo do site" />
                <Navigation>
                    <ul>
                        <li>Home</li>
                        <li>PetFinder</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                    </ul>
                </Navigation>
                <Icon>
                    <FaUser />
                </Icon>
            </Content>
        </Container>
    )
}