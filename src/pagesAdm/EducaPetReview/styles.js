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

padding: 30px;




`

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
  
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

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

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