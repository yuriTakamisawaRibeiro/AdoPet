import styled from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { InputAlternative } from "../../components/InputAlternative"

export const Container = styled.div`
  width: 100%;
  overflow-x:hidden;
  `

export const Content = styled.div`
    width: 100%;
    padding: 0 18vw;
    margin: auto;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > img {
        margin: 100px;
    }

    > h1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }


`

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    > p {
        text-align: start;
    }
`

export const InfoIcon = styled(IoIosInformationCircleOutline)`
    font-size: 38px;
    margin-top: 7px;
    margin-right: 12px;
`

export const Form = styled.form`
    width: 100%;
    margin: 40px 0 40px 0;
    > div {
        text-align: start;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin-bottom: 60px;

    > div {
        width: 22vw;
    }

    > div:nth-of-type(2) {
        width: 13%;
    }
`

export const RowFile = styled.div`
    width: 100%;
    margin-bottom: 60px;
`

export const InputTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
`

export const InputPetRegister = styled(InputAlternative)`
`

export const FileInput = styled.input`
    margin-top: 20px;
    height: 3.5rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid #4E5665;
`