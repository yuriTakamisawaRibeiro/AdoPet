import { Container } from "./styles";
import PropTypes from 'prop-types';


export function PetRegisterHeader({ currentStep }){
    return(
        <Container>     
            <li className={currentStep === 0 ? "active" : ""}><p>Informações do Pet</p></li>
            <li className={currentStep === 1 ? "active" : ""}><p>Descrição do animal</p></li>
            <li className={currentStep === 2 ? "active" : ""}><p>Contato</p></li>
            <li className={currentStep === 3 ? "active" : ""}><p>Termos e condições</p></li>
        </Container>
    )
}

PetRegisterHeader.propTypes = {
    currentStep: PropTypes.number.isRequired,
};