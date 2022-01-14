
import './App.css';

import HeaderContainer from './container/HeaderContainer';
import HeroSection from './sections/HeroSection';

import OnBoardingSection from './sections/OnBoardingSection';

import WhatIsSection from './sections/WhatIsSection';

import GabiAndSofiSection from './sections/GabiAndSofiSection';

import EventAndMoreSection from './sections/EventAndMoreSection';

import BeginActionsSection from './sections/BeginActionsSection';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HeroSection />
      <OnBoardingSection />
      <WhatIsSection />
      <GabiAndSofiSection />
      <EventAndMoreSection />
      <BeginActionsSection />
    </div>
  );
}

export default App;
