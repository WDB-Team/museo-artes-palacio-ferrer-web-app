import React, { Component } from 'react'

import './style/IntroRecorridoContainer/IntroRecorridoContainerMobile.css';

import InterestInformationContainer from '../components/IntroRecorrido/InterestInformationContainer'
import ExpoContainer from '../components/IntroRecorrido/ExpoContainer'
import MiscelaneasContainer from '../components/IntroRecorrido/MiscelaneasContainer'

export default class IntroRecorridoContainer extends Component {
    render() {
        return (
            <div className="IntroRecorridoContainer">
            
                <div className="Content">

                    <div className="DecoratedImage"></div>


                    <h2>Recorrido Virtual</h2>
                    <p>
                        Dese un paseo por las distintas salas del museo de forma rápida. 
                        Nuestro recorrido virtual se hizo con la intención de informarle 
                        acerca de las distintas salas y exhibiciones que cuenta el museo.  
                        Le brindamos parte de la esencia del museo sin mostrarle el todo, 
                        ya que nuestro deseo es que pueda visitarnos personalmente y pasar 
                        el rato con nosotros.
                    </p>

                    <div className="NotaContainer">
                        <h3>Nota:</h3>
                        <p>

                        </p>
                    </div>
                </div>

                <hr />

                <InterestInformationContainer />

                <ExpoContainer />

                <MiscelaneasContainer />

            </div>
        )
    }
}
