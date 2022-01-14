import React, { Component } from 'react'

import './style/EventAndMoreSection/EventAndMoreSectionMobile.css';

import img1 from './../assets/img/269268297_277510874433471_5449431437297842405_n Low.jpg';
import img1High from './../assets/img/269268297_277510874433471_5449431437297842405_n.jpg';

import img2 from './../assets/img/271476846_289168479934377_6044063217377065817_n Low.jpg';
import img2High from './../assets/img/271476846_289168479934377_6044063217377065817_nHighv1.jpg';

import img3 from './../assets/img/268851673_277510967766795_5993425407020732372_n Low.jpg';
import img3High from './../assets/img/268851673_277510967766795_5993425407020732372_n.jpg';

export default class EventAndMoreSection extends Component {
    render() {
        return (
            <section className="EventAndMoreSection">
                <div className="Content">
                        <h2> Eventos, Intercambios  <br /> y más...</h2>
                        
                        <div className = "Stack">
                            <div className = "Positioned">
                            
                            <picture>
                                <source srcSet={img1High} media="(min-width : 768px)" />
                                <img src={img1} alt="" width="200px" height="200px" />
                            </picture>

                            </div>
                           
                            <div className = "Positioned">
                                <picture>
                                    <source srcSet={img2High} media="(min-width : 768px)" />
                                    <img src={img2} alt="" width="200px" height="200px" />
                                </picture>
                            </div>

                            <div className = "Positioned">
                            
                            <picture>
                                <source srcSet={img3High} media="(min-width : 768px)" />
                                <img src={img3} alt="" width="200px" height="200px" />
                            </picture>

                            </div>

                            <div className = "Positioned"></div>    
                    </div>


                        <p>
                        El Palacio es un punto de reunión de maestros 
                        de todo tipo de artes, estudiantes y aficionados 
                        caracterizados por su ímpetu por la cultura y la 
                        historia de nuestro país y de la Perla del Sur. De 
                        ahí que nuestras puertas estén abiertas para el intercambio 
                        y la realización de eventos. No queremos que el museo sea 
                        solo historia pasada, sino que también pueda escribir el futuro
                        </p>

                        <div className="SocialMedia">

                            <h3>Visite nuestra pagina de Facebook <br /> para estar al tanto de <br /> todas estas actividades</h3>
                            <button><span></span> Museo de las Artes Palacio Ferrer</button>
                        
                        </div>
                        
                </div>

            </section>
        )
    }
}
