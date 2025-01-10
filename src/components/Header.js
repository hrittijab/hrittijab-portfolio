import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Hrittija Bhattacharjee</h1>
      <p>Software Developer</p>
      <nav>
        <ul>
          <li><a href="#About">About Me</a></li>  {/* Link to About */}
          <li><a href="#Portfolio">Portfolio</a></li>  {/* Link to Portfolio */}
          <li><a href="#Contact">Contact</a></li>  {/* Link to Contact */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
