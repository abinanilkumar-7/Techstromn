import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Contact from './pages/Contact';

// Effects
import BackgroundEffects from './components/BackgroundEffects';
import Cursor from './components/Cursor';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app-container">
       <Cursor />
       <BackgroundEffects />
       <Navbar />
       <main>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/events" element={<Events />} />
           <Route path="/events/:id" element={<EventDetails />} />
           <Route path="/schedule" element={<Schedule />} />
           <Route path="/speakers" element={<Speakers />} />
           <Route path="/register" element={<Register />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </main>
       <Footer />
    </div>
  );
}

export default App;
