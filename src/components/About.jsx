import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <p>This is the About page content.</p>
      <Link to="/">Go back to Home</Link>
      <Link to="/services">Go to Services</Link>
      <Link to="/projects">Go to Projects</Link>
    </div>
  );
};

export default About;
