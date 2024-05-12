import { AdoptionTerms, Container, Content, GridInfos, InfosAdopet, InfosPet, Line1, Line2, SendForm } from "./styles";
import { Header } from "../../components/Header";
import { IoMdHeartEmpty } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { ButtonOrange } from "../../components/ButtonOrange";

export function AboutPet() {
    return (
        <Container>
            <Header />
            <Content>
                <InfosPet>
                    <Line1>
                        <img src="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg" alt="" />
                        <div>
                            <h2>Thor, Vira-lata</h2>
                            <IoMdHeartEmpty />
                        </div>
                        <div>
                            <p>
                                Cachorro
                            </p>
                            <p>
                                Macho
                            </p>
                            <p>
                                Médio
                            </p>
                        </div>
                    </Line1>
                    <Line2>
                        <h2> Sobre o Thor </h2>
                        <GridInfos>
                            <div>
                                <h4>Informações</h4>
                                <h4>Contato Responsável</h4>
                            </div>
                            <p>Thor foi resgatado das ruas movimentadas da cidade por um abrigo local dedicado ao bem-estar animal. Desde que foi resgatado,
                                Thor recebeu todos os cuidados necessários. Ele está completamente vacinado, castrado e em perfeita saúde.
                                Thor adora brincar com outros cães e é muito sociável, mas também aprecia cochilos aconchegantes em seu cobertor favorito.</p>
                            
                        </GridInfos>
                    </Line2>
                </InfosPet>

                <InfosAdopet>
                    <SendForm>
                        <h2>Interessado em me Adotar?</h2>
                        <h5>Envie um formulário para meu responsável</h5>
                        <ButtonOrange title="Enviar Formulário"/>
                    </SendForm>

                    <AdoptionTerms>
                        <div>
                            <h2>Adoção Responsável</h2>
                            <p>Adotar um animal de estimação é mais do que simplesmente trazer um novo membro para a família; é assumir a responsabilidade de cuidar de uma vida que depende totalmente de nós. Aqui estão alguns princípios-chave da adoção responsável:

                                Ao adotar um animal, comprometa-se a cuidar dele por toda a vida do animal, que pode durar muitos anos. Isso inclui prover alimentação adequada, cuidados veterinários regulares, exercício, e carinho constante.

                                Ofereça um ambiente seguro e confortável para o animal em sua casa. Isso inclui fornecer abrigo adequado, brinquedos e estimulação mental, além de proteger o animal de perigos externos.

                                Mantenha em dia as vacinações, desparasitações e consultas veterinárias regulares. Esteja preparado para enfrentar desafios de saúde que possam surgir ao longo da vida do animal.
                            </p>
                        </div>
                        <div>
                            <h2>Isenção de Responsabilidade</h2>
                            <p>A Adopet é uma plataforma que conecta potenciais adotantes a animais de estimação em busca de um lar, e a abrigos e organizações de adoção. Não garantimos a precisão das informações sobre os animais, que são fornecidas pelas organizações responsáveis. Os usuários devem verificar as informações diretamente com os abrigos antes de adotar. A Adopet não é responsável por problemas decorrentes da adoção. Não realizamos processos de adoção diretamente. Estamos comprometidos com a adoção responsável e o bem-estar animal.</p>
                        </div>
                    </AdoptionTerms>
                </InfosAdopet>

            </Content>
            <Footer/>
        </Container>
    )
}