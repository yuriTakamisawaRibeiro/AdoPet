import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const SideInfo = styled.div`
    background-color: #E8E8E0;
    gap: 20px;
    width: 18vw;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    > p {
        font-size: 12px;
        text-align: justify;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    width: 80%;
    color: #E4AC46;
`

export const Info = styled.div`
    padding-top: 8vh;
    padding-bottom: 8vh;
    width: 70%;
    text-align: center;
`

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;

    .button {
        width: 15vw;
        margin-top: -34px;
    }

`

export const RegisterContent = styled.div`
    padding-left: 18vw;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: start;
`

export const Input = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    
    > div {
        width: 100%;
    }
`

export const Row2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const TextArea = styled.textarea`
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