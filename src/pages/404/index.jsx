import { Container } from "./styles";
import imageNotFound from '../../assets/images/404.svg'

export function NotFoundPage(){
    return(
        <Container>
            <h1> Página não encontrada </h1>
            <img src={imageNotFound} alt="Not Found"/>
        </Container>
    )
}