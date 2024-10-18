import React, { useState } from 'react';
import './header.scss';
import profilePic from '../../media/png/my-photo.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="burger" onClick={toggleMenu}>
          <span className={`burger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-bar ${menuOpen ? 'open' : ''}`}></span>
        </div>
        <ul id="header-list" className={menuOpen ? 'open' : ''}>
          <li><a href="/" className='header-buttons'>about</a></li>
          <li><a href="/" className='header-buttons'>portfolio</a></li>
          <li><a href="https://linktr.ee/ellworts" target="_blank" rel="noreferrer" className='header-buttons'>contact</a></li>
        </ul>
        <a href="https://linktr.ee/ellworts" className="profile-pic-link"  target="_blank" rel="noreferrer"> 
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </a>
      </div>
    </header>
  );
}

export default Header;
