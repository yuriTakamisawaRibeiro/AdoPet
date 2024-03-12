import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import {Title, ColoredWord, HomeImage1,Section, AboutText,Caption} from './styles';
import CatAbout from '../../assets/images/CatAbout.svg';


export function AboutUs(){
return(
    <Container>
        <Header/>
            <Content>
            <Section>
                    <AboutText>
                            <Title>Sobre a adopet</Title>
                            <Caption>Encontre <ColoredWord>Amor</ColoredWord>, Dê um <ColoredWord>lar</ColoredWord></Caption>
                            <p>Na Adopet, nossa missão é promover a adoção responsável de animais de estimação e conectar cada animalzinho a um lar amoroso e dedicado. Fundada em 2024, nossa plataforma nasceu do desejo de fazer uma diferença significativa na vida de animais em situações de vulnerabilidade, oferecendo uma maneira acessível e eficaz de encontrar o lar perfeito para cada um deles.</p>
                    </AboutText>
                    <HomeImage1 src={CatAbout} alt="Descrição da imagem" />
            </Section>
            </Content>
    </Container>
)
}