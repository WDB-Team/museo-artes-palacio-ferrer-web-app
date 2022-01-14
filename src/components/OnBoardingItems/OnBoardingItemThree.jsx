import React, { Component } from 'react';

import './style/OnBoardingItemThree/OnBoardingItemThreeMobile.css';
import './style/OnBoardingItemThree/OnBoardingItemThreeMobileMediaQuery.css';

import img1 from './../../assets/img/se-puede-subir-al-mirador.jpg';

import img2 from './../../assets/img/la-vista-expectacular Low v1.jpg';
import img2High from './../../assets/img/la-vista-expectacularHigh.jpg';

export default class OnBoardingItemThree extends Component {
    render() {
        return (
            <article className ="OnBoardingItemThree">
                    
            <div className = "Stack">

                <div className = "Positioned"><img src={img1} alt="" width="200px" height="200px" /></div>
                <div className = "Positioned"></div>
                <div className = "Positioned">
                    <picture>
                        <source srcSet={img2High} media="(min-width : 768px)" />
                        <img src={img2} alt="" width="200px" height="200px" />
                    </picture>
                </div>
            </div>

            <div className="Content">
                <h2>Observe los matices <br /> de la vida <br /> mientras Cienfuegos <br /> te enamora</h2>

                <p>
                    Mas de cienda asddasdha ad asd a  Wuy a a vdas das das ads
                    da sdasdas dasd asd sa dasd sgea hfah fahf hdf hf
                    dfas dfsd fds fdsa fsda fds fadsf d fds fsdf dsf sda
                    fds fsd fsdf sadfsdaf sdf sdf dsf dsf df sd fdafsd gsd
                    sf asdf sdfds fasd fsad fsd fsdf sdaf sdf dsfsd fds fsdf sd zz
                </p>

                <button>Enseñame más</button>

            </div>

        </article>
        );
    }
}
