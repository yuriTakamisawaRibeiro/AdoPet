import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0 18vw;

  @media (max-width: 768px) {
    padding: 0 8vw;
    display: flex;
    flex-direction: column;
  }
  `

export const InfoSection = styled.div`
    margin-top: 40px;
    width: 100%;
    text-align: center;

    > p {
        margin-top: 30px;
    }
  `

export const Form = styled.form`
    width: 100%;
    margin-top: 60px;

    @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  `

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 35px;

    > div {
        display: flex;
        flex-direction: column;
        width: 48%;
    }

    > .post-description, .post-content, .post-image {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    > .post-category {
        margin-top: 35px;
    }
  }
`

export const InputTitle = styled.h1`
font-size: 20px;
font-weight: 500;
`

export const InputPostTitle = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`

export const InputPostDescription = styled.textarea`
    margin-top: 10px;
    height: 6.2rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`

export const InputPostContent = styled.textarea`
    margin-top: 10px;
    height: 6.2rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`
export const InputPostAuthor = styled.input`
    margin-top: 10px;
    height: 3.1rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: #4E5665;
    background: transparent;
    border-radius: 0.5rem;
    border: 1.5px solid #4E5665;
`


export const PostButton = styled.button `
    width: 100%;
    background-color: #4B5563;
    margin-top: 40px;
    color: #F3F3EB;
    height: 3.1rem;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 400;

    &:disabled{
        opacity: 0.5;
    }
`