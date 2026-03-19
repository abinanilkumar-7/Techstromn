import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventCard.css';

const EventCard = ({ id, title, description, icon }) => {
  return (
    <div className="event-card" data-aos="flip-left">
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title glitch" data-text={title}>{title}</h3>
        <p className="card-desc">{description}</p>
        <Link to={`/events/${id}`} className="btn-details">VIEW MISSION</Link>
      </div>
    </div>
  );
};

export default EventCard;
