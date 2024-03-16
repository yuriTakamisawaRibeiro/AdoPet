import styled from "styled-components";

export const Container = styled.div`

`

export const Select = styled.div`


> select{
  display: flex;
  appearance: none;
  width: 300px;
  height: 4.8rem;
  padding: 1.3rem;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(
      to left,
      #4E5665 3em,
      transparent 3em
    );
  color:#4E5665;
  margin-top: 0.8rem;

  font-size: 1.6rem;
  border-radius: 0.5rem;
  border: 1px solid #4E5665;
  cursor: pointer;
  
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: none;
  }
 
  > option {
    color: inherit;
    font-size: 16px;
    background-color: #E8E8E0;
  }
}

  
`;

export const Textarea = styled.div`
display: flex;

flex-direction: column;

> textarea{
    background: none;
    border: solid 1px #4E5665
}
`

export const ContactForm = styled.div`

`

export const Form = styled.form`

`

export const ContactInfo = styled.div`

`