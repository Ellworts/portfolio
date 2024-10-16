import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './AudioPlayer.scss';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.55);
  const playerRef = useRef(null);
  const videoId = "https://www.youtube.com/watch?v=jfKfPfyJRdk";

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
        url={videoId}
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
            <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
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
