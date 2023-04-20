import React from 'react'
import styled from 'styled-components'
import H1 from '../../typography/h1'
import H3 from '../../typography/h3'
import BgPic from '../../assets/profile.png'
import { StyledCol1 } from '../Common/Col1'
import { StyledCol2 } from '../Common/Col2'
import BgCircle from '../Common/BgCircle'

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
`;

const RoundButton = styled.button`
width: 8.75rem;
height: 8.75rem;
border-radius: 100%;
background-color: #fff;
border: none; 
margin-top: 55px;
`;

const Hero = () => {
  return (
      <StyledHero>
            <StyledCol1>
                <TextContent>
                  <H1>HI, I AM EMELIE</H1>
                  <H3>JUNIOR FRONTEND DEVELOPER UX/UI DESIGNER</H3>
                  <RoundButton>
                    <p>Se my work</p>
                  </RoundButton>
                </TextContent>
            </StyledCol1>
            <StyledCol2>
                <BgImg /> 
            </StyledCol2>
      </StyledHero>     
  )
}

export default Hero