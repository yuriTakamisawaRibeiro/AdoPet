import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased ;
  }
  
  body, input, button, textarea{
    color: #4b5563;
    font-family: 'Poppins', regular;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
    
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

  *:focus {
    outline: none;
  }

  input:focus {
    outline: auto;
  }
`;





export default GlobalStyle;
