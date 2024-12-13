import React, { useState } from 'react';
import './header.scss';
import profilePic from '../../media/png/my-photo.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
          <li>
            <button className="header-buttons" onClick={toggleModal}>about</button>
          </li>
          <li>
            <a href="https://github.com/Ellworts" target="_blank" rel="noreferrer" className="header-buttons">
              Github
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/ellworts" target="_blank" rel="noreferrer" className="header-buttons">
              contact
            </a>
          </li>
        </ul>
        <a href="https://linktr.ee/ellworts" className="profile-pic-link" target="_blank" rel="noreferrer">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </a>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>About Me</h2>
            <p>Hi! I'm a <span className="fw600">Frontend Developer</span> with nearly 2 years of experience specializing in building modern and responsive web applications. Proficient in TypeScript, React, and familiar with Angular at a basic level. Experienced with build tools like Vite, as well as technologies like HTML5, CSS, and Sass. Skilled in working with TailwindCSS and animation libraries such as AOS. Confident in using version control systems (Git), npm, and possess basic knowledge of MySQL for database interactions. Committed to continuous learning and further development in frontend development.</p>

            <button className="close-button" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
