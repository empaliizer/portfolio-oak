import React from "react";
import styled from "styled-components";

const StyledCopy = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;    
`;

const Copy = () => (
    <StyledCopy>&copy; Empalizer 2023</StyledCopy>
);

export default Copy;