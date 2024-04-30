import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    margin-bottom: 80px;
`

export const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding: 20px 12vw;
    flex-direction: row;
    align-items: center;
    
    @media (max-width: 768px) {
        display: none;
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

export const ContentMobile = styled.footer`
display: none;
justify-content: center;

       

> p {
    font-size: 14px;
    align-items: center;
width: 78%;

> span{ 
    color: #E4AC46;
}
}



@media (max-width: 768px) {
    padding-top: 50px;
        display: flex;
        justify-content: center;

        align-items: center;
  }
`
