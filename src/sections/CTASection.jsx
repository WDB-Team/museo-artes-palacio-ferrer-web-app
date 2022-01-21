import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './style/CTASection.css';
import './style/CTASectionMediaQuery.css';

export default class CTASection extends Component {
    render() {
        return (
            <div className="CTASection">
                
                <div className="CTARecorridoVirtual">
                    <div className="DecoratedBox"></div>
                    <Link className="Button" to="/recorridoVirtual"><span>Iniciar Recorrido Virtual</span> </Link>
                </div>

                <Link className="ReservarRecorridoButton" to="/reservaciones">Reservar Recorrido</Link>

            </div>
        )
    }
}
