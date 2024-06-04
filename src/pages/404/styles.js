import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 150px;

    > img{
        width: 400px;
    }

    > h1{
        text-transform: uppercase;

        color: #E4AC46;
    }
`