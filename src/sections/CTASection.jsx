import React, { Component } from 'react'

import './style/CTASection.css';
import './style/CTASectionMediaQuery.css';

export default class CTASection extends Component {
    render() {
        return (
            <div className="CTASection">
                
                <div className="CTARecorridoVirtual">
                    <div className="DecoratedBox"></div>
                    <button><span>Iniciar Recorrido Virtual</span> </button>
                </div>

                <button className="ReservarRecorridoButton">Reservar Recorrido</button>

            </div>
        )
    }
}
