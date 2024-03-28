import { Container, Content, Icon, Navigation,UserIcon, DivisionLine } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import {Link} from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={AdopetImg} alt="Logo do site" />
                <Navigation>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/petfinder">PetFinder</Link>
                        <Link to="/contact">Contato</Link>
                        <Link to="/aboutus">Sobre Nós</Link>
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