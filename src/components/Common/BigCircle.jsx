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
    z-index: -1;
    top: -14rem;
    left: -4rem;

    @media screen and (max-width:767px){
        
    }
`;

const BigCircle = () => {
  return (
    <DecoCircle />
  )
}

export default BigCircle;