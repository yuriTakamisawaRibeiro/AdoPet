import styled from "styled-components";

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
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 90%;
    max-width: 1000px;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    > select{
        padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #FFFFFF;
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
    justify-content: space-between;
    align-items: center;    

    .page-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #E6AA41;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 16px;
    margin-right: 5px;
}

.pagination span {
    font-size: 14px;
    color: #666;
}
`