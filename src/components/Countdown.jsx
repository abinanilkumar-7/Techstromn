import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Feb 27, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        // Handle expired
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container" data-aos="fade-up">
      <div className="countdown-item">
        <span className="count glitch" data-text={timeLeft.days}>{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="count glitch" data-text={timeLeft.hours}>{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="count glitch" data-text={timeLeft.minutes}>{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="count glitch" data-text={timeLeft.seconds}>{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
