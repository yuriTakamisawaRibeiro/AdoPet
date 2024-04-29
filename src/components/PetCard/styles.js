import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: space-evenly;

    background-color: #E8E8E0;

    padding: 42px 20px 20px;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: relative;


    
    img {
        width: 175px;
    }

    h2 {
        font-weight: 700;
        line-height: 3.6rem;
        text-align: center;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 2.24rem;
        color: #4B5563;
        text-align: center;
    }

  
`;

export const ButtonFavorite = styled.div`
 background: transparent;
        position: absolute;
        right: 48px;
        top: 16px;

        > svg {
        color: #E4AC46;
        background: transparent;
        position: absolute;
        width: 30px;
        height: 3.2rem;
        }


`