import { Container } from "./styles";

export function PetRegisterHeader(){
    return(
        <Container>     
                <li ><p>Informações do Pet</p></li>
         
                <li class="active"><p>Descrição do animal</p></li>

                <li ><p>Contato</p></li>
            
                <li><p>Termos e condições</p></li>
        </Container>
    )
}