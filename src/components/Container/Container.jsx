import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex; 
align-items: center;
justify-content: center;
width: 100%;
`;

const Container = ({ children }) => {
  return (
        <StyledContainer>
            { children }
        </StyledContainer>
  )
}

export default Container