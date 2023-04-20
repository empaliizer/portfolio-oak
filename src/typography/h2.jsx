import styled from "styled-components";

const StyledH2 = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;

    margin-bottom: 5px;
`;

const H2 = ({children}) => {
    return (
        <StyledH2>{children}</StyledH2>
    )
}

export default H2;