import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
height: 53px;
width: 53px;
background: linear-gradient(135deg, #E55067 60%, #E55067);
border: none;
color: #fff;
margin-left: 10px;
margin-top: 60px;
`;

const ArrowButton = ({children, onClick}) => {
  return (
    // Hur lägger jag in svg-pilen?
    <Button onClick={() => { onClick() }}>{children}</Button>
  )
}

export default ArrowButton