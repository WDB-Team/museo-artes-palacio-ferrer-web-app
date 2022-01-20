import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/BeginActionsSection/BeginActionsSectionMobile.css';
import './style/BeginActionsSection/BeginActionsSectionMobileMediaQuery.css';

export default class BeginActionsSection extends Component {
    render() {
        return (
            <section className="BeginActionsSection">

                <div className="DecoratedSeparatorTop"></div>

                <h2>Eche un vistazo al museo <br /> o reserve un recorrido</h2>
                
                <div className="CardContainer">

                <div className="VirtualTripContainer">
                    <h3>Recorrido Virtual</h3>
                    <p>
                        Dese un paseo por las distintas salas del museo de forma rápida. 
                        Nuestro recorrido virtual se hizo con la intención de informarle 
                        acerca de las distintas salas y exhibiciones que cuenta el museo.  
                        Le brindamos parte de la esencia del museo sin mostrarle el todo, 
                        ya que nuestro deseo es que pueda visitarnos personalmente y pasar 
                        el rato con nosotros.
                    </p>
                    <Link className="Button" to="/recorridoVirtual">Comenzar</Link>
                </div>

                <div className="TakeTripContainer">
                    <h3>Reservar Recorrido</h3>
                    <p>
                        Vea nuestro horario de funcionamiento y reserve un recorrido 
                        expositivo del lugar. Puede pasarse en cualquier momento sin 
                        reservar siempre que venga dentro del horario. Pero la reserva 
                        sirve para planificarnos y brindarles el mejor servicio
                    </p>
                    <Link className="Button" to="">Reservar</Link>
                </div>
                </div>
            </section>
        );
    }
}
