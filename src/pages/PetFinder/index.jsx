import { Container, Content, PetFinderFrame1, Search, FilterButton, FilterIcon, MagnifierIcon, PetFinderSection } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import CatAndDogImage from '../../assets/images/CatAndDogImage.svg';
import { Input } from '../../components/Input';
import { Title } from "./styles";
import { Newsletter } from "../../components/Newsletter";

export  default function PetFinder() {
    return (
        <Container>
            <Header />
            <Content>
                <PetFinderFrame1 src={CatAndDogImage} alt="Descrição da imagem" />
                <Search>
                    <Input icon={MagnifierIcon} placeholder="Faça aqui sua pesquisa"/><FilterButton><FilterIcon />Filtros</FilterButton>
                </Search>
                <PetFinderSection>
                <Title>PetFinder</Title>
                </PetFinderSection>
                <Title>Não se esqueça de preencher seu perfil corretamente para o sistema encontrar os pets perfeitos para você</Title>
                <FilterButton>Preencha aqui</FilterButton>
                <Newsletter />
                <Footer />
            </Content>
        </Container>
    )
}