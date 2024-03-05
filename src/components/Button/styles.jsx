import styled from 'styled-components'

export const Container = styled.button `
    margin:auto;
    width: 75%;
    background-color: #4e5663;
    color: #f5f5fa;
    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size:20px;
    &:disabled{
        opacity: 0.5;
    }
`