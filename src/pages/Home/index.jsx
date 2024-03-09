import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Title, HomeText, ButtonFinder, ColoredWord, CallMessage, Buttons } from './styles';
import { FiPhone } from "react-icons/fi";


export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <HomeText>
                    <Title>Histórias de <ColoredWord>amor</ColoredWord> começam<br />aqui.</Title>
                    <p>Na Adopet, você pode encontrar seu companheiro
                        perfeito dentre uma variedade de animais adoráveis em busca de um lar.
                        Explore nossa plataforma dedicada em encher sua vida de alegria e amor incondicional</p>
                    <Buttons>
                    <ButtonFinder>PetFinder ↗</ButtonFinder><CallMessage><a><FiPhone/> Agende uma ligação</a></CallMessage>
                    </Buttons>
                </HomeText>
            </Content>
        </Container>
    )
}