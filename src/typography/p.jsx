import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p `
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 5px;
`;

const P = ({children}) => {
  return (
    <StyledP>{children}</StyledP>
  )
}

export default P;