import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;
flex-direction: column;
gap: 0.8rem;

> label{
    width: 100%;
    color: #4E5665;
}

> input {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid #4E5665;
}

`