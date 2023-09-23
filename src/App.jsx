import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import ContactsUs from "./components/COntactsUs";
function App() {
  return (
    <div>
    <div>
    </div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-form" element={<ContactsUs/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
