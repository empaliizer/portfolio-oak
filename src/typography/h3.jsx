import styled from "styled-components";

const StyledH3 = styled.h3`
font-size: 1.5rem;
    margin: 0;
    margin-bottom: 5px;
    color: #000;
    letter-spacing: 0.4rem;
`;

const H3 = ({children}) => {
    return (
        <StyledH3>{children}</StyledH3>
    )
}

export default H3;