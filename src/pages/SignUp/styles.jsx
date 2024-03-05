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
  align-self: flex-start;
  margin:0;
`;

export const Cat = styled.img`
  width: fit-content;
  height: 91vh;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom:20px;
`;

export const Title = styled.h1`
color:#4B5563;
font-family: 'Poppins', SemiBold;
font-size: 35px;
margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align:center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 16px;
  width:270px;
  border-radius: 7px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #E8E8E0;
  border: none;

`;

