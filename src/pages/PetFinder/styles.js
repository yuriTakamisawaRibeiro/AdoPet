import styled from "styled-components";
import { LuListFilter } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import ExpandRight from "../../assets/images/Expand_right.svg"
import ExpandLeft from "../../assets/images/Expand_left.svg"


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

export const PetFinderFrame1 = styled.img`
    margin-top: 80px;
    width: 95%;
    
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
    width: 60%;
   
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

export const PetFinderSection = styled.div`
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

  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem padrão */
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
    z-index: 1;
  }

  &::before {
    left: 0;
    background-image: url(${ExpandRight}); /* Correção aqui */
    background-size: cover;
  }

  &::after {
    right: 0;
    background-image: url(${ExpandLeft}); /* Correção aqui */
    background-size: cover;
  }
`

export const Title = styled.h1`
margin-top: 80px;
font-family: 'Poppins', SemiBold;
font-weight: 500;
text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%
`