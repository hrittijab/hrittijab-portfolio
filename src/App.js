import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Volunteering from './pages/Volunteering';
import OtherExperiences from './pages/OtherExperiences';

import './App.css';
import './components/Header.css';
import './components/Navbar.css';
import './components/Footer.css';
import './pages/Home.css';
import './pages/About.css';
import './pages/Volunteering.css';  
import './pages/OtherExperiences.css';  

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <div id="About">
        <About /> {/* About section */}
      </div>
      <div id="Portfolio">
        <Portfolio /> {/* Portfolio section */}
      </div>
      <div id="Volunteering">
        <Volunteering /> {/* Volunteering section */}
      </div>
      <div id="OtherExperiences">
        <OtherExperiences /> {/* Other Experiences section */}
      </div>
      <div id="Contact">
        <Contact /> {/* Contact section */}
      </div>
      <Footer />
    </div>
  );
}

export default App;