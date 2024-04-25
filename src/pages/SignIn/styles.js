import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f3f3eb;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom:0;
  overflow: hidden;
`;


export const Logo = styled.img`
position: absolute;
top: 20px; /* Ajuste a distância superior conforme necessário */
left: 20px; /* Ajuste a distância esquerda conforme necessário */
  
`;

export const Title = styled.h1`
font-family: 'Poppins', SemiBold;
font-size: 35px;
margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-top:50px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align:center;

  @media (min-width: 768px) and (max-width: 930px) {
   margin-top: 150px;
  }

  @media (max-width: 768px) {
   margin-top: 150px;
  }
`;

export const Cat = styled.img`
  width: fit-content;
  height: 100vh;

  @media (max-width: 930px) {
    display: none;
  }


`;

export const Linha = styled.a`
    position: relative;
    display: inline-block;
    text-align: center;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 180px; // Ajuste este valor para alterar o comprimento da linha
        height: 1px; // Ajuste este valor para alterar a espessura da linha
        background: black; // Ajuste este valor para alterar a cor da linha
    }

    &::before {
        left: -60px; // Ajuste este valor para alterar a distância da linha ao texto
    }

    &::after {
        right: -60px; // Ajuste este valor para alterar a distância da linha ao texto
    }
`

