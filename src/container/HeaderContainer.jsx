import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/HeaderContainer/HeaderContainerMobile.css';
import './style/HeaderContainer/HeaderContainerMobileMediaQuery.css';

export default class HeaderContainer extends Component {
    
    constructor(props){
        super(props);
        this.root = React.createRef();
        this.state = {isOpen : false};
    }
    
    getRoot(){
        return this.root.current;
    }
  

    onOpen = ()=> this.setState({isOpen : true});
    onClose = ()=> this.setState({isOpen : false});


    render() {

        let isOpen = (this.state.isOpen) ? "Open" : "Closed";

        return (
            <header ref={this.root} className="HeaderContainer NonHero">
                    <Link to="/" className="Logo"> <span></span> </Link>
                    <button className="Menu" onClick={this.onOpen}> <span></span> </button>   

                    <nav className={`Modal ${isOpen}`}>
                        <button onClick={this.onClose}>X</button>
                        <ul>
                            <li><Link to="/" onClick={this.onClose}>Home</Link></li>
                            <li><Link to="/recorridoVirtual" onClick={this.onClose}>Recorrido Virtual</Link></li>
                            <li><Link to="" >Reservas</Link></li>
                            <li><Link to="" >Contacto</Link></li>
                        </ul>
                        <div className="DecoratedImage"></div>
                    </nav>

            </header>
        );
    }
}


