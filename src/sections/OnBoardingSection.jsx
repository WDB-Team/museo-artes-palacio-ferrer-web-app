import React, { Component } from 'react';

import './style/OnBoardingSection/OnBoardingSectionMobile.css';

import CTASection from './CTASection';

import img1 from './../assets/img/DSC09847 Low v1.jpg';
import img2 from './../assets/img/DSC09854 Low v1.jpg';
import img3 from './../assets/img/IMG-20220108-WA0011 Low v1.jpg';
import img4 from './../assets/img/IMG-20220108-WA0010 Low v1.jpg';
import img5 from './../assets/img/se-puede-subir-al-mirador.jpg';
import img6 from './../assets/img/la-vista-expectacular Low v1.jpg';


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
                    <div className="DecoratedSeparatorMiddle"></div>
                </div>



                <div className = "StackSecond">
                    <div className = "Positioned"><img src={img3} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "Positioned"><img src={img4} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "SloganContainer">
                    <h2>Accede a mas de cien años <br /> de Historia <br /> esperando a ser descubiertos  <br /> y recordados</h2>
                    </div>
                    <button>Enseñame más</button>
                    <div className="DecoratedSeparatorMiddleSecond"></div>
                </div>

                <div className = "StackThird">
                    <div className = "Positioned"><img src={img5} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "Positioned"><img src={img6} alt="" width="200px" height="200px" /></div>
                    <div className = "SloganContainer">
                    <h2>Observe los matices <br /> de la vida <br /> mientras Cienfuegos <br /> te enamora</h2>
                    </div>
                    <button>Enseñame más</button>
                
                </div>

                


            </div>
        );
    }
}
