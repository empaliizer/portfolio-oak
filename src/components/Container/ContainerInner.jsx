import React from 'react'
import styled from 'styled-components'

const StyledContainerInner = styled.div`
display: flex;
flex-direction: row;
width: 90%;
margin: auto 0;
`; 

const ContainerInner = ({ children }) => {
  return (
        <StyledContainerInner>
            { children }
        </StyledContainerInner>
  )
}

export default ContainerInner