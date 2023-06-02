import React from 'react'
import styled from 'styled-components'

const StartImgPortfolio = styled.img`
    max-width: 100%;
    height: 40rem;
    object-fit: cover;
`;

const PortfolioImg = ({ src }) => {
  return (
    <StartImgPortfolio src={src}/>
  )
}

export default PortfolioImg