import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Importing the new components for Volunteering and Other Experiences from /pages
import Volunteering from './pages/Volunteering';
import OtherExperiences from './pages/OtherExperiences';

// Importing component-specific styles
import './App.css';
import './components/Header.css';
import './components/Navbar.css';
import './components/Footer.css';
import './pages/Home.css';
import './pages/About.css';
import './pages/Volunteering.css';  // Importing the CSS for Volunteering from /pages
import './pages/OtherExperiences.css';  // Importing the CSS for Other Experiences from /pages

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