import React, { Component } from 'react';

import './style/MiscelaneasContainerMobile.css';

export default class MiscelaneasContainer extends Component {
    render() {
        return (
            <div className="MiscelaneasContainer">
                    <div className="DecoratedImage"></div>
                    
                    <h3>Miscelaneas</h3>
                    
                    <div className="CardItem One">
                        <div className="Foreground">
                            <h4>El Mirador</h4>
                            <button>
                                ir
                            </button>
                        </div>
                    </div>

                    <div className="CardItem Two">
                        <div className="Foreground">
                            <h4>Zonas de descanso</h4>
                            <button>
                                ir
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}
