import styled from "styled-components";
import { LuListFilter } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";


export const Container = styled.div`
  width: 100%;
  `

export const Content = styled.div`
  width: 78%;
  margin: auto;
  overflow: hidden;
  text-align: center;
  align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const BuscaPataFrame1 = styled.img`
    margin-top: 80px;
    width: 95%;

    @media (max-width: 768px) {
    display: none
  }
    
`

export const BuscaPataFrame1Mobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-top: 80px;
  }
`

export const TextDiv = styled.div`
width: 40%;
align-items: center;
gap: 30px;
display: flex;
flex-direction: column;
`

export const Search = styled.div`
    margin-top: 80px;
    align-items: center;
    text-align: center;
    gap: 50px;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    width: 80%;

    @media (max-width: 768px) {
    flex-direction: column;

    > button{
      width: 130px;
      height: 50px;

      font-size: 12px;

      
       > svg{
        font-size: 20px;
       }
    }
  }
   
`

export const FilterButton = styled.button`
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  background-color: #e4ac46;
  padding: 10px 30px;
  border: solid #ffffff 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 10px;
  transition : 708ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 80px;

    &:disabled{
        opacity: 0.5;
    }
`

export const MagnifierIcon = styled(SlMagnifier)`

`

export const FilterIcon = styled(LuListFilter)`
    font-size: 16px;
    margin-right: 7px;
`

export const BuscaPataSection = styled.div`
    margin-top: 30px;
    align-items: center;
    text-align: left;
    gap: 50px;
    display: flex;
    flex-direction: column;

    
    
    
    
`

export const Pets = styled.div`
  display: flex;
  overflow-x: auto; /* Habilita a rolagem horizontal */
  gap: 20px;
  width: 100%; /* Define a largura do contêiner */
  max-width: 100%; /* Define a largura máxima */
  height: 600px; /* Define a altura do contêiner */
  padding-bottom: 20px; /* Adiciona um espaço para evitar que os itens fiquem colados à borda inferior */
  -webkit-overflow-scrolling: touch; /* Adiciona rolagem suave para dispositivos iOS */
  scroll-behavior: smooth; /* Adiciona rolagem suave para navegadores modernos */
  white-space: nowrap;
`

export const Title = styled.h1`
margin-top: 80px;

font-family: 'Poppins', SemiBold;
font-weight: 500;
text-align: center;
font-size: 32px;
  margin-bottom: 20px;
  width: 100%;

@media (max-width: 768px) {
  margin-top: 20px;
  }

  
`