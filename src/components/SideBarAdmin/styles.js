import styled from "styled-components";

export const Menu = styled.div`
  grid-area: menu;
  background-color: #E8E8E0;
  padding-top: 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  gap: 54px;
  list-style: none;
  transition: all ease-in 0.5s;

  > li {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50px;

    &.active {
      background-color: #E6AA41;

      a {
        color: #E8E8E0;

        &:hover{
            color: #E8E8E0;
        }
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: inherit;
      text-decoration: none;

       &:hover{
        color: #E6AA41;
       }
    }
  }
`;  