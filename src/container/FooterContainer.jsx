import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/FooterContainer/FooterContainerMobile.css';

export default class FooterContainer extends Component {
    render() {
        return (
            <footer className="FooterContainer">
                
                <div className="Contact">
                    <h4>Museo de las Artes Palacio Ferrer</h4>
                    <p><span>Direccion:</span></p>
                    <p><span>Telefono:</span></p>
                    <p><span>Correo:</span></p>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recorridoVirtual">Recorrido Virtual</Link></li>
                    <li><Link to="">Reservas</Link></li>
                    <li><Link to="">Contacto</Link></li>
                    <li><a href="https://www.facebook.com/MuseoDeLasArtesPalacioFerrer/">Pagina de Facebook</a></li>
                </ul>

            </footer>
        );
    }
}
