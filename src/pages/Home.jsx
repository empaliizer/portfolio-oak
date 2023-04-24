import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import TextContent from '../components/Hero/TextContent';
import BigCircle from '../components/Common/BigCircle';
import H1 from '../typography/h1';
import H3 from '../typography/h3';
import P from '../typography/p';
import BgPic from '../assets/profile.png'

const Home = () => {
    return (
        <Hero bgImg={BgPic}>
            <TextContent>
                <BigCircle />
                <H1>HI, I AM EMELIE</H1>
                <H3>FRONTEND DEVELOPER </H3>
                <H3>UX/UI DESIGNER</H3>
                <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et omnis 
                laboriosam aut voluptas unde cum qui, odio exercitationem eligendi 
                ullam necessitatibus amet in doloremque, maxime vitae quas, ex 
                voluptatem numquam!</P>
            </TextContent>
        </Hero>
    );
}

export default Home;