import React from 'react';
import './title.scss';

import cardImage1 from '../../media/projects/kickstarter.png';
import cardImage2 from '../../media/projects/met.png';
import cardImage3 from '../../media/projects/2048.png';
import cardImage4 from '../../media/projects/MnC.png';
import cardImage5 from '../../media/projects/rizni-rivni.png';

function TitleBG() {
  return (
    <div className="sky-container">
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
    </div>
  );
}

const cardData = [
  { id: 1, title: 'Kickstarter', imageUrl: cardImage1, link: 'https://ellworts.github.io/kickstarter/' },
  { id: 2, title: 'MET Museum', imageUrl: cardImage2, link: 'https://ellworts.github.io/landing-page/' },
  { id: 3, title: '2048 Web Game', imageUrl: cardImage3, link: 'https://ellworts.github.io/2048/' },
  { id: 4, title: 'M&C Steakhouse', imageUrl: cardImage4, link: 'https://ellworts.github.io/mnc-page/' },
  { id: 5, title: 'Rizni-Rivni (coming soon)', imageUrl: cardImage5 },
];

function Title() {
  return (
    <div className="title">
      <h1 className='welcome'>
        <div className="welcome-text">Welcome</div>
        <div className="space-text">
          to my <span className="creative">creative</span> <span className="space">space!</span>
        </div>
      </h1>
      <TitleBG />
      <div className="card-list">
        {cardData.map((card) => (
          <a href={card.link} target="_blank" rel="noopener noreferrer" className="card" key={card.id}>
            <div
              className="card-background"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            />
            <div className="card-title">{card.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Title;
