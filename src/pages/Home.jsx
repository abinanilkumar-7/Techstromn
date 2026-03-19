import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-50px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-neon-red)', marginBottom: '20px' }} data-aos="fade-up">THE GATE OPENS IN</h2>
          <Countdown />
        </div>

        <section id="about-preview" data-aos="fade-up">
          <h2 className="glitch" data-text="WHAT IS TECHSTROM 26?" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--color-white)', marginBottom: '30px', textAlign: 'center' }}>WHAT IS TECHSTROM 26?</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
            A journey into the unknown. A symposium where technology meets the void. Join us for a day of coding, gaming, and exploration into the digital abyss.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
