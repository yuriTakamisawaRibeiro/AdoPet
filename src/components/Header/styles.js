import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    margin: 10px 90px;

`

export const Content = styled.div`
gap: 200px;
padding: 20px;
display: flex;
align-items: center;
`

export const Navigation = styled.nav`

> ul{
    display: flex;
    list-style: none;
    gap: 60px;
    

    font-weight: 600;
    font-size: 16px;

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

export const Icon = styled.div`
margin-left: 150px;
font-size: 20px;

:hover{
    color: #E4AC46;
    transition: all ease-in-out 200ms;

    cursor: pointer;
}
`