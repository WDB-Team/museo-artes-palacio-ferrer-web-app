import React, { Component } from 'react';

import './style/WhatIsSection/WhatIsSectionMobile.css';

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
                En el entorno del parque José Martí,<br /> 
                justo en el corazón de la <br />
                bicentenaria ciudad de Cienfuegos, <br />
                se alza un inmueble con <br />
                alto valor histórico y arquitectónico, <br />
                construido sobre un edificio del siglo XIX<br /> 
                donde antes existió una casa almacén de estilo <br />
                neoclásico.<br />
                </p>
                <p>
                Luego de una intensa labor <br />
                de reconstrucción y conservación, <br />
                que captó el interés de muchos, <br />
                el popular Palacio Ferrer, fue <br />
                constituido como Museo de las Artes en  <br />
                abril de 2019, en la jornada del cumpleaños 200 <br />
                de la otrora colonia Fernandina de <br />
                Jagua.<br />
                </p>

                <button>Enseñame más</button>
                </div>
            </div>
        );
    }
}
