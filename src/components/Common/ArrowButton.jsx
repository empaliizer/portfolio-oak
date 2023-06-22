import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
height: 53px;
width: 53px;
border: none;
color: #fff;
margin-left: 10px;
margin-top: 60px;
background-image: linear-gradient(
  325deg,
  hsl(351deg 92% 76%) 0%,
  hsl(351deg 89% 74%) 11%,
  hsl(351deg 87% 73%) 22%,
  hsl(351deg 85% 71%) 33%,
  hsl(351deg 82% 70%) 44%,
  hsl(351deg 81% 68%) 56%,
  hsl(351deg 79% 66%) 67%,
  hsl(351deg 77% 64%) 78%,
  hsl(351deg 76% 62%) 89%,
  hsl(351deg 74% 61%) 100%
);
`;

const ArrowButton = ({children, onClick}) => {
  return (
    // Hur lägger jag in svg-pilen?
    <Button onClick={() => { onClick() }}>{children}</Button>
  )
}

export default ArrowButton