import { Container, Content, BuscaPataFrame1, Search, FilterButton, FilterIcon, MagnifierIcon, BuscaPataSection, Pets, BuscaPataFrame1Mobile } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import CatAndDogImage from '../../assets/images/CatAndDogImage.svg';
import CatAndDogImageMobile from '../../assets/images/CatAndDogImageMobile.svg'
import { Input } from '../../components/Input';
import { Title } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { Newsletter } from "../../components/Newsletter";
import { useNavigate } from "react-router-dom";
import { PetCard } from "../../components/PetCard";

export default function BuscaPata() {

    const navigate = useNavigate()

    function handlePetRegister(){
        navigate("/petregister")
    }

    
    return (
        <Container>
            <Header />
            <Content>
                <BuscaPataFrame1 src={CatAndDogImage} alt="Descrição da imagem" />
                <BuscaPataFrame1Mobile src={CatAndDogImageMobile} alt="Descrição da imagem"/>
                <Search>
                    <Input icon={MagnifierIcon} placeholder="Faça aqui sua pesquisa" />
                    <FilterButton>
                        <FilterIcon />Filtros
                    </FilterButton>
                    <FilterButton onClick={handlePetRegister}>
                    <AiFillPlusCircle />Cadastrar Pet
                    </FilterButton>
                </Search>
                <BuscaPataSection>
                    <Title>BuscaPata</Title> 
                     <Pets>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                    <PetCard title="Thor" description="tETDSSSDSJADADA" imageURL="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg"/>
                </Pets>
                </BuscaPataSection>
              
                <Title>Não se esqueça de preencher seu perfil corretamente para o sistema encontrar os pets perfeitos para você</Title>
                <FilterButton>Preencha aqui</FilterButton>
                <Newsletter />
            </Content>
            <Footer />

        </Container>
    )
}