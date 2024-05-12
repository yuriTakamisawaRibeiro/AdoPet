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
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  padding: 100px;
`

export const FilterDiv = styled.div`
display: flex;
justify-content: space-between;

width: 100%;

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
    display: flex;
    flex-direction: column;

    gap: 80px;
`

export const Topics = styled.div`
    display: flex;
    border: 1px solid #4B5563;
    padding: 50px;
    text-align: center;
    


    ul li{
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
        text-align: center;
        list-style: none;
    }
`

export const FilterDate = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid #4B5563;
    padding: 10px;
    justify-content: center;
    align-items: center;

    > label {
        font-weight: 600;
        font-size: 20px;
    }

    > select{
        background: none;
        border: none;
        border-bottom: 1px solid #4B5563;
        padding: 10px;
    }
`

export const ListDiv = styled.div`
 display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    gap: 20px; 
    margin-top: 20px; 

`

export const New = styled.div`
height: 500px;
    width: 350px;

    > img{
        width: 300px;
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
`

export const Commands = styled.div`
    display: flex;
    gap: 10px;

    justify-content: end;
    > button{
     padding: 5px;

     border: none;
     background-color: #E8E8E0;

     border-radius: 10px;
    }
`