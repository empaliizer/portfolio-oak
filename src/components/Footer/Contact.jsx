import React from "react";
import styled from "styled-components";
import P from "../../typography/p";
import { infos, icons } from "../../data/data";

const ContactContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Contact = () => (
    <ContactContainer>
        {infos.map(info => <P key={info.id}>{info.contact}</P>)}
    </ContactContainer>
);

export default Contact;