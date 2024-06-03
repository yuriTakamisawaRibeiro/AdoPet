import { Container, Content, BuscaPataFrame1, Search, FilterButton, FilterIcon, MagnifierIcon, BuscaPataSection, Pets, BuscaPataFrame1Mobile, Title } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import CatAndDogImage from '../../assets/images/CatAndDogImage.svg';
import CatAndDogImageMobile from '../../assets/images/CatAndDogImageMobile.svg'
import { Input } from '../../components/Input';

import { AiFillPlusCircle } from "react-icons/ai";
import { Newsletter } from "../../components/Newsletter";
import { useNavigate } from "react-router-dom";
import { PetCard } from "../../components/PetCard";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
export default function BuscaPata() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'pets'));
                const fetchedPets = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPets(fetchedPets);
            } catch (error) {
                console.error('Error fetching pets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    function handlePetRegister(){
        navigate("/petregister")
    }

    function NavigateToProfile() {
        navigate("/profile")
    }

    const navigateToAboutPet = (id) => {
        navigate(`/aboutpet/${id}`);
    };

    
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
                        {loading ?(
                            <p>Loading...</p>
                        ) : (
                            pets.map(pet => (
                                <PetCard 
                                    key={pet.id} 
                                    breed={pet.breed} 
                                    species={pet.species} 
                                    fileUrls={pet.fileUrls}
                                    onClick={() => navigateToAboutPet(pet.id)}
                                />
                            ))
                        )}
                     
                </Pets>
                </BuscaPataSection>
              
                <Title>Não se esqueça de preencher seu perfil corretamente para o sistema encontrar os pets perfeitos para você</Title>
                <FilterButton onClick={NavigateToProfile}>Preencha aqui</FilterButton>
                <Newsletter />
            </Content>
            <Footer />

        </Container>
    )
}