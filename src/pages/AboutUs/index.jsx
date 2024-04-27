import { Arrows, Cards, Carousel, CarouselContent, Commands, Container, Content, Set, ContentHistory } from "./styles"
import { Header } from "../../components/Header"
import { Title, ColoredWord, HomeImage1, Section, AboutText, Caption } from './styles';
import CatAbout from '../../assets/images/CatAbout.svg';
import { Card } from "../../components/Card";
import { TbMessageStar } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa"
import { SiDatadog } from "react-icons/si";
import LoveHistory from "../../assets/images/lovehistory.png"
import { Footer } from "../../components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";


export default function AboutUs() {

        const [currentContent, setCurrentContent] = useState(1); // Declare o estado para controlar o ContentHistory atual

        const nextContent = () => {
                setCurrentContent(prevContent => prevContent < 4 ? prevContent + 1 : 1); // Avança para o próximo ContentHistory, voltando ao primeiro se estiver no último
        };

        const prevContent = () => {
                setCurrentContent(prevContent => prevContent > 1 ? prevContent - 1 : 4); // Retrocede para o ContentHistory anterior, voltando ao último se estiver no primeiro
        };
        return (
                <Container>
                        <Header />
                        <Content>
                                <Section>
                                        <AboutText>
                                                <Title>Sobre a adopet</Title>
                                                <Caption>Encontre <ColoredWord>Amor</ColoredWord>, Dê um <ColoredWord>lar</ColoredWord></Caption>
                                                <p>Na Adopet, nossa missão é promover a adoção responsável de animais de estimação e conectar cada animalzinho a um lar amoroso e dedicado. Fundada em 2024, nossa plataforma nasceu do desejo de fazer uma diferença significativa na vida de animais em situações de vulnerabilidade, oferecendo uma maneira acessível e eficaz de encontrar o lar perfeito para cada um deles.</p>
                                        </AboutText>
                                        <HomeImage1 src={CatAbout} alt="Descrição da imagem" />
                                </Section>
                                <Cards>
                                        <Card icon={TbMessageStar} title="Transparência" />
                                        <Card icon={MdOutlinePets} title="Bem-Estar Animal" />
                                        <Card icon={FaHeadphones} title="Suporte Contínuo" />
                                        <Card icon={SiDatadog} title="Adoção Responsável        " />
                                </Cards>

                                <Carousel>
                                        <CarouselContent>
                                                <ContentHistory id="1" style={{ display: currentContent === 1 ? 'flex' : 'none' }}> {/* Use o estado para controlar a visibilidade */}
                                                        <div>
                                                                <h1>Encontro de Almas Gêmeas</h1>
                                                                <p>Lisa sempre sonhou em ter um cachorro, mas sua agenda ocupada e seu
                                                                        pequeno apartamento na cidade dificultavam a adoção. Ao descobrir a Adopet,
                                                                        ela se apaixonou por Rex, um cãozinho adorável. Após preencher o formulário de adoção,
                                                                        Lisa recebeu uma ligação emocionante confirmando sua aplicação. Quando finalmente conheceu
                                                                        Rex, foi amor à primeira vista.</p>
                                                        </div>
                                                        <img src={LoveHistory} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>

                                                <ContentHistory id="2" style={{ display: currentContent === 2 ? 'flex' : 'none' }}>
                                                        <div>
                                                                <h1>Encontro de Almas 2</h1>
                                                                <p>Lisa sempre sonhou em ter um cachorro, mas sua agenda ocupada e seu
                                                                        pequeno apartamento na cidade dificultavam a adoção. Ao descobrir a Adopet,
                                                                        ela se apaixonou por Rex, um cãozinho adorável. Após preencher o formulário de adoção,
                                                                        Lisa recebeu uma ligação emocionante confirmando sua aplicação. Quando finalmente conheceu
                                                                        Rex, foi amor à primeira vista.</p>
                                                        </div>
                                                        <img src={LoveHistory} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>

                                                <ContentHistory id="3" style={{ display: currentContent === 3 ? 'flex' : 'none' }}>
                                                        <div>
                                                                <h1>Encontro de Almas 3</h1>
                                                                <p>Lisa sempre sonhou em ter um cachorro, mas sua agenda ocupada e seu
                                                                        pequeno apartamento na cidade dificultavam a adoção. Ao descobrir a Adopet,
                                                                        ela se apaixonou por Rex, um cãozinho adorável. Após preencher o formulário de adoção,
                                                                        Lisa recebeu uma ligação emocionante confirmando sua aplicação. Quando finalmente conheceu
                                                                        Rex, foi amor à primeira vista.</p>
                                                        </div>
                                                        <img src={LoveHistory} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>
                                                <ContentHistory id="4" style={{ display: currentContent === 4 ? 'flex' : 'none' }}>
                                                        <div>
                                                                <h1>Encontro de Almas 4</h1>
                                                                <p>Lisa sempre sonhou em ter um cachorro, mas sua agenda ocupada e seu
                                                                        pequeno apartamento na cidade dificultavam a adoção. Ao descobrir a Adopet,
                                                                        ela se apaixonou por Rex, um cãozinho adorável. Após preencher o formulário de adoção,
                                                                        Lisa recebeu uma ligação emocionante confirmando sua aplicação. Quando finalmente conheceu
                                                                        Rex, foi amor à primeira vista.</p>
                                                        </div>
                                                        <img src={LoveHistory} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>


                                        </CarouselContent>
                                        <Commands>
                                                <Set id="1" style={{ backgroundColor: currentContent === 1 ? '#E4AC46' : '#ECD2A2' }} /> {/* Mude o background de acordo com o estado */}
                                                <Set id="2" style={{ backgroundColor: currentContent === 2 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Set id="3" style={{ backgroundColor: currentContent === 3 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Set id="4" style={{ backgroundColor: currentContent === 4 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Arrows>
                                                        <IoIosArrowBack onClick={prevContent}/>
                                                        <IoIosArrowForward onClick={nextContent}/>
                                                </Arrows>
                                        </Commands>

                                </Carousel>


                        </Content>
                        <Footer />
                </Container>
        )
}
