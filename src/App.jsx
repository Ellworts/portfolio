/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Kursor from 'kursor';
import AudioPlayer from "./stuff/audio/AudioPlayer";
import Header from "./stuff/header/header";
import Title from "./stuff/title-section/title";

const CustomCursor = () => {
  useEffect(() => {
    const isTouchDevice = () => {
      return window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window;
    };

    if (!isTouchDevice()) {
      const kursor = new Kursor({
        type: 3,
        removeDefaultCursor: true, 
        color: '#76ABAE',
      });
    }

  }, []);

  return null;
};

function App() {
  return (
    <div>
      <CustomCursor />
      <AudioPlayer />
      <Header />
      <Title />
    </div>
  );
}

export default App;
