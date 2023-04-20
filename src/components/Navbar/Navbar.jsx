import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { links } from "../../data/data";
import NavbarItem from "./NavbarItem";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    gap: 82px;

    @media screen and (max-width:767px) {
        position: fixed;
        background-color: #222;
        flex-direction: column;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        gap: 30px;
        font-size: 2rem;
        place-items: center;
        text-align: center;
        z-index: 998;
        display: ${ ({open}) => open ? 'flex' : 'none' };
    
}
`;

const MenuButton = styled.button`
    background-color: unset;
    border: 0;
    position: fixed;
    right: 40px;
    top: 40px;
    cursor: pointer;
    z-index: 999;
    display: none;

    @media screen and (max-width:767px) {
        display: flex;
}
`; 

const StyledCloseIcon = styled(CloseIcon)`
        color: #fff;
`;

const MenuToggle = ({ open }) => {
    return open ? 
    <>
        <StyledCloseIcon />
    </> : <>
        <MenuIcon />
    </>
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledNav open={open}>
                { links.map((link, i ) => (
                    <NavbarItem key={i} {...link}/>
                )) }
            </StyledNav>
            <MenuButton open={open} onClick={() => setOpen(!open)}>
                <MenuToggle open={open}/>
            </MenuButton>
        </>
    );
}

export {
    Navbar
};