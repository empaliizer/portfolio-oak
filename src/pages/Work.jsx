import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import ContainerInner from '../components/Container/ContainerInner';
import Col1 from '../components/Common/Col1';
import Col2 from '../components/Common/Col2';
import PortfolioImg from '../components/Common/PortfolioImg';
import H1 from '../typography/h1';
import DevPic from '../assets/development.jpg';
import UxPic from '../assets/uxui.jpg';

const Overlay = styled.div`
background-color: #000;
opacity: 40%;
`;

const Work = () => {

    return (
        <Container>
            <ContainerInner>
                <Col1>
                    <H1>UX/UI Design</H1>
                    <Overlay>
                        <PortfolioImg src={UxPic} />
                    </Overlay>
                </Col1>
                <Col2>
                    <H1>Development</H1>
                    <Overlay>
                        <PortfolioImg src={DevPic} />
                    </Overlay>
                </Col2>
            </ContainerInner>
        </Container>          
    );
}

export default Work;