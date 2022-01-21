import React, { Component } from 'react';

import IntroRecorridoContainer from './../container/IntroRecorridoContainer';

export default class RecorridoVirtual extends Component {
    render() {
        return (
            <React.Fragment>
                <IntroRecorridoContainer />
            </React.Fragment>
        );
    }

    componentDidMount(){
        document.querySelector("html").scrollTo(0,0);
    }

}

