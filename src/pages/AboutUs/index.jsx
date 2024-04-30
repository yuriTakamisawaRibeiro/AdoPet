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
import LoveHistory2 from "../../assets/images/petHistory2.jpeg"
import LoveHistory3 from "../../assets/images/loveHistory3.jpeg"
import LoveHistory4 from "../../assets/images/loveHistory4.jpeg"
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
                                                                <h1>Amizade Inesperada</h1>
                                                                <p>Maria sempre sonhou em ter um cão como companheiro, mas sua agenda ocupada como médica residente parecia impedir esse desejo. 
                                                                Quando ela descobriu a Adopet, ficou surpresa ao ver Teddy, um cão doce em busca de um lar. 
                                                                Apesar de suas preocupações com o tempo, Maria decidiu dar uma chance a Teddy. Desde então, a vida de Maria mudou completamente. 
                                                                Teddy trouxe alegria, conforto e companheirismo à sua vida agitada, mostrando a Maria que o amor incondicional não conhece limites.</p>
                                                        </div>
                                                        <img src={LoveHistory2} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>

                                                <ContentHistory id="3" style={{ display: currentContent === 3 ? 'flex' : 'none' }}>
                                                        <div>
                                                                <h1>Uma Família Completa</h1>
                                                                <p>Ana e Pedro sempre souberam que queriam adotar um animal de estimação para sua família, mas não sabiam por onde começar.
                                                                         Ao descobrirem a Adopet, encontraram Maya, uma cadela brincalhona e amorosa que estava esperando por uma família para chamar de sua. 
                                                                         Maya se encaixou perfeitamente em suas vidas, trazendo alegria e amor para cada momento. Agora, Ana, Pedro e Maya formam uma família completa, 
                                                                         repleta de felicidade e gratidão por terem encontrado um ao outro através da Adopet.</p>
                                                        </div>
                                                        <img src={LoveHistory3} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>
                                                <ContentHistory id="4" style={{ display: currentContent === 4 ? 'flex' : 'none' }}>
                                                        <div>
                                                                <h1>Amor em dose dupla</h1>
                                                                <p>Daniel sempre foi um amante de cães desde criança, mas nunca teve a oportunidade de ter um amigo peludo para chamar de seu. 
                                                                        A vida ocupada na cidade grande e a falta de espaço sempre foram obstáculos para ele. 
                                                                        No entanto, tudo mudou quando ele descobriu a Adopet.Depois de algumas visitas ao abrigo, Daniel decidiu adotar Luna e Max. 
                                                                        Ele estava determinado a dar a eles a vida que mereciam. Com o passar dos dias, Luna e Max se tornaram parte integrante da vida de Daniel.</p>
                                                        </div>
                                                        <img src={LoveHistory4} alt="Foto de uma mulher segurando seu cachorro" />


                                                </ContentHistory>


                                        </CarouselContent>
                                        <Commands>
                                                <Set id="1" style={{ backgroundColor: currentContent === 1 ? '#E4AC46' : '#ECD2A2' }} /> {/* Mude o background de acordo com o estado */}
                                                <Set id="2" style={{ backgroundColor: currentContent === 2 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Set id="3" style={{ backgroundColor: currentContent === 3 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Set id="4" style={{ backgroundColor: currentContent === 4 ? '#E4AC46' : '#ECD2A2' }} />
                                                <Arrows>
                                                        <IoIosArrowBack className="Arrow" onClick={prevContent} />
                                                        <IoIosArrowForward className="Arrow" onClick={nextContent} />
                                                </Arrows>
                                        </Commands>

                                </Carousel>

                        </Content>

                        <Footer />

                </Container>
        )
}
