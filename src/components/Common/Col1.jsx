import React from 'react'
import styled from 'styled-components'

export const StyledCol1 = styled.div`
display: flex;
width: 30%;
justify-content: space-evenly;
`;

const Col1 = (props) => {
    return (
        <StyledCol1>{props.children}</StyledCol1>
    );
}

export default Col1;
