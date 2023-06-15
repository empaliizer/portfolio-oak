import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import ContainerInner from '../components/Container/ContainerInner';
import Col1 from '../components/Common/Col1';
import Col2 from '../components/Common/Col2';
import H1 from '../typography/h1';
import P from '../typography/p';
import BgImg from '../components/Common/BgImg';
import WorkImg from '../assets/portfolioImg.png';
import Line from '../components/Common/Line';
import LinedButton from '../components/Common/LinedButton';
import ArrowButton from '../components/Common/ArrowButton';

const TopHeading = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 189px;
margin-bottom: 36px;
`;

const Category = styled.div`
display: flex;
font-weight: 600;
`;

const Buttons = styled.div`
display: flex;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
font-family: 'Rubik', sans-serif;
letter-spacing: 0rem;
`; 

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: row;
`; 


const WebDesign = () => {

    return (
        <Container>
            <ContainerInner>
                <Col1>
                    <BgImg src={WorkImg} />
                </Col1>
                <Col2>
                    <TopHeading>
                        <Category>
                            <P>Projectname</P>
                            <Line />
                            <P>UX/DEV</P>
                        </Category>
                        <Buttons>
                            {/* Glöm inte att lägga in src till knapparna */}
                            <LinedButton>Prototype</LinedButton> 
                            <Line />
                            <LinedButton>Case study</LinedButton>
                        </Buttons>
                    </TopHeading>
                    <TextContainer>
                        <H1>Projectheading</H1>
                        <P>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</P>
                    </TextContainer>
                    <ButtonContainer>
                        <ArrowButton>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825L13.425 18.6L12 20Z" fill="white"/>
                            </svg>
                        </ArrowButton>
                        <ArrowButton>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11L10.575 5.4L12 4Z" fill="white"/>
                            </svg>
                        </ArrowButton>
                    </ButtonContainer>
                    
                </Col2>
              
            </ContainerInner>
        </Container>          
    );
}

export default WebDesign;