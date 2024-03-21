import styled from 'styled-components'

export const Container = styled.button `
    display: flex;
    align-items:center;
    justify-content:center;
    margin:auto;
    width: 25%;
    background-color: #E4AC46;
    color: #F3F3EB;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size:30px;

    &:disabled{
        opacity: 0.5;
    }
`