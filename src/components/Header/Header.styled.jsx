import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    margin: 0 auto;
    padding: 0px;
    
`;

export const HeaderBlock = styled.header`
    margin: 0;
    padding: 0;
    height: 100px;
    background-color: black;
`;

export const Menu = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;     
`;

export const Logo = styled.span`
    display: block;
    height: 70px;
    width: 50px
    margin: 0;
    padding: 0;
    margin-top: 20px;
    font-size: 50px;
    font-family: "Barriecito", cursive;
    color: white;
    transition: 250ms;
    cursor: pointer;

    &:hover {
    color: rgb(192, 192, 192);
    font-size: 55px;
}
`;

export const NavUl = styled.ul`
    display: flex;
    padding: 0;
    font-family: "Bitter", serif;
`;

export const NavLi = styled.li`
    display: flex;
    margin-top: 5px;
    width: 50px;
    height: 25px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: white;
    cursor: pointer;
    transition: 250ms;

    &:hover {
    color: rgb(192, 192, 192);
    font-size: 17px;
    }

    &:not(:last-child) {
    margin-right: 40px;
}
`;

export const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &.active {
    color: grey;
    }

        &:hover {
    color: rgb(162, 162, 162);
    }

    svg {
       position: absolute;
    margin: 0 auto;
    font-size: 20px;
    margin-bottom: 40px; 
    }
`;