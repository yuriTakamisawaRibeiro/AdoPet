import styled from "styled-components";
import { FaUser } from "react-icons/fa";

export const Container = styled.header`
    width: 100vw;
`

export const Content = styled.div`
    width: 100%;
    gap: 250px;
    padding: 20px;
    display: flex;
    align-items: center;
    margin-left:300px;

    position: relative;
    ::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #4B5563;
    }
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
font-size: 20px;

:hover{
    color: #E4AC46;
    transition: all ease-in-out 200ms;

    cursor: pointer;
}
`

export const UserIcon = styled(FaUser)`
margin-top:11px;
font-size: 25px;
`;