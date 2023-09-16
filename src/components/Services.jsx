import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import "./service.css";

const Services = () => {
  const aboutServices = servicesData.filter((item) => item.about);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-link">
        <Link to="/">Home</Link>
      </div>
      <div className="services-list">
        {aboutServices.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.about.title}</h3>
            <p>{service.about.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
