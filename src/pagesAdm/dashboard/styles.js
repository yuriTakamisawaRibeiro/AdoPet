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


export const Charts = styled.div`
  display: flex;

  margin-top: 30px;
  width: 700px;
 gap: 100px;

 
 @media (max-width: 1500px) {
    width: 400px;
}
`


export const Content = styled.div`
  grid-area: content;
  padding: 50px 64px;
  overflow-y: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  > h1 span{
    color: #E4AC46;
  }

  .p-datatable-custom {
  /* Adicione seus estilos personalizados aqui */
}

/* Estilo personalizado para as células da tabela */
.p-datatable-custom .p-datatable-tbody td {
  /* Adicione seus estilos personalizados aqui */
}

/* Estilo personalizado para o cabeçalho da tabela */
.p-datatable-custom .p-datatable-thead th {
  /* Adicione seus estilos personalizados aqui */
}

/* Estilo personalizado para o rodapé da tabela */
.p-datatable-custom .p-datatable-tfoot td {
  /* Adicione seus estilos personalizados aqui */
}
  
`;

export const TablePartners = styled.div`
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(75, 85, 99, 0.7);
    padding: 20px;
    width: 80%;
    max-width: 800px;
    margin: 50px;
    

> h4 {
    text-align: center;
    margin-bottom: 20px;
}

> table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

> thead {
    background-color: #F0F0F0;
    border-bottom: 1px solid rgba(75, 85, 99, 0.7); 
}

> th, td {
    padding: 12px 15px;
}

> th {
    font-weight: bold;
}

>  tbody tr:nth-child(even) {
    background-color: #F9F9F9;
}
`

