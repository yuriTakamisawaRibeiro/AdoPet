import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #F5F5F5;
        color: #4B5563;
        -webkit-font-smoothing: antialiased ;
    }

    body, input, button, textarea{
        font-family: 'Poppins', serif;
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
`;