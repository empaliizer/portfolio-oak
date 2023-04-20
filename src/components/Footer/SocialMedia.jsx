import React from "react";
import styled from "styled-components";
import { infos, icons } from "../../data/data";

const StyleSocialMedia = styled.a `
    display: flex;
    font-size: 1.5rem;
    text-decoration: none;
    color: #000;
    padding: 1rem;
    gap: 2rem;
    align-items: center;
`;

const SocialMediaInner = styled.div `
    display: flex;
    flex-direction: row;
`;

const DecoLine = styled.div `
background-color: #F98899;
height: 2px;
width: 66px;
`;



const SocialMedia = () => {
    return (
        <SocialMediaInner>
            {icons.map(({ id, href, name, className }, i) => 
                <StyleSocialMedia key={id} href={href} className={className}> {name}
                    { (i + 1) !== icons.length && (
                        <DecoLine className="line" />
                    )}
                </StyleSocialMedia>
            )}
        </SocialMediaInner>
    );
}

export default SocialMedia;