import React from "react";
import servicesData from "../data/servicesData";
import "./services.css";

const Services = () => {
  const aboutServices = servicesData.filter((item) => item.about);
  const groupedServices = aboutServices.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return (
    <div className="container services">
      <h1 className="features-title">Our Services</h1>
      {groupedServices.map((row, rowIndex) => (
        <div key={rowIndex} className="row features-row">
          {row.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card features-card">
                <div className="card-body features-content">
                  <h3 className="features-heading">{service.about.title}</h3>
                  <p className="features-description">
                    {service.about.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Services;
