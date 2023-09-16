import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"


const NavBar = () => {
  return (
    <div className='together'>
      <h1 className="title_app">Batistack Development Corp.</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
