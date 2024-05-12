import styled from "styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
padding: 0 10vw;
flex-direction: row;
gap: 60%;
justify-content: space-between;
margin-bottom: 80px;
margin-top: 80px;

@media (max-width: 768px) {
    gap: 0px;
  }
`

export const BackButton = styled.button`
    width: 100%;
    background-color: #F3F3EB;
    color: #4B5563;
    height: 4rem;
    border: 1.5px solid #4B5563;
    border-radius: 0.5rem;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
    text-align: center;

    &:disabled{
        opacity: 0.5;
    }

    &:hover {
        transform: translate(0px);
    }

    @media (max-width: 768px) {
    width: 40%;
    font-size: 16px;
  }
`

export const NextButton = styled.button`
    width: 100%;
    background-color: #4B5563;
    color: #F3F3EB;
    height: 4rem;
    padding-left: 20px;
    padding-right: 20px;
    border: 0;
    border-radius: 0.5rem;
    font-size: 22px;

    font-weight: 400;
    text-align: center;

    &:disabled{
        opacity: 0.5;
    }

    &:hover {
        transform: translate(0px);
    }

    @media (max-width: 768px) {
    width: 40%;
    font-size: 16px;
  }
`