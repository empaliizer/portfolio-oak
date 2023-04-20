import React from "react";
import styled from "styled-components";

const Container = styled.div`
max-width: 5rem;
display: flex;
margin-left: 35px;
`;

const StyleImg = styled.img`
width: 100%;
`;

const LogoContainer = ({ logo }) => {
    return (
        <Container>
            <StyleImg src={logo} alt="React" />
        </Container>
    );
}

export default LogoContainer;