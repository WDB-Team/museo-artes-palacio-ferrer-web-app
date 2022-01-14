import React, { Component } from 'react'

import './style/OnBoardingItemOne/OnBoardingItemOneMobile.css';
import './style/OnBoardingItemOne/OnBoardingItemOneMobileMediaQuery.css';

import img1 from './../../assets/img/DSC09847 Low v1.jpg';
import img1High from './../../assets/img/DSC09847High.jpg';

import img2 from './../../assets/img/DSC09854 Low v1.jpg';
import img2High from './../../assets/img/DSC09854High.jpg';

export default class OnBoardingItemOne extends Component {
    render() {
        return (
            <article className = "OnBoardingItemOne">          
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
            </article>
        )
    }
}
