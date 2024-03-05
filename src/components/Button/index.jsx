import React from 'react';
import PropTypes from 'prop-types'; 
import { Container } from "./styles";

export function Button({title, loading = false, ...rest}){
    return(
    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
        {loading ? 'Carregando...' : title}
    </Container>
    )
}

//validação de props
Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Button;
