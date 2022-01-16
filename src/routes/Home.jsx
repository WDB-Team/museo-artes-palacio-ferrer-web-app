import React, { Component } from 'react';

import HeroSection from './../sections/HeroSection';
import OnBoardingSection from './../sections/OnBoardingSection';
import WhatIsSection from './../sections/WhatIsSection';
import GabiAndSofiSection from './../sections/GabiAndSofiSection';
import EventAndMoreSection from './../sections/EventAndMoreSection';
import BeginActionsSection from './../sections/BeginActionsSection';

export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.heroSectionRef = React.createRef();
        this.GabiAndSofiSectionRef = React.createRef();
        this.EventSectionRef = React.createRef();
        this.WhatIsSectionRef = React.createRef();

        this.headerRef = props.headerRef;
        
        this.intersectionObserverHero = undefined;
        this.intersectionObserverGAS = undefined;
    }

    getHeroSectionRef(){
        return this.heroSectionRef.current;
    }

    getGabiAndSofiSectionRef(){
        return this.GabiAndSofiSectionRef.current;
    }

    getEventSectionRef(){
        return this.EventSectionRef.current;
    }
    
    getWhatIsSectionRef(){
      return this.WhatIsSectionRef.current;
    }
    

    render() {
        return (
            <React.Fragment>
                <HeroSection ref={this.heroSectionRef} />
                <OnBoardingSection />
                <WhatIsSection ref={this.WhatIsSectionRef} />
                <GabiAndSofiSection ref={this.GabiAndSofiSectionRef} />
                <EventAndMoreSection ref={this.EventSectionRef} />
                <BeginActionsSection />
            </React.Fragment>
        );
    }

    componentDidMount(){
        document.querySelector(".App").scrollTo(0,0);
        this.intersectionObserverHero = new IntersectionObserver(this.onObserver,{threshold : 0.5 });
        this.intersectionObserverHero.observe(this.getHeroSectionRef().getRoot());
 
        this.intersectionObserverGAS = new IntersectionObserver(this.onObserver,{threshold : [0,0.3,0.5,0.7, 0.8] });
        this.intersectionObserverGAS.observe(this.getGabiAndSofiSectionRef().getRoot());
        this.intersectionObserverGAS.observe(this.getWhatIsSectionRef().getRoot());
        this.intersectionObserverGAS.observe(this.getEventSectionRef().getRoot());
    }

    onObserver = (entries,observer)=>{
        
        let intersecting = entries.filter((elem)=>elem.isIntersecting);
        let notIntersecting = entries.filter((elem)=>!(elem.isIntersecting));

        if(intersecting.some((e)=>e.target.className === "HeroSectionContainer")){
            
           

            this.headerRef.current.getRoot().classList.remove("NonHero");
            this.headerRef.current.getRoot().classList.add("OnHero");
           
        } else if(intersecting.some((e)=> (e.target.className === "GabiAndSofiSection" && e.intersectionRatio > 0.7))){
            
           

            this.headerRef.current.getRoot().classList.remove("NonHero");
            this.headerRef.current.getRoot().classList.add("OnGAS");

        }else if(intersecting.some((e)=>e.target.className === "WhatIsSection") && this.headerRef.current.getRoot().classList.contains("OnGAS")){


            this.headerRef.current.getRoot().classList.remove("OnGAS");
            this.headerRef.current.getRoot().classList.add("NonHero");
        
        }else if(notIntersecting.some((e)=>e.target.className === "HeroSectionContainer")){
            
            this.headerRef.current.getRoot().classList.remove("OnHero");
            this.headerRef.current.getRoot().classList.add("NonHero");

        }else if(intersecting.some((e)=>e.target.className === "EventAndMoreSection" && e.intersectionRatio > 0.8) && this.headerRef.current.getRoot().classList.contains("OnGAS")){
            this.headerRef.current.getRoot().classList.remove("OnGAS");
            this.headerRef.current.getRoot().classList.add("NonHero");
            this.headerRef.current.getRoot().classList.add("OnEvent");
        }else if(intersecting.some((e)=>e.target.className === "GabiAndSofiSection") && this.headerRef.current.getRoot().classList.contains("OnEvent")){
            this.headerRef.current.getRoot().classList.add("OnGAS");
            this.headerRef.current.getRoot().classList.remove("NonHero");
            this.headerRef.current.getRoot().classList.remove("OnEvent");
        }

        

        
    }
}
