import React, { Component } from 'react';

import './style/ExpoContainerMobile.css';

export default class ExpoContainer extends Component {
    render() {
        return (
            <div className="ExpoContainer">
                
                <div className="DecoratedImage One"></div>
                <div className="DecoratedImage Two"></div>
                <div className="DecoratedImage Three"></div>

                <h3>Exhibiciones</h3>
                    
                    <div className="CardItem One">
                        
                            <h4>Recibidor</h4>
                            <button>
                                ir
                            </button>
                        <div className="DecoratedImage">
                        </div>
                    </div>

                    <div className="CardItem Two">
                        
                            <h4>Historia del Palacio</h4>
                            <button>
                                ir
                            </button>
                            <div className="DecoratedImage">
                            </div>
                    </div>

                    <div className="CardItem Three">
                        
                            <h4>Muebles</h4>
                            <button>
                                ir
                            </button>
                        <div className="DecoratedImage">
                        </div>
                    </div>

                    <div className="CardItem Four">
                        
                        <h4>Atrapasueños</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

                <div className="CardItem Five">
                        
                        <h4>Baño Museable</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

                <div className="CardItem Six">
                        
                        <h4>Artes Visuales</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

                <div className="CardItem Seven">
                        
                        <h4>Musica</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

                <div className="CardItem Eight">
                        
                        <h4>Artesania</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

                <div className="CardItem Nine">
                        
                        <h4>El Corredor del Servicio</h4>
                        <button>
                            ir
                        </button>
                    <div className="DecoratedImage">
                    </div>
                </div>

            </div>
        );
    }
}
