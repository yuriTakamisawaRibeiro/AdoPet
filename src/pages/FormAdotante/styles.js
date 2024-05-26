import styled from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Content = styled.div`
@media (min-width: 1024px) {
  
  }

  @media(max-width:  425px) {
    padding:0;
    margin:0;

  }
`
export const Container = styled.div`
  width: 100%;
  

  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 768px)
  
`

export const Info = styled.div`
width: 100%;
margin: auto;
overflow: hidden;
text-align:center;
align-items: center;
justify-content:center;
display:flex;
flex-direction:column;
padding: 0 12vw;
@media (max-width: 768px) {
    width: 80%;
  }

  > h1 {
        margin-top: 100px;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }

  @media(max-width:425px) {
    width: 100%;
  }
`

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    text-align:center;
    margin-bottom: 30px;

    > p {
        text-align: start;
    }

    @media(max-width: 425px){
      display: flex;
      flex-direction: column;
    }
`


export const InfoIcon = styled(IoIosInformationCircleOutline)`
    font-size: 38px;
    margin-top: 7px;
    margin-right: 12px;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0 40px 0;
    text-align: start;
    justify-content: center;

    > div {
        text-align: start;
    }
`

export const Row = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3vw;
    margin-bottom: 60px;

    > div {
        width: 22vw;

        @media (max-width: 768px) {
    width: 100%;
  }
  }
  @media (max-width:  425px) {
    margin-bottom: 20px;
  }


> div:nth-of-type(2) {
        width: 20%;
        @media (max-width: 768px) {
    width: 100%;
  }
    }

    @media (max-width:  425px) {
    flex-direction: column;
  }
`

export const Row2 = styled.div`
display: flex;
flex-direction:row;
gap: 20px;
margin-bottom: 30px;
@media (max-width: 425px) {
  display: flex;
flex-direction:column;
}

`

export const InputTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
`

export const InputFormAdotante = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;

    

`

export const TermsStep = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    > img {
      margin-top: 100px;
      margin-bottom: 60px;
    }
    
    > h1 {
      margin-top: 100px;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
`

export const TermsArea = styled.div`
    width: 100%;
    margin-top: 15px;
    height: 70vh;
    background-color: #FFFFF3;
    text-align: start;
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
    overflow: auto;
    padding-bottom: 40px;
`