import { Container } from "./styles";

export function PetRegisterHeader(){
    return(
        <Container>     
                <li >Informações do Pet</li>
         
                <li >Descrição do animal</li>

                <li class="active">Contato</li>
            
                <li>Termos e condições</li>
        </Container>
    )
}