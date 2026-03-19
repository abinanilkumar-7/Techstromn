import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/EventDetails.css';

const eventDetailsData = {
  hackathon: {
    title: 'THE PORTAL HACK',
    description: 'A 24-hour hackathon where teams must build innovative solutions to close the interdimensional gate. Themes include AI, Blockchain, and Cybersecurity.',
    rules: ['Team size: 2-4 members', 'No pre-written code', 'Bring your own laptops'],
    prize: '₹10,000 + Exclusive Merch',
    contact: 'Mike: 9876543210'
  },
  coding: {
    title: 'CODE FROM THE VOID',
    description: 'A competitive coding contest. Solvers must optimize algorithms to decrypt messages from the upside down.',
    rules: ['Individual participation', '2 hours duration', 'Languages: C++, Java, Python'],
    prize: '₹5,000',
    contact: 'Dustin: 8765432109'
  }
  // Add other events as needed, ensuring fallback for demo
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetailsData[id] || {
    title: 'UNKNOWN SIGNAL',
    description: 'The requested mission data is corrupted or does not exist.',
    rules: [],
    prize: 'N/A',
    contact: 'N/A'
  };

  return (
    <div className="container details-container">
      <Link to="/events" className="back-link">← BACK TO MISSIONS</Link>
      
      <div className="details-card box-glow" data-aos="zoom-in">
        <h1 className="glitch event-title-large" data-text={event.title}>{event.title}</h1>
        
        <div className="details-section">
          <h3>MISSION BRIEF</h3>
          <p>{event.description}</p>
        </div>
        
        <div className="details-grid">
          <div className="details-section">
             <h3>PROTOCOLS (RULES)</h3>
             <ul>
               {event.rules.length > 0 ? event.rules.map((rule, idx) => <li key={idx}>{rule}</li>) : <li>Data Corrupted</li>}
             </ul>
          </div>
          
          <div className="details-section">
            <h3>BOUNTY (PRIZE)</h3>
            <p className="prize-text">{event.prize}</p>
          </div>
          
          <div className="details-section">
            <h3>CONTACT</h3>
            <p>{event.contact}</p>
          </div>
        </div>
        
        <Link to="/register" className="btn btn-register-large">ACCEPT MISSION</Link>
      </div>
    </div>
  );
};

export default EventDetails;
