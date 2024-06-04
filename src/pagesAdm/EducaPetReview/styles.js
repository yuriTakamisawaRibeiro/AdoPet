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

padding: 30px;




`

export const Search = styled.div`
  padding: 64px 64px 0;
  display: flex;
  align-items: center;

  > div {
    width: 80%;
  }

  > a {
    margin-left: 30px;
  }
`;

export const Section = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #4B5563;

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: #4B5563;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const New = styled.div`
    width: 100%;
    background-color: #E8E8E0;
    display: flex;
    justify-content: space-between;
    gap: 60px;

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > .left-box {
      width: 80%;
    }

    > .delete {
      width: 10%;
    background-color: #4B5563;
    color: #F3F3EB;

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
    }

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: #4B5563;
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 24px;

        > span{
            font-size: 12px;
            padding: 5px 14px;
            border-radius: 5px;
            margin-right: 6px;
            color: #f3f3eb;
            background-color: #e4ac46;
        }
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
    padding: 40px !important;
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

    > ul li{
      list-style: none;
    }
    > ul li a{
      text-align: center;
    font-size: 14px;
  }
  }

  
`;

