import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(handleSubmit)
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
       
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name} 
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} 
          onChange={handleChange}
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message} 
          onChange={handleChange}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
