import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { ButtonFavorite, Container } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";


export function PetCard({imageURL, title, description}){
    const navigate = useNavigate()

    
    const navigateToAboutPet = () => {
        navigate('/aboutpet');
    };

    return(
        <Container>
             <ButtonFavorite className='FavoriteDish' >
                <AiOutlineHeart />
            </ButtonFavorite>

            <img 
            src={imageURL} 
            alt=""
            />

            <a>
                <h2>{title}</h2>
            </a>

            <p>{description}</p>

            <Button onClick={navigateToAboutPet} title="Ver Mais"/>

        </Container>
    )
}