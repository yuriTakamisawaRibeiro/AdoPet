import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const SideInfo = styled.div`
    padding-top: 40px;
    background-color: #E8E8E0;
    gap: 30px;
    width: 296px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > p {
        text-align: justify;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    width: 80%;
    color: #E4AC46;
`