import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { ButtonFavorite, Container , ImageArea, NameArea} from "./styles";
import { AiOutlineHeart } from "react-icons/ai";


export function PetCard({fileUrls, breed, species}){
    const navigate = useNavigate()

    
    const navigateToAboutPet = () => {
        navigate('/aboutpet');
    };

    return(
        <Container>
             <ButtonFavorite className='FavoriteDish' >
                <AiOutlineHeart />
            </ButtonFavorite>

            <ImageArea>
            <img 
            src={fileUrls} 
            alt=""
            />
            </ImageArea>

            <NameArea>
                <h2>{breed}</h2>
                <p>{species}</p>
            </NameArea>


            <Button onClick={navigateToAboutPet} title="Ver Mais"/>

        </Container>
    )
}