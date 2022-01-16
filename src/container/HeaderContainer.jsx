import React, { Component } from 'react';

import './style/HeaderContainer/HeaderContainerMobile.css';

export default class HeaderContainer extends Component {
    
    constructor(props){
        super(props);
        this.root = React.createRef();
    }
    
    getRoot(){
        return this.root.current;
    }
  

    render() {
        return (
            <header ref={this.root} className="HeaderContainer NonHero">
                    <button className="Logo"> <span></span> </button>
                    <button className="Menu"> <span></span> </button>                              
            </header>
        );
    }
}


