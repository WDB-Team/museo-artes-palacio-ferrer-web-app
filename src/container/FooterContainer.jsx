import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/FooterContainer/FooterContainerMobile.css';

export default class FooterContainer extends Component {
    render() {
        return (
            <footer className="FooterContainer">
                
                <div className="Contact">
                    <h4>Museo de las Artes Palacio Ferrer</h4>
                    <p><span>Dirección:</span> Calle 34 #3094 Cienfuegos Cuba</p>
                    <p><span>Teléfono:</span> +535581278</p>
                    <p><span>Correo:</span> elCorreo@gamil.com</p>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recorridoVirtual">Recorrido Virtual</Link></li>
                    <li><Link to="/reservaciones">Reservar Recorrido</Link></li>
                    <li><Link to="">Acerca del Palacio</Link></li>
                    <li><a href="https://www.facebook.com/MuseoDeLasArtesPalacioFerrer/">Pagina de Facebook</a></li>
                </ul>

            </footer>
        );
    }
}
