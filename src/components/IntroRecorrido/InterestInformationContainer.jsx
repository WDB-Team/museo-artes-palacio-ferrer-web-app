import React, { Component } from 'react';

import './style/InterestInformationContainerMobile.css';

export default class InterestInformationContainer extends Component {
    render() {
        return (
            <div className="InterestInformationContainer">
                
                    <h3>Información <br />
                        De Interes</h3>
                    
                    <div className="CardItem One">
                        <div className="Foreground">
                            <h4>Contacto</h4>
                            <button>
                                ir
                            </button>
                        </div>
                    </div>

                    <div className="CardItem Two">
                        <div className="Foreground">
                            <h4>La arquitectura <br /> del lugar</h4>
                            <button>
                                ir
                            </button>
                        </div>
                    </div>

                    <div className="CardItem Three">
                        <div className="Foreground">
                            <h4>Salas y Exhibiciones</h4>
                            <button>
                                ir
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}
