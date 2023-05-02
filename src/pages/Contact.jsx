import React, { useState } from 'react';
import styled from 'styled-components';
import H1 from '../typography/h1';
import H2 from '../typography/h2'
import Container from '../components/Container/Container';
import ContainerInner from '../components/Container/ContainerInner';
import HeadingAnimation from '../components/Animations/HeadingAnimation';


const Contact = () => {

    return (
        <Container>
            <ContainerInner>
                <H1>My services are <HeadingAnimation /></H1>
                <H2>You can always get in touch with me trough</H2>
                <H1>emelie.ek@chasacademy.se</H1>
            </ContainerInner>
        </Container>
            
    );
}

export default Contact;