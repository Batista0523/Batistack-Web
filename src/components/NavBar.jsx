import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import img1 from "../img/logo.jpg";

const NavBar = () => {
  return (
    <div className="together">
      <img className="img1" src={img1} alt="" />
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
