
import './App.css';

import HeaderContainer from './container/HeaderContainer';
import HeroSection from './sections/HeroSection';

import OnBoardingSection from './sections/OnBoardingSection';

import WhatIsSection from './sections/WhatIsSection';

import GabiAndSofiSection from './sections/GabiAndSofiSection';

import EventAndMoreSection from './sections/EventAndMoreSection';

import BeginActionsSection from './sections/BeginActionsSection';


import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.heroSection = React.createRef();
  }
  
  render() {

    return (
      <div className="App">
      
      <HeroSection ref={this.heroSection} />
      <OnBoardingSection />
      <WhatIsSection />
      <GabiAndSofiSection />
      <EventAndMoreSection />
      <BeginActionsSection />
    
      <HeaderContainer heroRef={this.heroSection} />

    </div>
    )
  }
}
