import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'; 
import InstagramIcon from "@mui/icons-material/Instagram";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeNav}>
          Batistack Development
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNav}>
        <div className={`icon ${isNavOpen ? 'open' : ''}`}></div>
      </button>
      <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={closeNav}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-form" onClick={closeNav}>
              Contact Us
            </Link>
          </li>
        </ul>
      <div>
      <a href="https://www.instagram.com/bati.stack/" className="instagram-icon">Instagram
              <InstagramIcon fontSize="large" />{" "}
            </a>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;


