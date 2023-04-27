import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";

const StyledFooter = styled.footer `
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  
  @media screen and (max-width:900px){
  margin-top: 1rem;
}
`;

const StyledFooterInner = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 56rem;

@media screen and (max-width:1300px){
    gap: 32rem;
}

@media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

}

`;

const Footer = () => {
    return (
            <StyledFooter>
                <StyledFooterInner>
                    <Contact />
                    <SocialMedia />
                </StyledFooterInner>
                <Copyright />
            </StyledFooter>
    );
}

export default Footer;