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

  @media (max-width: 425px) {
    gap: 50px;
  }
`

export const InfosPost = styled.div`

`

export const Line1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

   
    > img{
        max-width: 500px;
        border-radius: 10px;
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
    padding: 10px;
    width: 500px;

    >div{
        display: flex;
        justify-content: space-between;
        
    }
    > h4{
        cursor: pointer;
        margin-top:10px;
    }
    
    > p {
        margin-top: 15px;
        font-size: 12px;
        text-align:justify;
        
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
export const Info1 = styled.div`

`
export const Info2 = styled.div`
display: flex;
flex-direction: column;
margin-top:10px;
`
export const InfosPost2 = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;
  > p{
    color: #4e5665;
  }
`



