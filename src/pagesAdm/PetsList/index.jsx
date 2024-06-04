import { useEffect, useState } from "react";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, PetCard, Pets, SearchDiv } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";

export function PetsList() {
    const [pets, setPets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchPets = async () => {
            const petsCollection = collection(firestore, "pets");
            const petsSnapshot = await getDocs(petsCollection);
            const petsData = [];

            petsSnapshot.forEach(doc => {
                const petData = doc.data();
                petsData.push({ id: doc.id, ...petData });
            });

            setPets(petsData);
        };

        fetchPets();
    }, []);

    const filteredPets = pets.filter(pet => {
        const searchTermLower = searchTerm.toLowerCase();
        return pet.id.toLowerCase().includes(searchTermLower) || pet.breed.toLowerCase().includes(searchTermLower);
    });

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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <p>
                        Pets Registrados
                    </p>

                    <div className="line"></div>
                </SearchDiv>

                <Pets>
                    {filteredPets.map((pet) => (
                        <PetCard key={pet.id}>
                            <div>
                                {/* Exibe a primeira imagem do pet */}
                                <img src={pet.fileUrls[0]} alt="" />
                                <h1>{`${pet.breed}`}</h1>
                                <p>{`#${pet.id}`}</p>
                            </div>
                            <div>
                                <button> <IoMdEye /></button>
                            </div>
                        </PetCard>
                    ))}
                </Pets>
            </Content>
        </Container>
    );
}
