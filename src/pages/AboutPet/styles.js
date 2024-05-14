import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
   width: 80%;
  display: flex;
  margin: auto;
  overflow: hidden;
  padding: 100px;
  gap: 200px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0;
  }

  @media(max-width: 1500px){
    gap: 100px
  }
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

    @media (max-width: 768px) {
        align-items: center;

        > img{
            margin-top: 30px;
            width: 97%;
            border-radius: 15px;
        }

        > div{
            display: flex;
            align-items: start;
            justify-content: space-between;
            width: 97%;

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
  }
`

export const Line2 = styled.div`
    margin-top: 60px;
    
    > h2{
        text-align: center;
    }

    @media (max-width: 768px) {
        margin-top: 30px;

        > h2{
        text-align: start;
    }
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

    
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 10px;
    > div {
        display: flex;
        font-size: 14px;
        justify-content: space-between;
    }

    > p {
        margin-top: 15px;
        text-align: justify;
    }
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

    @media (max-width: 768px) {
        padding: 15px;
        margin-top: 30px;
        gap: 0;
    > div {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
  }

  @media (max-width: 1500px) {
    padding: 10px 40px;
    width: 450px;

    > button{
        width: 200px
    }
}
`

export const AdoptionTerms = styled.div`
display: flex;
margin-top: 108px;
gap: 40px;
text-align: justify;

> div{
    width: 400px;
}

@media (max-width: 768px) {
    gap: 0;
    margin-top: 30px;
    text-align: justify;
    flex-direction: column;

    > div{
        width: 97%;
    }

    > div > h2 {
        margin-top: 30px;
        text-align: left;
    }

    > div > p {
        margin-top: 15px;
        text-align: justify;
        font-size: 14px;
    }
  }

  @media (max-width: 1500px) {
    gap: 20px;
    flex-direction: column;

    > div > h2 {
        margin-top: 30px;
        text-align: left;
        text-align: center;
    }

    > div > p {
        margin-top: 15px;
        text-align: center;
        font-size: 14px;
    }

}
`