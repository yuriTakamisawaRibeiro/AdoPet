import { FiPhone } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  width: 78%;
  display: flex;
  margin: auto;
  margin-bottom:0;
  overflow: hidden;
  flex-direction: column;
`
export const HomeText = styled.div`
margin-top: 40px;
text-align: left;

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

export const Title2 = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
  font-size: 26px;
  margin-bottom: 20px;
`;

export const HomeImage1 = styled.img`
  margin-top: 80px;
`;

export const HomeImage2 = styled.img`
`;

export const ButtonFinder = styled.button`
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
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  > a {
    padding-left: 50px;
    display: flex;
  flex-direction: row;
  }
`

export const CallMessage = styled.p`
  margin-left: 7px;
`

export const ColoredWord = styled.span`
  color: #e4ac46;
`

export const PhoneIcon = styled(FiPhone)`
margin-top: 2px;
font-size: 20px;
`

export const ArrowSignIcon = styled(FaArrowUpRightFromSquare)`
margin-top: 4px;
font-size: 16px;
`

export const Section = styled.div`
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: row;
  width: 100%;
`

export const Section2 = styled.div`
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: row;
  width: 100%;
`

export const DivisionLine = styled.div`
    margin: 80px auto;
    width: 100%;
    height: 1px;
    background-color: #4B5563;
`

export const PartnerArea = styled.div`
width: 50%;
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: column;
> a {
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
  }

> p {
  text-align: justify;
}
`


