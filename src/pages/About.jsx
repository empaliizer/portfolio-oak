import React, { useState } from 'react';
import styled from 'styled-components';
import H1 from '../typography/h1';
import BgCircle from '../components/Common/BgCircle';
import Col1 from '../components/Common/Col1';
import P from '../typography/p';


const AboutSection = styled.section`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
`;

// const AboutSectionInner = styled.div`
// `;

const About = () => {

    return (
            <AboutSection>
                <Col1>
                    <H1>THIS IS ME!</H1>
                    <P>
                    When I finished high school I knew I wanted to do something creative for a living. 
                    I took a class to learn nails and lashes and started my own business. 
                    I worked with that for 7 years. I had my saloon at home, I was always home and never left our house except when I went to the store. 
                    My fiance led me to take classes to learn programming and that also led me to web design. 
                    I love to create things for other people and companies.
                    </P>
                    <P>
                    The classes I took at Karlskoga Folkhögskola at first were on a basic level and I felt like I couldn't start working with that knowledge. 
                    That’s why I took my degree at Chas Academy that wanted us students to be ready to work as soon as possible. I’ve been working at a smaller business as a junior frontend
                    designer. Now i want to try something new and to start working at bigger companies and work as a web designer/UX-designer together with a development team.
                    </P>
                </Col1>

            </AboutSection>
    );
}

export default About;