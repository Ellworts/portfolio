import React, { useEffect } from 'react';
import Kursor from 'kursor';
import AudioPlayer from "./stuff/audio/AudioPlayer";
import Header from "./stuff/header/header";
import Title from "./stuff/title-section/title";

const CustomCursor = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const kursor = new Kursor({
      type: 3,
      removeDefaultCursor: true, 
      color: '#76ABAE',
    });

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
