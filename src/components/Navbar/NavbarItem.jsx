import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: #000;
    font-size: 1.6rem;
    text-decoration: none;
    transition: all 0.3s;
        &:hover {
            color: #FA8A9B;
        }

        @media screen and (max-width:767px) {
        display: none;
        color: #fff;
        display: flex;
        flex-direction: column;
}
`;

const StyledLinkDropdown = styled.div`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding-left: 0;
    left: 0;
    display: none;
    background: white;
`;

const NavbarItem = ({ id, to, text, submenu = []}) => {
    if(submenu.length > 0) {
        return (
            <StyledLinkDropdown key={id} to={to}>
                <div>{text}</div>
                <submenu>
                    { submenu.map((item, index) => (
                        <submenuItem key={index} to={item.to}>{item.text}</submenuItem>
                    )) }
                </submenu>
            </StyledLinkDropdown>
        )
    }
    return (
        <StyledLink key={id} to={to}>{text}</StyledLink>
    )
}

export default NavbarItem;