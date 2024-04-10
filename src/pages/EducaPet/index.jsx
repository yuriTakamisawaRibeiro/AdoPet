import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Box, Container, Content, EducaPetSection, InfoEduca, InputArea } from "./styles";
import { BsSearch } from "react-icons/bs";


export default function EducaPet() {
    return (
        <Container>
            <Header />
            <Content>

                <EducaPetSection>
                    <Box>
                        <InfoEduca>
                            <h1 style={{ fontSize: '40', fontWeight: '400' }}>EducaPet</h1>
                            <h2 style={{ fontSize: '24', fontWeight: '400' }}>Conteúdos novos toda semana</h2>
                        </InfoEduca>
                        <InputArea>
                            <Input
                                placeholder="Pesquise aqui o conteúdo"
                                icon={BsSearch}/>
                        </InputArea>
                    </Box>
                </EducaPetSection>
            </Content>
        </Container>
    )
}