import React from 'react';
import styled from 'styled-components';

const StyledTextContent = styled.div`
display: flex;
flex-direction: column;
width: 60%;
position: relative;
z-index: 1;
bottom: 2rem;
left: 16rem;
`;

const TextContent = ({ children }) => {
  return (
    <StyledTextContent>
        { children }
    </StyledTextContent>
  )
}

export default TextContent