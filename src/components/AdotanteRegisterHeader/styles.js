/* styles.js */
import styled from "styled-components";

export const Container = styled.ul`
    display: none; /* Ocultar por padrão */
    @media (min-width: 1024px) { /* Mostrar quando a largura da tela é 1024px ou maior */
        display: flex;
        list-style: none;
        justify-content: space-between;
        width: 100%;
        margin-top: 50px;
        padding: 0;
        font-size: 20px;
        text-align:center;
        background: 
        linear-gradient(#4B5563 0 0) no-repeat
        50% calc((var(--circle) - var(--b))/2)/100% var(--b);
        
        counter-reset: step;

        --active-border: 1px solid #4E5665;
        --circle: 4.5rem;
        --b: 1px;

        >li {
            display: grid;
            place-items: center;
            gap: 5px;
            font-weight: 800;
            >p {
              margin-top: 5px;
              font-weight: 400;
              padding-left: 50px;
              padding-right: 50px;
            }

            @media (max-width: 768px) {
            padding: 0;
          }
        }

        li::before{
            content: counter(step) " ";
            counter-increment: step;
            display: grid;
            place-content: center;
            height: var(--circle);
            aspect-ratio: 1;
            background:  #F3F3EB;
            color: #4E5665;
            border: 3px solid #4E5665;
            box-sizing: border-box;
            border-radius: 50%;
        }

        > li.active ~ li::before{
            background: #F3F3EB;
            color: #4E5665;
            border: var(--active-border);
        }

        li.active::after {
          content: "";
          position: absolute;
          height: var(--b);
          right: 100%;
          top: calc((var(--circle) - var(--b))/2);
          background: #4B5563;
        }

        
    }
`;
