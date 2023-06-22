import React from 'react';
import styled from 'styled-components';

const StyledLinedButton = styled.a`
font-weight: 600;
color: #000;
text-decoration: underline;
font-family: 'Rubrik', sans-serif;
`;
 


const LinedButton = ({children, href}) => {
  return (
    <StyledLinedButton href={href}>
        {children}
    </StyledLinedButton>
    
  )
}

export default LinedButton;