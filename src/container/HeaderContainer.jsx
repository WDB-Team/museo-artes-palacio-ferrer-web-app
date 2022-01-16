import React, { Component } from 'react';

import './style/HeaderContainer/HeaderContainerMobile.css';

export default class HeaderContainer extends Component {
    
    constructor(props){
        super(props);
        this.root = React.createRef();
        this.heroRef = this.props.heroRef;
    }
    
    getRoot(){
        return this.root.current;
    }
    
    onObserver = (entries,observer)=>{

        let intersecting = entries.filter((elem)=>elem.isIntersecting);
        let notIntersecting = entries.filter((elem)=>!(elem.isIntersecting));


        if(intersecting.length > 0)
        {
          
            this.getRoot().classList.remove("NonHero");
            this.getRoot().classList.add("OnHero");
           
        }
        if(notIntersecting.length > 0)
        {
            
            this.getRoot().classList.remove("OnHero");
            this.getRoot().classList.add("NonHero");
        }
    }

    render() {
        return (
            <header ref={this.root} className="HeaderContainer NonHero">
                    <button className="Logo"> <span></span> </button>
                    <button className="Menu"> <span></span> </button>                              
            </header>
        );
    }

    componentDidMount(){
        let intersectionObserver = new IntersectionObserver(this.onObserver,{threshold : 0.5 });
        if(this.heroRef.current != undefined){
            intersectionObserver.observe(this.heroRef.current.getHeroSectionRef().getRoot());
        }
    }
}


