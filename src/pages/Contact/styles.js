import styled from "styled-components";

export const Container = styled.div`
width: 100%;

height: 100vh;
` 

export const Content = styled.div`
 width: 78%;
  display: flex;
  margin: auto;
  overflow: hidden;
  flex-direction: row;
  gap: 150px;

  @media (max-width: 768px) {
  align-items: center;
  justify-content: center;
  
  }

`

export const Select = styled.div`

padding-bottom:50px;
> select{
  display: flex;
  height: 56px;
  padding: 30px;
  appearance: none;
  width: 100%;
  padding: 10px;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(
      to left,
      #4E5665 3em,
      transparent 3em
    );
  color:#4E5665;
  margin-top: 0.8rem;
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
margin-bottom: 30px;

flex-direction: column;
> label {
  padding-bottom:10px;
}
> textarea{
  padding: 10px;
    background: none;
    border: solid 1px #4E5665;
    border-radius:5px;
    height:200px;
    resize:none;
    
}
`

export const Line = styled.div`
  width: 80%;
  border: solid 0.5px #4E5665;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ContactForm = styled.div`
width: 50%;
> h1 {
  padding-top:100px;
}

> p {
  padding-top:30px;
  padding-bottom:50px;
}

@media (max-width: 768px) {
  width: 100%;
  text-align: center;
  
  }
`

export const Form = styled.form`

`

export const Form2 = styled.div`
display:flex;
gap: 20px;
padding-bottom:20px;



`

export const ContactInfo = styled.div`
 width: 50%;
 padding-top:100px;
  
 @media (max-width: 768px) {
  display: none;
 
  }

> div{
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  > p {
    display: flex;
    align-items: center;
    gap: 10px;
    
    >  svg{
      font-size: 30px;
      color: #E4AC46;
    }
  }

  > ul{
    display: flex;
    gap: 20px;
    >  svg{
      font-size: 30px;
      color: #E4AC46;
    }
  }

  > ul:hover{
    cursor: pointer;
    color: #B28127
  }
}


`