import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.png';
import { Navbar } from '../Navbar/Navbar';
import LogoContainer from "./LogoContainer";

const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const Header = () => {
    return (
        <Container>
            <LogoContainer logo={logo}/>
            <Navbar />
        </Container>
    );
}

export default Header;