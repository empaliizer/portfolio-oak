import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dev } from '../data/data'
import Container from '../components/Container/Container';
import ContainerInner from '../components/Container/ContainerInner';
import Col1 from '../components/Common/Col1';
import Col2 from '../components/Common/Col2';
import H1 from '../typography/h1';
import P from '../typography/p';
import BgImg from '../components/Common/BgImg';
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

@media screen and (max-width:900px){
      justify-content: center;
    }
`; 


const Work = () => {

    const [slide, setSlide] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        if(page) {
            const pageAsNumber = Number(page);
            if(pageAsNumber >= 0 && pageAsNumber < dev.length) {
                setSlide(pageAsNumber);
            } else {
                setSlide(0);
            }
        } else {
            setSlide(0);
        }
    },[]);

    useEffect(() => {
        if(slide !== false) {
            let queryParams = new URLSearchParams(window.location.search);
            queryParams.set('page', slide);  
            window.history.replaceState(null, null, "?" + queryParams.toString());
        }
    }, [slide])

    const nextSlide = () => {
        if(slide === dev.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    const prevSlide = () => {
        if(slide === 0) {
            setSlide(dev.length - 1);
        } else {
            setSlide(slide - 1);
        }
    }

    const getCurrentSlide = (field) => {
        return dev[slide][field];
    }
    
    if(slide === false) {
        return (
            <></>
        )
    }

    return (
        <Container>
            <ContainerInner>
                <Col1>
                    <BgImg src={getCurrentSlide('img')} />
                </Col1>
                <Col2>
                    <TopHeading>
                        <Category>
                            <P>{ getCurrentSlide('name') }</P>
                            <Line />
                            <P>{ getCurrentSlide('cat')}</P>
                        </Category>
                        <Buttons>
                            {/* Glöm inte att lägga in src till knapparna */}
                            { getCurrentSlide('code') && (
                                <>
                                    <LinedButton href={getCurrentSlide('code')}>See code</LinedButton> 
                                    <Line />
                                </>
                            )}
                            <LinedButton  href={getCurrentSlide('link')}>Prototype</LinedButton>
                        </Buttons>
                    </TopHeading>
                    <TextContainer>
                        <H1>{ getCurrentSlide('title') }</H1>
                        <P>{ getCurrentSlide('description') }</P>
                    </TextContainer>
                    <ButtonContainer>
                        <ArrowButton onClick={() => { prevSlide() }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825L13.425 18.6L12 20Z" fill="white"/>
                            </svg>
                        </ArrowButton>
                        <ArrowButton onClick={() => { nextSlide() }}>
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

export default Work;