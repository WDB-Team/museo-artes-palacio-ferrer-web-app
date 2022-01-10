import React, { Component } from 'react';

import './style/OnBoardingSection/OnBoardingSectionMobile.css';
import './style/OnBoardingSection/OnBoardingSectionDesktop.css';

import CTASection from './CTASection';

import img1 from './../assets/img/DSC09847 Low v1.jpg';
import img1High from './../assets/img/DSC09847High.jpg';

import img2 from './../assets/img/DSC09854 Low v1.jpg';
import img2High from './../assets/img/DSC09854High.jpg';

import img3 from './../assets/img/IMG-20220108-WA0011 Low v1.jpg';
import img3High from './../assets/img/IMG-20220108-WA0011High.jpg';

import img4 from './../assets/img/IMG-20220108-WA0010 Low v1.jpg';
import img4High from './../assets/img/IMG-20220108-WA0010High.jpg';

import img5 from './../assets/img/se-puede-subir-al-mirador.jpg';

import img6 from './../assets/img/la-vista-expectacular Low v1.jpg';
import img6High from './../assets/img/la-vista-expectacularHigh.jpg';
                       

export default class OnBoardingSection extends Component {

    render() {
        return (
            <div className="OnBoardingSection">
                <div className="DecoratedSeparatorTop"></div>
                
                <CTASection />
                
                <div className ="OnBoardingItem">
                    

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
                        <h2>Viaja entre las maravillas del arte <br /> y la cultura cubana <br /> a traves de nuestras salas  <br /> y exhibiciones</h2>
                    
                        <p>
                            Mas de cienda asddasdha ad asd a  Wuy a a vdas das das ads
                            da sdasdas dasd asd sa dasd sgea hfah fahf hdf hf
                            dfas dfsd fds fdsa fsda fds fadsf d fds fsdf dsf sda
                            fds fsd fsdf sadfsdaf sdf sdf dsf dsf df sd fdafsd gsd
                            sf asdf sdfds fasd fsad fsd fsdf sdaf sdf dsfsd fds fsdf sd zz
                        </p>

                        <button>Enseñame más</button>
                    </div>
                    <div className="DecoratedSeparatorMiddle"></div>
                </div>

                <div className ="OnBoardingItemTwo">
                    
                    <div className = "Stack">
                        <div className = "Positioned">
                            <picture>
                                <source srcSet={img3High} media="(min-width : 768px)" />
                                <img src={img3} alt="" width="200px" height="200px" />
                            </picture>
                        </div>
                        <div className = "Positioned"></div>
                        <div className = "Positioned">
                            <picture>
                                <source srcSet={img4High} media="(min-width : 768px)" />
                                <img src={img4} alt="" width="200px" height="200px" />
                            </picture>
                        </div>
                        <div className = "Positioned"></div>
                    </div> 

                    <div className="Content">
                        <h2>Accede a mas de cien años <br /> de Historia <br /> esperando a ser descubiertos  <br /> y recordados</h2>
                        
                        <p>
                            Mas de cienda asddasdha ad asd a  Wuy a a vdas das das ads
                            da sdasdas dasd asd sa dasd sgea hfah fahf hdf hf
                            dfas dfsd fds fdsa fsda fds fadsf d fds fsdf dsf sda
                            fds fsd fsdf sadfsdaf sdf sdf dsf dsf df sd fdafsd gsd
                            sf asdf sdfds fasd fsad fsd fsdf sdaf sdf dsfsd fds fsdf sd zz
                        </p>
                        
                        <button>Enseñame más</button>
                    </div>

                    <div className="DecoratedSeparatorMiddleSecond"></div>
                </div>

                <div className ="OnBoardingItemThree">
                    
                    <div className = "Stack">

                        <div className = "Positioned"><img src={img5} alt="" width="200px" height="200px" /></div>
                        <div className = "Positioned"></div>
                        <div className = "Positioned">
                            <picture>
                                <source srcSet={img6High} media="(min-width : 768px)" />
                                <img src={img6} alt="" width="200px" height="200px" />
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

                </div>
            </div>
        );
    }

    componentDidMount()
    {
        window.addEventListener("resize",this.onResizeBoarding);
    }

}
