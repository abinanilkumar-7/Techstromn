import React from 'react';
import '../styles/Schedule.css';

const scheduleData = [
  { time: '09:00 AM', event: 'THE GATE OPENS (Inauguration)', description: 'Welcome address by the cryptic council.' },
  { time: '10:00 AM', event: 'THE PORTAL HACK (Hackathon Starts)', description: 'Teams enter the coding dimension.' },
  { time: '11:00 AM', event: 'RESEARCH FROM THE RIFT (Paper Presentation)', description: 'Unveiling forbidden knowledge.' },
  { time: '01:00 PM', event: 'REFUEL (Lunch Break)', description: 'Sustenance for the journey.' },
  { time: '02:00 PM', event: 'MIND FLAYER CHALLENGE (Quiz)', description: 'Battle of wits against the hive mind.' },
  { time: '03:30 PM', event: 'ESCAPE THE GLITCH (Debugging)', description: 'Find the anomaly before it spreads.' },
  { time: '05:00 PM', event: 'CLOSING THE GATE (Valedictory)', description: 'Awards and sealing the rift.' }
];

const Schedule = () => {
  return (
    <div className="container schedule-container">
      <h1 className="glitch page-title" data-text="TIMELINE OF EVENTS">TIMELINE OF EVENTS</h1>
      
      <div className="timeline">
        {scheduleData.map((item, index) => (
          <div key={index} className="timeline-item" data-aos="fade-left" data-aos-delay={index * 100}>
            <div className="timeline-dot"></div>
            <div className="timeline-content box-glow">
              <span className="time">{item.time}</span>
              <h3 className="event-title">{item.event}</h3>
              <p className="event-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
