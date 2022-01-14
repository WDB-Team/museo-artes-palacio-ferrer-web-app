import React, { Component } from 'react';

import './style/GabiAndSofiSection/GabiAndSofiSectionMobile.css';

import img1 from './../assets/img/Estrena-nueva-sala-el-Museo-de-las-Artes-Palacio-Ferrer-de-Cienfuegos-3 Low v1.jpg';
import img1High from './../assets/img/Estrena-nueva-sala-el-Museo-de-las-Artes-Palacio-Ferrer-de-Cienfuegos-3Highv1.jpg';

import img2 from './../assets/img/Diseño-sin-título7-1.jpg';



export default class GabiAndSofiSection extends Component {
    render() {
        return (
            <section className="GabiAndSofiSection">

                <div className="DecoratedSeparatorTop"></div>

                <div className="DecoratedImageTop"></div>

                <div className="Content">
                        <h2> Gabi & Sofi se abren <br /> su espacio en el museo</h2>
                    
                        <p>
                        Gabi & Sofi se pasaron por el palacio, y lo hicieron suyo abriendo una 
                        sala orientada a los niños, donde hoy se exponen juguetes de su marca. 
                        Juguetes manufacturados, de alta calidad y amigables con el medio ambiente, 
                        pues son hechos con madera reciclada. La exposición, denominada Juguetes: 
                        arte y oficio es una muestra de que el palacio esta orientado a todo publico. 
                        </p>

                        <button>Enseñame más</button>
                </div>

                <div className = "Stack">
                        <div className = "Positioned">
                        
                        <picture>
                            <source srcSet={img1High} media="(min-width : 768px)" />
                            <img src={img1} alt="" width="200px" height="200px" />
                        </picture>

                        </div>
                        <div className = "Positioned">   
                                <img src={img2} alt="" width="200px" height="200px" />
                        </div>
                        <div className = "Positioned"></div>    
                </div>

                <div className="DecoratedImageBottom"></div>

                <div className="DecoratedSeparatorBottom"></div>

            </section>
        );
    }
}
