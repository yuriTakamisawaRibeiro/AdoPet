import { Container } from "./styles";
import PropTypes from 'prop-types';


export function AdotanteRegisterHeader({ currentStep }){
    return(
        <Container>     
            <li className={currentStep === 0 ? "active" : ""}><p>Informações do Adotante</p></li>
            <li className={currentStep === 1 ? "active" : ""}><p>Termos e condições</p></li>
        </Container>
    )
}

AdotanteRegisterHeader.propTypes = {
    currentStep: PropTypes.number.isRequired,
};