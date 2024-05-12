import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, FilterDiv, Filters, MotherNew, SearchDiv } from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { GrCluster } from "react-icons/gr";
import imageExample from "../../assets/images/educapetExample.png"

export function EducaPet() {
    return (
        <Container>
            <Header />
            <SearchDiv>
                <div>
                    <h1> EducaPet </h1>
                    <h3> Conteúdos novos toda semana </h3>

                    <Input icon={BiSearchAlt} placeholder="Pesquise aqui o conteúdo" />
                </div>
            </SearchDiv>

            <Content>


                <FilterDiv>
                    <MotherNew>
                        <img src={imageExample} alt="" />
                        <div>
                            <GrCluster />
                            <h5>Treinamento</h5>
                            <p> 28 Mar, 2024</p>
                        </div>
                        <h1>Guiando o Caminho: Como Educar um Filhote de Cachorro - 6 Pontos Fundamentais</h1>
                        <p>Educar um filhote de cachorro pode ser uma jornada recompensadora, mas requer paciência, consistência e conhecimento. 
                            Neste artigo, exploramos os seis pontos essenciais para criar um filhote feliz, saudável e bem-comportado. 
                            Desde estabelecer uma rotina sólida até socialização adequada e treinamento básico, cada ponto é crucial 
                            para o desenvolvimento positivo do seu novo companheiro canino.</p>

                        <div>
                            <p>Autor | Gabriel Maia</p>
                        </div>
                    </MotherNew>
                    <Filters>
                    
                    </Filters>
            
                </FilterDiv>
            </Content>
        </Container>
    )
}