import styled from "styled-components";

export const Container = styled.div`
height: 500px;
    width: 350px;

    > img{
        width: 100%;
        border-radius: 10px;
    }

    > h1{
            font-size: 14px;
        }

    > p{
        font-size: 12px;
        text-align: justify;
    }

    > div{
        display: flex;
        align-items: center;
        gap: 5px;

        > svg{
            color: #E4AC46;
        }

       

        > h5{
            font-size: 12px;
            font-weight: 600;
            color: #E4AC46;
        }

        > p {
            font-size: 10px;
        }
    }

    @media (max-width: 768px) {
        height: fit-content;
        margin-top: 15px;
  }

  
`