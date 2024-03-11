import styled from "styled-components";
import { FaUser } from "react-icons/fa";

export const Container = styled.header`
    width: 100vw;
`

export const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    padding: 20px 17vw;
    display: flex;
    align-items: center;

    position: relative;
`

export const DivisionLine = styled.div`
    margin: auto;
    width: 70%;
    height: 1px;
    background-color: black;
`

export const Navigation = styled.nav`

> ul{
    display: flex;
    list-style: none;
    gap: 60px;
    

    font-weight: 600;
    font-size: 20px;

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
font-size: 20px;
:hover{
    color: #E4AC46;
    transition: all ease-in-out 200ms;

    cursor: pointer;
}
`

export const UserIcon = styled(FaUser)`
margin-top:11px;
font-size: 35px;
`;