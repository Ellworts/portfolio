import './header.scss';
import profilePic from '../../media/png/my-photo.jpg';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <ul id="header-list">
          <li><a href="/" className='header-buttons'>about</a></li>
          <li><a href="/" className='header-buttons'>portfolio</a></li>
          <li><a href="https://linktr.ee/ellworts" target="_blank" rel="noreferrer" className='header-buttons'>contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
