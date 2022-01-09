import React, { Component } from 'react';

import './style/HeaderContainer/HeaderContainerMobile.css';

export default class HeaderContainer extends Component {
    render() {
        return (
            <div className="HeaderContainer">
                    <button className="Logo"> <span></span> </button>
                    <button className="Menu"> <span></span> </button>                              
            </div>
        );
    }
}
