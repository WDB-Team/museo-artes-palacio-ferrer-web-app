import React, { Component } from 'react'

import './style/HeroSection/HeroSectionMobile.css';

import img1 from '../assets/img/vue-exterieure Low v1.jpg';
import img2 from '../assets/img/the-tower Low v1.jpg';


export default class HeroSection extends Component {
    render() {
        return (

            <div className = "HeroSectionContainer">

                <div className = "TitleContainerShadow">
                    <div className="TitleContainer">
                    <h1>Museo de las <br /> Artes Palacio Ferrer</h1>
                    </div>
                </div>

                <div className = "Stack">
                    <div className = "Positioned"><img src={img1} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "Positioned"><img src={img2} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "SloganContainer">
                    <h2>El vínculo con el arte, la <br /> historia y la cultura</h2>
                    </div>
                </div>

            </div>
        )
    }
}
