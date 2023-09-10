import React from "react";
import "./service.css";
import servicesData from "../data/servicesData";

const Services = () => {

  const aboutServices = servicesData.filter((item) => item.about);

  return (
    <div className="services">
      <h2>Our Services</h2>
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
