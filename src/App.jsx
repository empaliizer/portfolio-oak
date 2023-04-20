import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Work';

const StyledBody = styled.div `
background-color: #F6F5F1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`;




const App = () => {

  return (
    <StyledBody>
      <Router>
          <FlexContainer>
            <Header />
            <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <MainContainer>
                <Hero text="MyHero"/>
              </MainContainer>
            </Route>
          </Switch>
            <Footer />
          </FlexContainer>
      </Router>
    </StyledBody>
  );
}


export default App;