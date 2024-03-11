import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Title, Title2, HomeText, ButtonFinder, ColoredWord, CallMessage, Buttons, HomeImage1, HomeImage2, PhoneIcon, ArrowSignIcon, Section, Section2, PartnerArea } from './styles';
import { DivisionLine } from './styles';
import DogImageRight from '../../assets/images/DogImageRight.png';
import DogImageLeft from '../../assets/images/DogImageLeft.png';
import CatImageRight from '../../assets/images/CatImageRight.png';


export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Section>
                    <HomeText>
                        <Title>Histórias de <ColoredWord>amor</ColoredWord> começam<br />aqui.</Title>
                        <p>Na Adopet, você pode encontrar seu companheiro
                            perfeito dentre uma variedade de animais adoráveis em busca de um lar.
                            Explore nossa plataforma dedicada em encher sua vida de alegria e amor incondicional.</p>
                        <Buttons>
                            <ButtonFinder>PetFinder ↗</ButtonFinder>
                            <a href=""><PhoneIcon /><CallMessage> Agende uma ligação</CallMessage></a>
                        </Buttons>
                    </HomeText>
                    <HomeImage1 src={DogImageRight} alt="Descrição da imagem" />
                </Section>
                <DivisionLine />
                <Section2>
                    <HomeImage2 src={DogImageLeft} alt="Descrição da imagem" />
                    <PartnerArea>
                        <Title2>Torne-se um <ColoredWord>Parceiro</ColoredWord> da Adopet!</Title2>
                        <p>Você representa uma organização dedicada ao bem-estar animal? Junte-se a nós na missão de encontrar lares amorosos para animais necessitados.</p>
                        <a href=""><ArrowSignIcon /><CallMessage>Cadastre-se</CallMessage></a>
                    </PartnerArea>
                    <HomeImage2 src={CatImageRight} alt="Descrição da imagem" />
                </Section2>
            </Content>
        </Container>
    )
}