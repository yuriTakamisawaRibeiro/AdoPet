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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align:center;
  margin-top: 50px;

  @media (max-width: 1099px) {
    margin-top: 200px;
  }
`;

export const Cat = styled.img`
  width: fit-content;
  height: 100vh;
  @media (max-width: 1099px) {
    display: none;
  }
`;


