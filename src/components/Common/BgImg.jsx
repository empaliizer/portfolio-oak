import React from 'react'
import styled from 'styled-components';

const StyledBgImg = styled.div`
display: flex;
background-image: url(${props => props.src});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
min-width: 34rem;
min-height: 40rem;
`;

const BgImg = ({ src }) => {
  return (
    <StyledBgImg src={src} /> 
  )
}

export default BgImg