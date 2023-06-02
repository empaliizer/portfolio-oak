import React from 'react'
import styled from 'styled-components'

const StyledContainerInner = styled.div`
display: flex;
flex-direction: row;
width: 90%;
max-width: 1400px;
gap: 3rem;

@media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;

}
`; 

const ContainerInner = ({ children }) => {
  return (
        <StyledContainerInner>
            { children }
        </StyledContainerInner>
  )
}

export default ContainerInner