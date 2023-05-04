import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import H1 from '../typography/h1';
import H2 from '../typography/h2'
import Container from '../components/Container/Container';
import ContainerInnerCol from '../components/Container/ContainerInnerCol';
import HeadingAnimation from '../components/Animations/HeadingAnimation';


const Contact = () => {
    const AnimationTexts = [
        "UX-Design",
        "UI-Design",
        "Frontend"
    ]

    const [animationIndex, setAnimationIndex] = useState(0);

useEffect(() => {
    setTimeout(() => {
        if(animationIndex + 1 === AnimationTexts.length) {
            setAnimationIndex(0);
        } else {
            setAnimationIndex(animationIndex + 1);
        }
    }, 4000);
}, [animationIndex])

    return (
        <Container>
            <ContainerInnerCol>
                <H1>My services are <HeadingAnimation text={AnimationTexts[animationIndex]} /></H1>
                <H2>You can always get in touch with me trough</H2>
                <H1>emelie.ek@chasacademy.se</H1>
            </ContainerInnerCol>
        </Container>
            
    );
}

export default Contact;