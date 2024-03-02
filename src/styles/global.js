import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', regular;
  }

  *:focus {
    outline: none;
  }

  input:focus {
    outline: auto;
  }
`;





export default GlobalStyle;
