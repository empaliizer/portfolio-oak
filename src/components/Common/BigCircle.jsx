import React from 'react'
import styled from 'styled-components';

const DecoCircle = styled.div`
width: 15rem;
height: 15rem;
border-radius: 100%;
background-color: #fff;
border: none; 
margin-top: 55px;
position: absolute;
top: 6rem;
left: 18rem;
`;

const BigCircle = () => {
  return (
    <DecoCircle />
  )
}

export default BigCircle;