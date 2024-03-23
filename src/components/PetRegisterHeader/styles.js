import styled from "styled-components";

export const Container = styled.ol`
    display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 20px;
  padding: 0;
  font-size: 22px;


  >li {
    display: grid;
  place-items: center;
  gap: 5px;
  
  }

  li::before{
    content: "";
  display: grid;
  place-content: center;
  height: 10px;
  aspect-ratio: 1;
  background: none;
  color: #4E5665;
  border: 5px solid #4E5665;
  box-sizing: border-box;
  border-radius: 50%;

  }

  

  > li.active ~ li::before{
  background: purple;
  color: yellow;
}
`

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

