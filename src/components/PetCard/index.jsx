import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { ButtonFavorite, Container , ImageArea, NameArea} from "./styles";
import { AiOutlineHeart } from "react-icons/ai";


export function PetCard({ id ,fileUrls, breed, species, onClick}){
    const navigate = useNavigate()

    
   

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
                <h2>{species}</h2>
                <p>{breed}</p>
            </NameArea>


            <Button onClick={onClick} title="Ver Mais"/>

        </Container>
    )
}