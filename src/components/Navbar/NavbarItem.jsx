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

const NavbarItem = ({ id, to, text }) => {
    return (
        <StyledLink key={id} to={to}>{text}</StyledLink>
    )
}

export default NavbarItem;