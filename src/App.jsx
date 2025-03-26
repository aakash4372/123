import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const FullpageWrapper = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'} // Get from https://alvarotrigo.com/fullPage/
    scrollingSpeed={1000}
    navigation
    navigationPosition="right"
    anchors={['home', 'about', 'contact']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomeSection />
          <AboutSection />
          <ContactSection />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <FullpageWrapper />
    </div>
  );
}

export default App;