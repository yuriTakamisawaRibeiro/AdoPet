import styled from "styled-components";

export const Container = styled.div`
    margin-top: 160px;
    margin-bottom: 120px;
  `

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
`

export const Title4 = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
  font-size: 35px;
width: 100%;
text-align: center;

@media (max-width: 768px) {
  width: 100%;
  font-size: 22px;
  text-align: center;
  }
`;

export const ButtonNewsletter = styled.button`
  font-weight: 400;
  font-size: 22px;
  width: 50%;
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

  @media (max-width: 768px) {
  padding: 10px;
  width: 80%;
  }
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
  width: 70%;
  margin-top: 30px;
  background-color: #E8E8E0;

  @media (max-width: 768px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`