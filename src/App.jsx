
import React, { Component } from 'react';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';

import './App.css';

import HeaderContainer from './container/HeaderContainer';

import Home from './routes/Home';
import RecorridoVirtual from './routes/RecorridoVirtual';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.homeSectionRef = React.createRef();
  }
  
  render() {

    return (
      <div className="App">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home ref={this.homeSectionRef} />} />
            <Route path="recorridoVirtual" element={<RecorridoVirtual />} />
          </Routes>
        </BrowserRouter>
      
    
      <HeaderContainer heroRef={this.homeSectionRef} />

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
