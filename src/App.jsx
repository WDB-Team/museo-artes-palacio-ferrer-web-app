
import React, { Component } from 'react';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';

import './App.css';

import HeaderContainer from './container/HeaderContainer';
import FooterContainer from './container/FooterContainer';

import Home from './routes/Home';
import RecorridoVirtual from './routes/RecorridoVirtual';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.headerRef = React.createRef();
  }
  
  render() {

    return (
      <div className="App">
        
        <BrowserRouter>
          <HeaderContainer ref={this.headerRef} />
          <Routes>
            <Route path="/" element={<Home headerRef={this.headerRef} />} />
            <Route path="recorridoVirtual" element={<RecorridoVirtual headerRef={this.headerRef} />} />
          </Routes>
          <FooterContainer />
        </BrowserRouter>
        
    </div>
    )
  }
}

/* 
      <HeroSection ref={this.heroSection} />
      <OnBoardingSection />
      <WhatIsSection />
      <GabiAndSofiSection />
      <EventAndMoreSection />
      <BeginActionsSection />
*/
