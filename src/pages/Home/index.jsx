import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import {
    Title, Title2, Title3, HomeText, ButtonFinder, EducaPetButton, ColoredWord, CallMessage, Buttons, HomeImage1, HomeImage2, PhoneIcon, ArrowSignIcon,
    Section, Section2, Section3, PartnerArea, TextArea, EducaPetArea
} from './styles';
import { DivisionLine } from './styles';
import DogImageRight from '../../assets/images/DogImageRight.png';
import DogImageLeft from '../../assets/images/DogImageLeft.png';
import CatImageRight from '../../assets/images/CatImageRight.png';
import CatImageLeft from '../../assets/images/CatImageLeft.png';
import { Newsletter } from "../../components/Newsletter";
import {Link} from 'react-router-dom'


export  default function Home() {
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
                            <ButtonFinder> <Link to="/petfinder">PetFinder ↗</Link></ButtonFinder>
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
                <Section3>
                    <EducaPetArea>
                        <HomeImage2 src={CatImageLeft} alt="Descrição da imagem" />
                        <TextArea>
                            <Title3>COMO CUIDAR DO SEU PET</Title3>
                            <p>Descubra dicas úteis, conselhos práticos e histórias inspiradoras sobre o cuidado e bem-estar dos animais de estimação. Esteja você buscando
                                orientações sobre treinamento, alimentação saudável ou simplesmente inspiração para fortalecer o vínculo com seu companheiro peludo,
                                nosso blog tem tudo para você e seu pet!</p>
                            <EducaPetButton>EducaPet ↗</EducaPetButton>
                        </TextArea>
                    </EducaPetArea>
                </Section3>
                <Newsletter />
                <Footer />
            </Content>
        </Container>
    )
}