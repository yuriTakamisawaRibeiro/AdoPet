import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #E8E8E0;
    color: #4B5563;

    border-radius: 10px;
    

    > input{
        height: 56px;
        width: 100%;
        
        

        padding: 30px;

        color: #4B5563;
        background: transparent;
        border: 0;

        &:placeholder{
            color: #52555A;
        }
    }
    > svg{
            margin-left: 16px;
        }
`;