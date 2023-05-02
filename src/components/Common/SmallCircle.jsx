import React from 'react'
import styled from 'styled-components'

const DecoCircle = styled.div`
width: 10.25rem;
height: 10.25rem;
border-radius: 100%;
background-color: #fff;
border: none; 
margin-top: 55px;
position: absolute;
z-index: -1;
top: -10rem;
left: -3rem;

@media screen and (max-width:900px){
      display: none;
    }
`;


const SmallCircle = () => {
  return (
    <DecoCircle />
  )
}

export default SmallCircle