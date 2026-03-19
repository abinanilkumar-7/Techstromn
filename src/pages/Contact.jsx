import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="container contact-container">
      <h1 className="glitch page-title" data-text="ESTABLISH CONNECTION">ESTABLISH CONNECTION</h1>
      
      <div className="contact-grid">
        <form className="contact-form box-glow" data-aos="fade-right">
          <h2>SEND A SIGNAL</h2>
          <input type="text" placeholder="Your Frequency (Name)" className="gleam-input" />
          <input type="email" placeholder="Communication Channel (Email)" className="gleam-input" />
          <textarea placeholder="Encrypted Message..." rows="5" className="gleam-input"></textarea>
          <button className="btn btn-send">TRANSMIT</button>
        </form>
        
        <div className="contact-info" data-aos="fade-left">
          <h2>BASE COORDINATES</h2>
          <div className="info-item">
            <span className="icon">📍</span>
            <p>Department of Computer Science,<br/>Techstrom Hall, Block 11</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p>symposium@dept.edu</p>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.407954932064!2d77.94290748119022!3d14.650228743588972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b0b13555555%3A0x6280455555555555!2sCollege%20Name!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
