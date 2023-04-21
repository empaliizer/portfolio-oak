import React from 'react'
import styled from 'styled-components'
import H1 from '../../typography/h1'
import H3 from '../../typography/h3'
import P from '../../typography/p'
import BgPic from '../../assets/profile.png'
import Col1 from '../Common/Col1'
import Col2 from '../Common/Col2'
import BgCircle from '../Common/BgCircle'
import BigCircle from '../Common/BigCircle'

const StyledHero = styled.div`
display: flex; 
align-items: center;
justify-content: center;
width: 100%;
`;

const BgImg = styled.div`
display: flex;
background-image: url(${BgPic});
background-size: cover;
min-width: 34rem;
min-height: 40rem;
`;

const TextContent = styled.div`
display: flex;
flex-direction: column;
position: relative;
bottom: 2rem;
`;

const Hero = () => {
  return (
      <StyledHero>
            <Col1>
              <BigCircle />
                <TextContent>
                  <H1>HI, I AM EMELIE</H1>
                  <H3>FRONTEND DEVELOPER </H3>
                  <H3>UX/UI DESIGNER</H3>
                  <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et omnis 
                    laboriosam aut voluptas unde cum qui, odio exercitationem eligendi 
                    ullam necessitatibus amet in doloremque, maxime vitae quas, ex 
                    voluptatem numquam!</P>
                </TextContent>
            </Col1>
            <Col2>
                <BgImg /> 
            </Col2>
      </StyledHero>     
  )
}

export default Hero