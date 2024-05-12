import styled from "styled-components";

export const Container = styled.div`

`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    height: 250px;
    background-color: #ECD2A2;
    justify-content: center;
    align-items: center;

   > div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 60%;

    > h1{
        font-weight: 400;
        font-size: 30px;
    }

    > h3 {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 40px;
    }

    }

   
`

export const Content = styled.div`
   width: 78%;
  display: flex;
  margin: auto;
  overflow: hidden;
  padding: 100px;
`

export const FilterDiv = styled.div`


`

export const MotherNew = styled.div`
    height: 800px;
    width: 600px;

    > img{
        width: 700px;
    }

    > div{
        display: flex;
        align-items: center;
        gap: 5px;

        > svg{
            color: #E4AC46;
        }

        > h5{
            font-size: 14px;
            font-weight: 600;
            color: #E4AC46;
        }

        > p {
            font-size: 12px;
        }
    }
`

export const Filters = styled.div`

`