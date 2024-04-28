import { Container, Content, Icon, Navigation, UserIcon, DivisionLine, HeaderMobile, MenuIcon, MenuMobile, MenuHeader } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { getAuth, signOut } from "firebase/auth"; // Importa métodos corretos do Firebase Authentication
import { auth } from "../../firebase"; // Supondo que "auth" seja o objeto de autenticação do Firebase
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleSignOut = async () => {
        try {
            await signOut(auth); // Faz o logout usando o objeto "auth" do Firebase
            console.log('Logout bem-sucedido');
            // Adicione aqui lógica adicional após o logout, se necessário
            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
            // Tratar erros de logout, se necessário
        }
    };

    function handleProfile(){
        window.location.href = '/profile';

    }

    return (
        <Container>
            <Content>
                <img src={AdopetImg} alt="Logo do site" />
                <Navigation>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/petfinder">PetFinder</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li><Link to="/aboutus">Sobre Nós</Link></li>
                    </ul>
                </Navigation>
                <Icon>
                    <UserIcon onClick={handleProfile}/>
                    <FaSignOutAlt onClick={handleSignOut} style={{ cursor: 'pointer' }} />
                </Icon>
            </Content>

            <HeaderMobile>
                <img src={AdopetImg} alt="Logo do site" />
                <MenuIcon size={36} onClick={toggleMenu}/>
            </HeaderMobile>
            {isMenuOpen && (
                <MenuMobile>
                <MenuHeader>
                <img src={AdopetImg} alt="Logo do site" />
                <MenuIcon size={36} onClick={toggleMenu}/>
                </MenuHeader>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/petfinder">PetFinder</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li><Link to="/aboutus">Sobre Nós</Link></li>
                    </ul>
                </MenuMobile>
            )}
            <DivisionLine></DivisionLine>

        </Container>
    );
}