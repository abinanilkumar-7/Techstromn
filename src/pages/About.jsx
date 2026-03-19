import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="story-section" data-aos="fade-up">
        <div className="container">
          <h1 className="glitch page-title" data-text="THE ORIGIN STORY">THE ORIGIN STORY</h1>
          <div className="story-text">
            <p>
              It began as a whisper in the static. A line of code that shouldn't exist. 
              The Department of Computer Science has opened a rift to the digital unknown.
            </p>
            <p>
              We are not just hosting a symposium; we are documenting the anomaly. 
              Only the brave dare to compile the forbidden source.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">OUR MISSION</h2>
          <div className="mission-content">
             To explore the boundaries of technology, creativity, and the uncanny. 
             To debug reality itself.
          </div>
        </div>
      </section>

      <section className="committee-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">THE KEEPERS (COMMITTEE)</h2>
          <div className="committee-grid">
            {['Prof. Dustin', 'Dr. Lucas', 'Ms. Max', 'Mr. Mike'].map((name, index) => (
              <div key={index} className="committee-member" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="member-avatar"></div>
                <h3>{name}</h3>
                <p>Chief Officer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
