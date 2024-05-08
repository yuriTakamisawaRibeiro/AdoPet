import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(to bottom, rgba(46, 46, 172, 0.63), rgba(151, 44, 201, 0.589));
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const Card = styled.div`
    border-radius: 3vh;
    margin: auto;
    max-width: 380px;
    padding: 7vh 6vh;
    align-items: center;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
`;

export const CardImg = styled.div`
    padding: 20px 0;
    width: 40%;
`;

export const Img = styled.img`
    opacity: 0.7;
    width: 100%;
`;

export const CardTitle = styled.div`
    margin-bottom: unset;
`;

export const Title = styled.p`
    color: rgb(29, 226, 226);
    font-weight: 900;
    font-size: 30px;
    margin-bottom: unset;
`;

export const CardText = styled.div`
    color: grey;
    font-size: 25px;
    text-align: center;
    padding: 3vh 0;
    font-weight: lighter;
`;

export const Text = styled.p`
    margin: 0;
`;

export const Button = styled.button`
    width: 100%;
    background-color: rgb(29, 226, 226);
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 20px;
    padding: 10px 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #1d02d1;
    }
`;