import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    margin-bottom: 80px;
`

export const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
  }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: start;

`

export const Suport = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

> ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    font-size: 16px;

}

ul li{
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
        font-size: 16px;
  }
}

ul li:hover{
    color: #E4AC46;
    transition: 0.3s;
}

ul li::after{
    content: "";
    position: absolute;
    display: block;
    height: 0.2rem;
    width: 0%;
    background: #E4AC46;
    bottom: -0.5rem;
    transition: all ease-in-out 250ms;
}

ul li:hover::after{
   width: 60%;
}
`


export const Navigation = styled.nav`
> ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    font-size: 16px;
    text-align: start;
}

ul li{
    cursor: pointer;
    position: relative;
}

ul li:hover{
    color: #E4AC46;
    transition: 0.3s;
}

ul li::after{
    content: "";
    position: absolute;
    display: block;
    height: 0.2rem;
    width: 0%;
    background: #E4AC46;
    bottom: -0.5rem;
    transition: all ease-in-out 250ms;
}

ul li:hover::after{
   width: 60%;
}
`
