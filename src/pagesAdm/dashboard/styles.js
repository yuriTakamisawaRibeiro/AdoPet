import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand content"
    "menu content"
    "menu content"
    "menu content";

  background-color: #F3F3EB;
`;

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

export const Menu = styled.ul`
  grid-area: menu;
  background-color: #E8E8E0;

  padding-top: 64px;
  text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px ;
    gap: 64px;
    list-style: none;

    transition: all ease-in 0.5s;


    
  > li:hover{
    font-size: 42px;
  }

  
  
`;


export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  > h1 span{
    color: #E4AC46;
  }

  
`;
