import React from 'react'
import styled from 'styled-components'

export default styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: flex-start;
justify-content: center;
width: 50%;

@media screen and (max-width:900px){
      width: 100%;
    }
`;
