import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: #E8E8E0;

    display: flex;
    align-items: center;
    padding: 0 124px;
    justify-content: space-between;
    

    svg {
      left: 0;
      color: gray;
      font-size: 24px;
    }

    > div{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
     
      
    }
  }
  
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
  max-width: 340px;
  margin: 30px auto 0;
  gap: 10px;
  margin-bottom: 100px;
`;
