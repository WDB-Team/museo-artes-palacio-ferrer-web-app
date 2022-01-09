
import './App.css';

import HeaderContainer from './container/HeaderContainer';
import HeroSection from './sections/HeroSection';
import OnBoardingSection from './sections/OnBoardingSection';
import WhatIsSection from './sections/WhatIsSection';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HeroSection />
      <OnBoardingSection />
      <WhatIsSection />
    </div>
  );
}

export default App;
