import React, { Component } from 'react';

import HeroSection from './../sections/HeroSection';
import OnBoardingSection from './../sections/OnBoardingSection';
import WhatIsSection from './../sections/WhatIsSection';
import GabiAndSofiSection from './../sections/GabiAndSofiSection';
import EventAndMoreSection from './../sections/EventAndMoreSection';
import BeginActionsSection from './../sections/BeginActionsSection';

export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.heroSection = React.createRef();
    }

    getHeroSectionRef(){
        return this.heroSection.current;
    }

    render() {
        return (
            <React.Fragment>
                <HeroSection ref={this.heroSection} />
                <OnBoardingSection />
                <WhatIsSection />
                <GabiAndSofiSection />
                <EventAndMoreSection />
                <BeginActionsSection />
            </React.Fragment>
        );
    }
}
