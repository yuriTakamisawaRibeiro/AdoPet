import styled from "styled-components";
import Modal from 'react-modal';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 170px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand content"
    "menu content"
    "menu content"
    "menu content";

  background-color: #F3F3EB;


`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(232, 232, 224, 0.7);

  background-color: #E8E8E0;

  > img{
    margin-top: 40px;
    width: 90px;
  }
`;


export const Content = styled.div`
grid-area: content;
display: flex;
flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 30px;
    gap: 10px;
    width: 100%;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    > select{
        padding: 20px;
    border-radius: 5px;
    border: none;
    background-color: #E8E8E0;
    font-size: 16px;
    cursor: pointer;
    }
`

export const TableForms = styled.table`
width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: left;
}

tbody tr:nth-child(even) {
    background-color: #F9F9F9;
}   
`

export const Pagination = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;    

    .page-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #E8E8E0;
    color: #4B5563;
    cursor: pointer;
    font-size: 16px;
    margin-right: 5px;
}

.pagination span {
    font-size: 14px;
    color: #666;
}
`

export const CustomModal = styled(Modal)`
  &.ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.75) !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.ReactModal__Content {
    background-color: #f0f0f0 !important;
    padding: 20px !important;
    border-radius: 10px !important;
    width: 80% !important;
    max-width: 600px !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
    position: relative !important;
    transform: translate(-50%, -50%) !important;
    top: 50% !important;
    left: 50% !important;
    gap: 10px;
  }

  > h2 {
    color: #e4ac46;
    text-align: center;
    margin-bottom: 20px;
  }

  > div{
    margin-bottom: 30px;
  }


  
`;

export const Buttons = styled.div`
  display: flex;
    justify-content: space-between;

    > button {
    padding: 10px;
    border: none;
    border-radius: 10px;

    color: #f3f3eb;

    &:hover{
      
    }


  }

  > #approve{
    background-color: #6bbf59;
  }

  > #reject{
    background-color: #d9534f;
  }

  > #close{
    background-color: #4B5563
  }
`