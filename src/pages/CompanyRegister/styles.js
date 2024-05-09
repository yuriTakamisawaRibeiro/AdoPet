import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      @media (max-width: 1325px) {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
`

export const SideInfo = styled.div`
    background-color: #E8E8E0;
    gap: 20px;
    width: 18vw;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    > p {
        font-size: 16px;
        text-align: justify;
        margin-left: 20px;
        margin-right: 20px;

        @media (max-width: 768px) {
        font-size: 14px;
    }
    }

    // 1325

    @media (max-width: 1325px) {
        width: 100%;
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
      }

    @media (max-width: 1325px) {
        width: 100%;
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
      }

      @media (min-width: 531px) {
        > p {
        width: 80%;;
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
      }}
      
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    width: 80%;
    color: #E4AC46;

    @media (max-width: 768px) {
        font-size: 18px;
        font-weight: bold;
        width: 80%;
        color: #E4AC46;
    }

    @media (max-width: 1325px) {
        font-size: 18px;
        font-weight: bold;
        width: 80%;
        color: #E4AC46;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
        font-weight: bold;
        width: 80%;
        color: #E4AC46;
    }
`

export const Info = styled.div`
    padding-top: 8vh;
    padding-bottom: 8vh;
    width: 70%;
    text-align: center;

        @media (max-width: 768px) {
            padding-top: 30px;
            padding-bottom: 10px;
    }
`

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;

    .button {
        width: 15vw;
        margin-top: -34px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0px;    
      }
`

export const RegisterContent = styled.div`
    padding-left: 18vw;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding-left: 0;
      }

      @media (max-width: 1325px) {
        padding-left: 0;
      }
`

export const InputTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: start;
`

export const Input = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;

    @media (max-width: 768px) {
            font-size: 14px;
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    
    > div {
        width: 100%;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 30px;
      }
`

export const Row2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LogoTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    padding-top: 30px;

    @media (min-width: 437px) {
        gap: 20px;
      }
`

export const TextArea = styled.textarea`
    margin-top: 10px;
    height: 12rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
    margin-bottom: 0px;

    @media (max-width: 768px) {
        font-size: 14px;
      }
`

export const ButtonDiv = styled.div`
    height: fit-content;
    padding-bottom: 30px;
`