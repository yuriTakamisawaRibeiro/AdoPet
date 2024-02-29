import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 125px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Title = styled.h1`
margin-top:20px;
  margin-left: 10px;
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

export const Gato = styled.img`
  width: 420px;
  margin-right: 20px;
`;