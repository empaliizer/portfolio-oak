import styled from "styled-components";

const StyledH1 = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: #000;
    letter-spacing: 0.4rem;
`;

const H1 = ({children}) => {
    return (
        <StyledH1>{children}</StyledH1>
    )
}

export default H1;