import React, { Component } from 'react';

import './style/OnBoardingItemContainer/OnBoardingItemContainerMobile.css';
import './style/OnBoardingItemContainer/OnBoardingItemContainerMobileMediaQuery.css';
import './style/OnBoardingItemContainer/OnBoardinItemContainerDesktopMediaQuery.css';

import OnBoardingItemOne from '../components/OnBoardingItems/OnBoardingItemOne';
import OnBoardingItemTwo from '../components/OnBoardingItems/OnBoardingItemTwo';
import OnBoardingItemThree from '../components/OnBoardingItems/OnBoardingItemThree';
import OnBoardingItemFour from '../components/OnBoardingItems/OnBoardingItemFour';

export default class OnBoardingContainer extends Component {
    render() {
        return (
            <div className ="OnBoardingItemContainer">
                
                <OnBoardingItemOne />

                <div className="DecoratedSeparatorMiddle"></div>
                
                <OnBoardingItemTwo />

                <div className="DecoratedSeparatorMiddleSecond"></div>
                
                <OnBoardingItemThree />

                <div className="DecoratedSeparatorMiddle"></div>

                <OnBoardingItemFour />

            </div>
        );
    }
}
