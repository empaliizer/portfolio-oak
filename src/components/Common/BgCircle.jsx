import React from 'react'
import styled from 'styled-components'

const StyledBgCircle = styled.div`
position: absolute;
width: 1097px;
height: 1097px;
left: 171px;
top: 24px;
background: (80.39% 80.39% at 50% 50%, rgba(250, 138, 155, 0.91) 100%, rgba(255, 255, 255, 0) 0%) ;
filter: blur(100px);
`;

const BgCircle = () => {
  return (
    <StyledBgCircle />
  )
}

export default BgCircle;