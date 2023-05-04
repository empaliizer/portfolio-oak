import React from 'react'

import styled from 'styled-components'

const StyledContainerInnerCol = styled.div`
display: flex;
flex-direction: column;
width: 90%;
max-width: 1400px;

@media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;

}
`; 

const ContainerInnerCol = ({ children }) => {
  return (
        <StyledContainerInnerCol>
            { children }
        </StyledContainerInnerCol>
  )
}

export default ContainerInnerCol