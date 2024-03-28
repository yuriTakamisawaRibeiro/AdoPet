import { Container, BackButton, NextButton } from "./styles";
import PropTypes from 'prop-types';

export function StepsButtons({ onNext, onBack }) {
    return(
        <Container>
            <BackButton onClick={onBack}>Voltar</BackButton>
            <NextButton onClick={onNext}>Continuar</NextButton>
        </Container>
    )
}

StepsButtons.propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};