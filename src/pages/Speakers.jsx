import React from 'react';
import '../styles/Speakers.css';

const speakersData = [
  { name: 'Dr. Brenner', role: 'Lab Director', topic: 'Experiments in neural networks' },
  { name: 'Mr. Clarke', role: 'Chief Scientist', topic: 'Curiosity doors: Opening new dimensions' },
  { name: 'Dr. Owens', role: 'Containment Specialist', topic: 'Managing catastrophic system failures' }
];

const Speakers = () => {
  return (
    <div className="container speakers-container">
      <h1 className="glitch page-title" data-text="THE SPEAKERS">THE SPEAKERS</h1>
      
      <div className="speakers-grid">
        {speakersData.map((speaker, index) => (
          <div key={index} className="speaker-card" data-aos="flip-right" data-aos-delay={index * 200}>
            <div className="card-inner">
              <div className="card-front">
                <div className="speaker-img"></div>
                <h3>{speaker.name}</h3>
                <p className="role">{speaker.role}</p>
              </div>
              <div className="card-back">
                <h3>TOPIC:</h3>
                <p>{speaker.topic}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
