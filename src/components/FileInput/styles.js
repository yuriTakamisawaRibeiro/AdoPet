import styled from "styled-components";

export const Container = styled.div`
 margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1.5px solid #4E5665;
    border-radius: 0.5rem;
    height: 3.2rem;
    position: relative; /* Adicionado para posicionamento do botão */

    > input[type="file"] {
        width: calc(100% - 40px); /* Ajustado o tamanho do input */
        padding: 1.2rem 1.4rem;
        color: #4E5665;
        border: none;
        background-color: transparent;
        position: relative;
        z-index: 2; /* Garante que o input esteja acima do botão */
    }

    /* Estilização do botão */
    > input[type="file"]::file-selector-button {
        width: 20%; /* Largura do botão */
        background-color: #4B5563;
        color: #F3F3EB;
        height: 3.1rem;
        border: 0;
        border-radius: 0 0.5rem 0.5rem 0;
        font-weight: 400;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1; /* Garante que o botão esteja abaixo do input */
        cursor: pointer;
    }

    &:hover > input[type="file"]::file-selector-button {
        background-color: #374151; /* Cor alterada ao passar o mouse */
    }

    &:disabled {
        opacity: 0.5;
    }
`