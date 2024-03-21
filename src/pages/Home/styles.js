import { FiPhone } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  `

export const Content = styled.div`
  width: 78%;
  display: flex;
  margin: auto;
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

export const Title3 = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
  font-size: 40px;
  text-align: end;
  margin-bottom: -15px;
  color: #e4ac46;
`;

export const Title4 = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
  font-size: 40px;
width: 90%;
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

export const EducaPetButton = styled.button`
  font-weight: 400;
  font-size: 22px;
  margin-top: 30px;
  font-weight: 600;
  width: 90%;
  height: 80px;
  color: #fff;
  background-color: #4B5563;
  padding: 10px 30px;
  border: solid #ffffff 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 30px;
  transition : 708ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const ButtonNewsletter = styled.button`
  font-weight: 400;
  font-size: 22px;
  width: 60%;
  justify-content: center;
  text-align: center;
  color: #fff;
  -webkit-box-shadow: 0px 2px 8px #666666;
  -moz-box-shadow: 0px 2px 8px #666666;
  box-shadow: 0px 2px 8px #666666;
  font-weight: 600;
  border: none;
  background-color: #e4ac46;
  border-radius: 50px;
  transition : 708ms;
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

export const Section3 = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Section4 = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
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
  font-size: 16px;
  text-align: justify;
}
`

export const TextArea = styled.div`
width: 40%;
align-items: center;
justify-content: space-between;
gap: 30px;
display: flex;
flex-direction: column;
`

export const EducaPetArea = styled.div`
  margin-top: 80px;
  padding: 40px 30px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  gap: 60px;
  justify-content: center;
  flex-direction: row;
  background-color: #EAEAE4;
  width: 87%;
  align-items: center;
`

export const EmailInput = styled.div`
  padding: 15px;
  -webkit-box-shadow: 0px 2px 8px #666666;
  -moz-box-shadow: 0px 2px 8px #666666;
  box-shadow: 0px 2px 8px #666666;
  margin-bottom: 80px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-top: 30px;
  background-color: #EAEAE4;

`



