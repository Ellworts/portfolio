import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './AudioPlayer.scss';

// #region tracklist
import track1 from './tracklist/track1.mp3';
import track2 from './tracklist/track2.mp3';
import track3 from './tracklist/track3.mp3';
import track4 from './tracklist/track4.mp3';
import track5 from './tracklist/track5.mp3';
import track6 from './tracklist/track6.mp3';
import track7 from './tracklist/track7.mp3';
import track8 from './tracklist/track8.mp3';
import track9 from './tracklist/track9.mp3';
import track10 from './tracklist/track10.mp3';
import track11 from './tracklist/track11.mp3';
import track12 from './tracklist/track12.mp3';
import track13 from './tracklist/track13.mp3';
import track14 from './tracklist/track14.mp3';
import track15 from './tracklist/track15.mp3';
// #endregion

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.65);
  const playerRef = useRef(null);

  const tracks = [track1, track2, track3, track4, track5, track6, track7, track8, track9, track10, track11, track12, track13, track14, track15];
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const getRandomTrackIndex = () => {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(randomIndex);
    };

    getRandomTrackIndex();
  }, [tracks.length]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="audio-player">
      <ReactPlayer
        ref={playerRef}
        url={tracks[currentTrackIndex]}
        playing={isPlaying}
        volume={volume}
        controls={false}
        width="100%"
        height="50px"
        style={{ display: 'none' }}
      />
      <button
        onClick={togglePlayPause}
        className={isPlaying ? 'pause' : 'play'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path>
              <path d="m9 7.5l8 4.5l-8 4.5z"></path>
            </g>
          </svg>
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </div>
  );
};

export default AudioPlayer;
