import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>This is the About page content.</p>
      <div className="go-home">
        <Link to="/">Home</Link>
      </div>
      <div className="go-service">
        <Link to="/services">Services</Link>
      </div>
      <div className="go-project">
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default About;
