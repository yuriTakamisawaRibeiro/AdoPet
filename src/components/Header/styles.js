import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export const Container = styled.header`
    width: 100vw;
`

export const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    padding: 20px 12vw;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 1157px) {
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const DivisionLine = styled.div`
    margin: auto;
    width: 78%;
    height: 1px;
    background-color: #4B5563;
`

export const Contrast = styled.a`
    border: none;
    transform: none;
    transition: none;
`

export const Navigation = styled.nav`

> ul{
    display: flex;
    list-style: none;
    gap: 60px;
    
    font-weight: 600;
    font-size: 22px;

    @media (max-width: 1157px) {
    gap: 30px;
  }

  
  @media (max-width: 1004px) {
    font-size: 18px;
  }
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
font-size: 35px;

:hover{
    color: #E4AC46;
    transition: all ease-in-out 200ms;

    cursor: pointer;
    
}

@media (max-width: 1004px) {
    font-size: 28px;
  }
`

export const UserIcon = styled(FaUser)`
margin-top:11px;
margin-right: 20px;
font-size: 35px;

@media (max-width: 1004px) {
    font-size: 28px;
  }
`;

export const HeaderMobile = styled.div`
    padding: 20px 12vw;
    display: none;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    @media (max-width: 768px) { 
        display: flex;
}


`

export const MenuIcon = styled(RxHamburgerMenu)`
    margin-top: 20px;
`

export const MenuHeader = styled.div`
     padding: 20px 12vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
`

export const MenuMobile = styled.div`
    background-color: #F3F3EB;
    border-bottom: solid 1px #4E5665;
    height: 60%;
    width: 100%;

    align-items: center;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 15;
    
    > ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        gap: 20px;
        font-size: 22px;
    }
`

export const Accessibility = styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-end;
    padding: 10px 12vw;
    gap:10px;
    align-items:center;
    
    > p {
        cursor: pointer;
        font-size:18px;
    }
    > img {
        padding-left:10px;
        height:20px;
        cursor:pointer;
    }

    @media (max-width: 768px) {
        display: none;
  }
`