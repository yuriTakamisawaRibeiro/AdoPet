import { Container, Content, Icon, Navigation,UserIcon, DivisionLine } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';

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
                    <UserIcon/>
                </Icon>
                
            </Content>
            <DivisionLine></DivisionLine>
        </Container>
    )
}