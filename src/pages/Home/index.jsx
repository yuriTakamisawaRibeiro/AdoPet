import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Title, HomeText, ButtonFinder, ColoredWord } from './styles';


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
                    <ButtonFinder>PetFinder ↗</ButtonFinder>
                </HomeText>
            </Content>
        </Container>
    )
}