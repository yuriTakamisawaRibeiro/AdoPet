import styled from 'styled-components'

export const Container = styled.div`
    min-width: 300px;
    max-width:300px;
    height: 450px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: space-evenly;

    background-color: #E8E8E0;

    padding: 42px 20px 20px;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: relative;

    @media (max-width: 768px) {
        
        width: 200px;
        height: 350px;
  }


    
    


    

  
`;

export const ButtonFavorite = styled.div`
 background: transparent;
        position: absolute;
        right: 48px;
        top: 16px;

        > svg {
        color: #E4AC46;
        background: transparent;
        position: absolute;
        width: 30px;
        height: 3.2rem;
        }

        @media (max-width: 768px) {
             right: 38px;
             top: 6px;
}


`


export const ImageArea = styled.div`
    width: 200px;
    height: 200px; 
    display: flex;
    justify-content: center;
    align-items: flex-end; 

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; 
    }

    @media (max-width: 768px) {
        width: 140px;
        height: 140px; 
    }
`




export const NameArea = styled.div`
h2 {
        font-weight: 700;
        line-height: 3.6rem;
        text-align: center;
        
        overflow-wrap: break-word; // quebra a linha se o texto for muito grande
        word-wrap: break-word; // quebra a linha se o texto for muito grande
      }
      
      p {
        font-weight: 400;
        text-align: center;
        font-size: 14px;
        line-height: 2.24rem;
        color: #4B5563;
        width: 100%; // define a largura
        overflow-wrap: break-word; // quebra a linha se o texto for muito grande
        word-wrap: break-word; // quebra a linha se o texto for muito grande
    }
`