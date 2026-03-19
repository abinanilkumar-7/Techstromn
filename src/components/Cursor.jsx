import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const section = document.querySelector('body');
    
    const addEventListeners = () => {
        document.addEventListener("mousemove", mMove);
        document.addEventListener("mouseenter", mEnter);
        document.addEventListener("mouseleave", mLeave);
        document.addEventListener("mousedown", mDown);
        document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", mMove);
        document.removeEventListener("mouseenter", mEnter);
        document.removeEventListener("mouseleave", mLeave);
        document.removeEventListener("mousedown", mDown);
        document.removeEventListener("mouseup", mUp);
    };

    const mMove = (el) => {
        setPosition({ x: el.clientX, y: el.clientY });
    };

    const mEnter = () => {
        setHidden(false);
    };

    const mLeave = () => {
        setHidden(true);
    };

    const mDown = () => {
        setClicked(true);
    };

    const mUp = () => {
        setClicked(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <div 
        className={`cursor ${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
