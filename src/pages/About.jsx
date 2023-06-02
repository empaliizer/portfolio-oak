import React, { useState } from 'react';
import styled from 'styled-components';
import H1 from '../typography/h1';
import Container from '../components/Container/Container';
import ContainerInner from '../components/Container/ContainerInner';
import TextContent from '../components/Hero/TextContent';
import Col1 from '../components/Common/Col1';
import P from '../typography/p';
import ProfileRev from '../assets/Profile-reverse.png'
import Col2 from '../components/Common/Col2';
import BgImg from '../components/Common/BgImg'
import SmallCircle from '../components/Common/SmallCircle';

const StyledQoute = styled.div`
margin: auto; 
width: 48%;
`;

const About = () => {

    return (
            <Container>
                <ContainerInner>
                    <Col1>
                        <TextContent>
                            <SmallCircle />
                            <H1>THIS IS ME</H1>
                            <P>
                            When I finished high school I knew I wanted to do something creative for a living. I took a class to learn nails and 
                            lashes and started my own business. I worked with that for 7 years. I had my saloon at home, 
                            I was always home and never left our house except when I went to the store. 
                            My fiance led me to take classes to learn programming and that also led me to web design. I love to create things for other people and companies.
                            </P>
                            <P>
                            The classes I took at Karlskoga Folkhögskola at first were on a basic level and I 
                            felt like I couldn't start working with that knowledge. That’s why I took my degree at 
                            Chas Academy that wanted us students to be ready to work as soon as possible. I’ve been working at a smaller business as a junior frontend
                            designer. Now i want to try something new and to start working at bigger companies and work as a web designer/UX-designer together with a development team.
                            </P>
                        </TextContent>
                    </Col1>
                    <Col2>
                        <BgImg src={ProfileRev}/>
                        <StyledQoute>
                            <P>“Being creative is not a hobby, it is a way of life”</P>
                        </StyledQoute>
                    </Col2>
                </ContainerInner>
            </Container>
    );
}

export default About;