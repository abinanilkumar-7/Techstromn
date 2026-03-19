import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    event: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration received. Welcome to the upside down.');
    // Logic to send data would go here
  };

  return (
    <div className="container register-container">
      <h1 className="glitch page-title" data-text="JOIN THE SYMPOSIUM">JOIN THE SYMPOSIUM</h1>
      
      <form className="register-form box-glow" onSubmit={handleSubmit} data-aos="fade-up">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Agent Name" />
        </div>
        
        <div className="form-group">
          <label>Email Space</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="contact@upsidedown.com" />
        </div>
        
        <div className="form-group">
          <label>Institute / Base</label>
          <input type="text" name="college" required value={formData.college} onChange={handleChange} placeholder="Hawkins High" />
        </div>
        
        <div className="form-group">
          <label>Select Mission</label>
          <select name="event" required value={formData.event} onChange={handleChange}>
            <option value="">-- Choose your path --</option>
            <option value="hackathon">The Portal Hack</option>
            <option value="coding">Code from the Void</option>
            <option value="quiz">Mind Flayer Challenge</option>
            <option value="paper">Research from the Rift</option>
            <option value="debugging">Escape the Glitch</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-submit">TRANSMIT DATA</button>
      </form>
    </div>
  );
};

export default Register;
