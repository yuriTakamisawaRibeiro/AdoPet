import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const SideInfo = styled.div`
    padding-top: 40px;
    background-color: #E8E8E0;
    gap: 20px;
    width: 296px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    width: 100%;

`

export const RegisterContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`