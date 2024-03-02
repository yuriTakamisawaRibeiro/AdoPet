import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f3f3eb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom:20vh;
`;


export const Logo = styled.img`
  align-self: flex-start;
`;

export const Title = styled.h1`
color:#4B5563;
font-family: 'Poppins', SemiBold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Cat = styled.img`
  width: 46vw;
  height: 91vh;
  margin-right: 4vw;
  margin-top:6vh;
  margin-bottom:3vh;
`;