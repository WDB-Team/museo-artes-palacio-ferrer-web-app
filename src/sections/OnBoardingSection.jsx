import React, { Component } from 'react';

import './style/OnBoardingSection/OnBoardingSectionMobile.css';

import CTASection from './CTASection';

import img1 from './../assets/img/DSC09847 Low v1.jpg';
import img2 from './../assets/img/DSC09854 Low v1.jpg';

export default class OnBoardingSection extends Component {
    render() {
        return (
            <div className="OnBoardingSection">
                <div className="DecoratedSeparatorTop"></div>
                
                <CTASection />
                
                <div className = "Stack">
                    <div className = "Positioned"><img src={img1} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "Positioned"><img src={img2} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "SloganContainer">
                    <h2>Viaja entre las maravillas del arte <br /> y la cultura cubana <br /> a traves de nuestras salas  <br /> y exhibiciones</h2>
                    </div>
                    <button>Enseñame más</button>
                </div>

                <div className="DecoratedSeparatorMiddle"></div>

            </div>
        );
    }
}
