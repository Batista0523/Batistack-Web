import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-form" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
