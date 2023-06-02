import React from 'react';
import styled from 'styled-components';

const StyledTextContent = styled.div`
display: flex;
flex-direction: column;
position: relative;
z-index: 1;

@media screen and (max-width:900px){
  width: 100%;
  position: unset;
}
`;

const TextContent = ({ children }) => {
  return (
    <StyledTextContent>
        { children }
    </StyledTextContent>
  )
}

export default TextContent