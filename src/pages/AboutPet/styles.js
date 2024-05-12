import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
   width: 78%;
  display: flex;
  margin: auto;
  overflow: hidden;
  padding: 100px;
  gap: 200px;
`

export const InfosPet = styled.div`

`

export const Line1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

   
    > img{
        width: 300px;
    }

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;

        > svg{
        color: #E4AC46;
        font-size: 20px;
    }

    > p {
        color: #E4AC46;
        background-color: #F1E0C1;
        padding: 5px;
    }
    }
`

export const Line2 = styled.div`
    margin-top: 60px;
    
    > h2{
        text-align: center;
    }
`

export const GridInfos = styled.div`
    margin-top: 20px;
    border: 1px solid #4B5563;
    padding: 10px;
    width: 350px;

    >div{
        display: flex;
        justify-content: space-between;

        > h4{
            cursor: pointer;
        }
    }

    > p {
        margin-top: 15px;
    }
`

export const InfosAdopet = styled.div`

`

export const SendForm = styled.div`
    border: 1px solid #4B5563;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;

    border-radius: 10px;
   

    box-shadow: 1px #4B5563;
`

export const AdoptionTerms = styled.div`
display: flex;
margin-top: 108px;
gap: 40px;
text-align: justify;

> div{
    width: 400px;
}
`