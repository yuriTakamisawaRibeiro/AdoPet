import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1.5px solid #4E5665;
    border-radius: 0.5rem;
    height: 3.2rem;

> input {
    width: 70%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    border: none;
    background-color: transparent;
    }
`

export const ButtonFile = styled.button`
    width: 34%;
    background-color: #4B5563;
    color: #F3F3EB;
    height: 3.1rem;
    border: 0;
    border-radius: 0.5rem;
    font-weight: 400;
    text-align: center;

    &:disabled{
        opacity: 0.5;
    }
`

export const SelectedFiles = styled.span`
 margin-top: 10px;
    font-size: 14px;
    margin-right: 5px;
`