import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom:0;
  overflow: hidden;
`
export const HomeText = styled.div`
margin-top: 120px;
text-align: left;
margin-left: 125px;
width: 50%;

> p {
  margin-top: 10px;
  width: 516px;
}
`

export const Title = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
  font-size: 40px;
`;

export const ButtonFinder = styled.button`
  margin-top: 18px;
  font-weight: 400;
  font-size: 22px;
  color: #fff;
  background-color: #e4ac46;
  padding: 10px 30px;
  border: solid #ffffff 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 708ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

export const Buttons = styled.div`
display: flex;
align-items: center;
`

export const CallMessage = styled.p`
  margin-top: 15px;
  margin-left: 70px;
`

export const ColoredWord = styled.span`
  color: #e4ac46;
`