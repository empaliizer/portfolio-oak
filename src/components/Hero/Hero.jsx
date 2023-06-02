import React from 'react'
import styled from 'styled-components'
import Container from '../Container/Container'
import ContainerInner from '../Container/ContainerInner'
import Col1 from '../Common/Col1'
import Col2 from '../Common/Col2'
import BgImg from '../Common/BgImg'
import ProfileImg from '../../assets/profile.png'

const Hero = ({ children }) => {
  return (
      <Container>
        <ContainerInner>
            <Col1>
              { children }
            </Col1>
            <Col2>
                <BgImg src={ProfileImg} /> 
            </Col2>
        </ContainerInner>
      </Container>     
  )
}

export default Hero