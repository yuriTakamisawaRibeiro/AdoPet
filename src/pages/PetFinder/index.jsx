import { Container, Content, PetFinderFrame1, Search, FilterButton, FilterIcon, MagnifierIcon, PetFinderSection, Pets } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import CatAndDogImage from '../../assets/images/CatAndDogImage.svg';
import { Input } from '../../components/Input';
import { Title } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { Newsletter } from "../../components/Newsletter";
import { useNavigate } from "react-router-dom";
import { PetCard } from "../../components/PetCard";

export default function PetFinder() {

    const navigate = useNavigate()

    function handlePetRegister(){
        navigate("/petregister")
    }
    
    return (
        <Container>
            <Header />
            <Content>
                <PetFinderFrame1 src={CatAndDogImage} alt="Descrição da imagem" />
                <Search>
                    <Input icon={MagnifierIcon} placeholder="Faça aqui sua pesquisa" />
                    <FilterButton>
                        <FilterIcon />Filtros
                    </FilterButton>
                    <FilterButton onClick={handlePetRegister}>
                    <AiFillPlusCircle />Cadastrar Pet
                    </FilterButton>
                </Search>
                <PetFinderSection>
                    <Title>PetFinder</Title> 
                     <Pets>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>

                </Pets>
                </PetFinderSection>
              
                <Title>Não se esqueça de preencher seu perfil corretamente para o sistema encontrar os pets perfeitos para você</Title>
                <FilterButton>Preencha aqui</FilterButton>
                <Newsletter />
                <Footer />
            </Content>
        </Container>
    )
}