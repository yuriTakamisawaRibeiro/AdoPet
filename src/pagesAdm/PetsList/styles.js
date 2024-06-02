import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 170px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand content"
    "menu content"
    "menu content"
    "menu content";

  background-color: #F3F3EB;
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(232, 232, 224, 0.7);

  background-color: #E8E8E0;

  > img{
    margin-top: 40px;
    width: 90px;
  }
`;

export const Content = styled.div`
grid-area: content;

padding: 30px;




`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    margin-bottom: 20px;

    > p{
    font-size: 20px;
    margin-top: 50px;
}

> .line{
    border-bottom: 1px solid #3E3B47;
    
}

`

export const Pets = styled.div`

`

export const PetCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px;
    align-items: center;

    background-color: #E8E8E0;

    border-radius: 10px;

    

    > div{
        display: flex;
        align-items: center;
        gap: 20px;

        > button{
            background: none;
            border: none;

            font-size: 22px;
            color: #4B5563;

            cursor: pointer;

            &:hover{    
                color: #3E434A;
                font-size: 23px;
                transform: none;
                padding: 0;
            }
        }


    }

    
`

