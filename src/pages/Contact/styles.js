import styled from "styled-components";

export const Container = styled.div`
margin-right:50px;
margin-left:50px;
`

export const Select = styled.div`

padding-bottom:50px;
> select{
  display: flex;
  appearance: none;
  width: 100%;
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
> label {
  padding-bottom:10px;
}
> textarea{
    background: none;
    border: solid 1px #4E5665;
    border-radius:5px;
    height:200px;
    resize:none;
    
}
`

export const ContactForm = styled.div`
> h1 {
  padding-top:100px;
}

> p {
  padding-top:30px;
  padding-bottom:100px;
}
`

export const Form = styled.form`

`

export const Form2 = styled.div`
display:flex;
gap: 20px;
padding-bottom:50px;

`

export const ContactInfo = styled.div`

`