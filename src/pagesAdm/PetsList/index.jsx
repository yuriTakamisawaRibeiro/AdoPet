import { useEffect, useState } from "react";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, PetCard, Pets, SearchDiv } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../services/firebaseConfig";

export function PetsList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const petsCollection = collection(firestore, "pets");
            const petsSnapshot = await getDocs(petsCollection);
            const petsData = [];
            
            for (const doc of petsSnapshot.docs) {
                const id = doc.id;
                const petData = doc.data();
                
                const listRef = ref(storage, `pets/${id}`);

                // Find all the prefixes and items.
                listAll(listRef)
                  .then((res) => {
                    res.items.forEach((itemRef) => {
                      console.log(itemRef)
                    });
                  }).catch((error) => {
                    console.log(error)
                  });
            }
        
            setPets(petsData);
        };

        fetchPets();
    }, []);

    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <SearchDiv>
                    <Input
                        icon={BiSearchAlt}
                        placeholder="Pesquisar pela Raça ou ID"
                    />

                    <p>
                        Pet´s Registrados
                    </p>

                    <div className="line"></div>
                </SearchDiv>

                <Pets>
                    {pets.map((pet) => (
                        <PetCard key={pet.id}>
                            <div>
                                <img src={pet.imageUrl} alt="" />
                                <h1>{pet.breed} {pet.id}</h1>
                            </div>
                            <div>
                                <button> <IoMdEye /></button>
                                <button><IoPencil /></button>
                            </div>
                        </PetCard>
                    ))}
                </Pets>
            </Content>
        </Container>
    );
}
