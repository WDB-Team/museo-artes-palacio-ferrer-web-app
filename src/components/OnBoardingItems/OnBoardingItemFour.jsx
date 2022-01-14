import React, { Component } from 'react';

import './style/OnBoardingItemFour/OnBoardingItemFourMobile.css';
import './style/OnBoardingItemFour/OnBoardingItemFourMobileMediaQuery.css';


import img1 from './../../assets/img/richly-decorated-interior Low.jpg';
import img1High from './../../assets/img/richly-decorated-interior.jpg';

import img2 from './../../assets/img/IMG20220111123206_00 Low v1.jpg';
import img2High from './../../assets/img/IMG20220111123206_00Highv1.jpg';

export default class OnBoardingItemFour extends Component {
    render() {
        return (
            <article className="OnBoardingItemFour">
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
                    </div>

                    <div className="Content">
                        <h2>No solo nuestras salas <br /> y exhibiciones. <br /> Toda la arquitectura del edificio <br /> es arte</h2>
                    
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
