import React from 'react';
import EventCard from '../components/EventCard';

const eventsData = [
  {
    id: 'hackathon',
    title: 'THE PORTAL HACK',
    description: 'A 24-hour hackathon to close the gate. Build solutions that defy reality.',
    icon: '💻'
  },
  {
    id: 'coding',
    title: 'CODE FROM THE VOID',
    description: 'Solve algorithmic challenges from the upside down before time runs out.',
    icon: '⚡'
  },
  {
    id: 'quiz',
    title: 'MIND FLAYER CHALLENGE',
    description: 'Test your knowledge against the hive mind. Only the sharpest survive.',
    icon: '🧠'
  },
  {
    id: 'paper',
    title: 'RESEARCH FROM THE RIFT',
    description: 'Present your findings on anomalous technologies and theoretical horrors.',
    icon: '📄'
  },
  {
    id: 'debugging',
    title: 'ESCAPE THE GLITCH',
    description: 'Debug the system to find the escape key. The code is rotting.',
    icon: '🐛'
  }
];

const Events = () => {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <h1 className="glitch" data-text="MISSION LOGS" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px', color: 'var(--color-neon-red)' }}>MISSION LOGS</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {eventsData.map((event) => (
          <EventCard 
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            icon={event.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
