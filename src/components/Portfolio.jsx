import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const porfolioData = [
    {
      title: "Student Dashboard",
      description:
        "This app allows you to display a list of students with essential information and features including",
      projectLink: "https://fastidious-pasca-edcf37.netlify.app",
    },
  ];
  return (
    <div className="portfolio">
      <h2>Our Porfolio</h2>
      <div className="project-list">
        {porfolioData.map((project, index) => (
          <div className="project" key={index}>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener norefferer"
            >
              Student Project
            </a>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
