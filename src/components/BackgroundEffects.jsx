import React, { useState, useEffect, useRef } from 'react';
import '../styles/BackgroundEffects.css';

const BackgroundEffects = () => {
  const [lightning, setLightning] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);

  // Lightning Effect
  useEffect(() => {
    const triggerLightning = () => {
      setLightning(true);
      setTimeout(() => setLightning(false), 200); // Quick flash
      
      // Schedule next flash (random 20-40s)
      const nextFlash = Math.random() * (40000 - 20000) + 20000;
      setTimeout(triggerLightning, nextFlash);
    };

    const initialTimer = setTimeout(triggerLightning, 5000); // First flash after 5s
    return () => clearTimeout(initialTimer);
  }, []);

  // Audio Control
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setAudioEnabled(!audioEnabled);
    }
  };

  return (
    <>
      {/* Lightning Overlay */}
      <div className={`lightning-overlay ${lightning ? 'active' : ''}`}></div>
      
      {/* Sound Control */}
      <div className="sound-control" onClick={toggleAudio}>
        {audioEnabled ? '🔊 SOUND ON' : '🔇 SOUND OFF'}
      </div>
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-hum-ambience-2940.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default BackgroundEffects;
