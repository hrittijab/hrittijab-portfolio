import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Importing component-specific styles
import './components/Header.css';
import './components/Navbar.css';
import './components/Footer.css';
import './pages/Home.css';
import './pages/About.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
