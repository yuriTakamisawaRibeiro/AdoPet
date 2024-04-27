
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
margin-top: px;

text-align: left;
font-size:13px;

> p {
  margin-top: 10px;
  width: 516px;
}
`

export const Title = styled.h1`
font-family: 'Poppins', SemiBold;
font-weight: 600;
font-size: 40px;
align-self:flex-start;
`;

export const Caption = styled.h2`
font-family: 'Poppins', Medium;
font-size:15px;
align-self:flex-start;
`


export const HomeImage1 = styled.img`
align-self:flex-start;
`;



export const ColoredWord = styled.span`
  color: #e4ac46;
`




export const Section = styled.div`
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: row;
  width: 100%;
`


export const AboutText = styled.div`
width: 48%;
margin-top:50px;
align-items: center;
justify-content: space-between;
gap: 10px;
display: flex;
flex-direction: column;
padding:0px;
font-family: 'Poppins', Regular;
font-size:13px;
`

export const Cards = styled.div`
  display: flex;
  margin-top: 120px;

  gap: 60px;
  justify-content: center;
`

export const Carousel = styled.div`
background-color: #E8E8E0;
height: 550px;
width: 1000px;

margin-top: 120px;

border-radius: 50px;
`

export const CarouselContent = styled.div`
display: flex;
justify-content: center;
`



export const ContentHistory = styled.div`
display: flex;

padding: 40px ;
justify-content: space-evenly;

> div{
  gap: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 40%;

  > h1{
    font-size: 24px;
  }

  > p {
    font-size: 16px;
    text-align: center   ;
  }
}

> img{
  width: 350px;
  height: 400px;

  border-radius: 50px;
 }
`



export const Commands = styled.div`

display: flex;
margin-left: 100px;
margin-bottom: 20px;
gap: 10px;

align-items: center;

  
`

export const Set = styled.div`
width: 10px;
  height: 35px;

  background-color: #ECD2A2;
  border-radius: 50px;
`

export const Arrows = styled.div`
  display: flex;
  font-size: 25px;

  margin-left: 300px;

  gap: 10px;
`







