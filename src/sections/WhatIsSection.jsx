import React, { Component } from 'react';

import './style/WhatIsSection/WhatIsSectionMobile.css';
import './style/WhatIsSection/WhatIsSectionMobileMediaQuery.css';

import img1 from '../assets/img/Captura Low.jpg';
import img2 from '../assets/img/exterior Low v1.jpg';


export default class WhatIsSection extends Component {
    render() {
        return (
            <div className="WhatIsSection">
                 <div className="DecoratedSeparatorTop"></div>

                 <div className = "TitleContainerShadow">
                    
                    <div className="TitleContainer">
                    <span></span>
                    <h1>¿Qué es El Palacio <span>Ferrer?</span></h1>
                    </div>
                </div>
                <div className = "Stack">
                    <div className = "Positioned"><img src={img1} alt="" width="200px" height="200px" /></div>
                    <div className = "Positioned"></div>
                    <div className = "Positioned"><img src={img2} alt="" width="200px" height="200px" /></div>
                </div>

                <div className="Content">
                <p>
                En el entorno del parque José Martí, 
                justo en el corazón de la 
                bicentenaria ciudad de Cienfuegos, 
                se alza un inmueble con 
                alto valor histórico y arquitectónico, 
                construido sobre un edificio del siglo XIX
                donde antes existió una casa almacén de estilo 
                neoclásico.
                </p>
                <p>
                Luego de una intensa labor 
                de reconstrucción y conservación, 
                que captó el interés de muchos, 
                el popular Palacio Ferrer, fue 
                constituido como Museo de las Artes en  
                abril de 2019, en la jornada del cumpleaños 200 
                de la otrora colonia Fernandina de 
                Jagua.
                </p>

                <button>Enseñame más</button>
                </div>
            </div>
        );
    }
}
