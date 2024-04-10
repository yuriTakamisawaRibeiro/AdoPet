import styled from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Container = styled.div`
  width: 100%;
  padding: 0 18vw;
  `

export const InfoPet = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > h1 {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;

    > p {
        text-align: start;
    }
`

export const InfoIcon = styled(IoIosInformationCircleOutline)`
    font-size: 38px;
    margin-top: 7px;
    margin-right: 12px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0 40px 0;
    text-align: start;
    justify-content: center;

    > div {
        text-align: start;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3vw;
    margin-bottom: 60px;

    > div {
        width: 22vw;
    }

    > div:nth-of-type(2) {
        width: 20%;
    }
`

export const Row2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    > div {
        width: 22vw;
    }
`

export const RowFile = styled.div`
    width: 100%;
`

export const InputTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
`

export const InputPetRegister = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`

export const BackButton = styled.button`
    width: 100%;
    background-color: #F3F3EB;
    color: #4B5563;
    height: 4rem;
    border: 1.5px solid #4B5563;
    border-radius: 0.5rem;
    font-size: 22px;
    font-weight: 400;
    text-align: center;

    &:disabled{
        opacity: 0.5;
    }

    &:hover {
        transform: translate(0px);
        padding: 0px 0px;
    }
`

export const NextButton = styled.button`
    width: 100%;
    background-color: #4B5563;
    color: #F3F3EB;
    height: 4rem;
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
        padding: 0px 0px;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    padding: 0 10vw;
    flex-direction: row;
    gap: 60%;
    justify-content: space-between;
    margin-bottom: 80px;
`

export const DescriptionPet = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > img {
        margin-top: 100px;
        margin-bottom: 60px;
    }

    > h1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
`

export const ContactStep = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > img {
        margin-top: 100px;
        margin-bottom: 60px;
    }

    > h1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
`

export const TermsStep = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > img {
        margin-top: 100px;
        margin-bottom: 60px;
    }

    > h1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
`

export const TermsArea = styled.div`
    width: 100%;
    margin-top: 15px;
    height: 70vh;
    background-color: #FFFFF3;
    text-align: start;
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
    overflow: auto;
    padding-bottom: 40px;
`

export const TextAreaPetDescription = styled.textarea`
    margin-top: 10px;
    height: 12rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
    margin-bottom: 0px;
`

export const LastInput = styled.div`
    margin-top: 60px;
    width: 100%;
`
