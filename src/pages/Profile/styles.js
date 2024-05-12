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

    svg {
      color: gray;
      font-size: 24px;
    }

    > div{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 500px;
      
    }
  }
  
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
  gap: 10px;

  >div:nth-child(4){
    margin-top: 24px;
  }
`;
