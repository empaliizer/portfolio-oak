import React from 'react'
import styled from 'styled-components'
import Container from '../Container/Container'
import ContainerInner from '../Container/ContainerInner'
import Col1 from '../Common/Col1'
import Col2 from '../Common/Col2'

const BgImg = styled.div`
display: flex;
background-image: url(${props => props.src});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
min-width: 34rem;
min-height: 40rem;
`;

const Hero = ({ bgImg, children }) => {
  return (
      <Container>
        <ContainerInner>
            <Col1>
              { children }
            </Col1>
            <Col2>
                <BgImg src={bgImg} /> 
            </Col2>
        </ContainerInner>
      </Container>     
  )
}

export default Hero