import { Container } from "./styles";
import PropTypes from 'prop-types';


export function AdotanteRegisterHeader({ currentStep }){
    return(
        <Container>     
             <li className={currentStep === 0? "active" : ""} aria-label={`Etapa ${currentStep + 1}: Informações do Adotante`}>
                <p>Informações do Adotante</p>
            </li>
            <li className={currentStep === 1? "active" : ""} aria-label={`Etapa ${currentStep + 1}: Informações residenciais`}>
                <p>Informações residenciais</p>
            </li>
            <li className={currentStep === 2? "active" : ""} aria-label={`Etapa ${currentStep + 1}: Termos e condições`}>
                <p>Termos e condições</p>
            </li>
            
        </Container>
    )
}

AdotanteRegisterHeader.propTypes = {
    currentStep: PropTypes.number.isRequired,
};
