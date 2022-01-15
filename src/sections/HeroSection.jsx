import React, { Component } from 'react'

import './style/HeroSection/HeroSectionMobile.css';
import './style/HeroSection/HeroSectionMobileMediaQuery.css';
import './style/HeroSection/HeroSectionDesktopMediaQuery.css';

import img1 from '../assets/img/vue-exterieure Low v1.jpg';
import img1High from '../assets/img/vue-exterieureHightv1.jpg';

import img2 from '../assets/img/the-tower Low v1.jpg';
import img2High from '../assets/img/the-towerHightv1.jpg';


export default class HeroSection extends Component {
    render() {
        return (

            <div className = "HeroSectionContainer">

                <div className = "TitleContainerShadow">
                    <div className="TitleContainer">
                    <h1>Museo de las <br /> Artes Palacio Ferrer</h1>
                    </div>
                </div>

                <div className = "StackContainer">
                    <div className = "Stack">
                        <div className = "Positioned">
                        <picture>
                            <source srcSet={img1High} media="(min-width : 768px)" />
                            <img src={img1} alt="" width="200px" height="200px" />
                        </picture>
                            
                        </div>
                        <div className = "Positioned"></div>
                        <div className = "Positioned">
                        <picture>
                            <source srcSet={img2High} media="(min-width : 768px)" />
                            <img src={img2} alt="" width="200px" height="200px" />
                        </picture>
                            
                        </div>
                        <div className = "Positioned"></div>
                        <div className = "SloganContainer">
                        <h2>Un vínculo con el arte, la <br /> historia y la cultura</h2>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
