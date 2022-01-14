import React, { Component } from 'react';

import './style/OnBoardingSection/OnBoardingSectionMobile.css';
import './style/OnBoardingSection/OnBoardingSectionDesktop.css';

import CTASection from './CTASection';

import OnBoardingItemContainer from '../container/OnBoardingItemContainer';

export default class OnBoardingSection extends Component {

    render() {
        return (
            <div className="OnBoardingSection">
                <div className="DecoratedSeparatorTop"></div>
                
                <CTASection />

                <OnBoardingItemContainer />
        
                
            </div>
        );
    }

}
