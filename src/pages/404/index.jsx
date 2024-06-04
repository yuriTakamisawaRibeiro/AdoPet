import { Container } from "./styles";
import imageNotFound from '../../assets/images/undraw_access_denied_re_awnf.svg'

export function NotFoundPage(){
    return(
        <Container>
            
            <img src={imageNotFound} alt="Not Found"/>
            <h1> Você não possui permissão para acessar essa pagina!! </h1>
        </Container>
    )
}