import { Button } from "../Button";
import { ButtonFavorite, Container } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";


export function PetCard({imageURL, title, description}){
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

            <Button title="Ver Mais"/>

        </Container>
    )
}