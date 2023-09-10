import React from "react";
import "./portfolio.css";
import servicesData from "../data/servicesData";

const Projects = () => {
  
  const projects = servicesData.filter((item) => item.projects);

  return (
    <div className="portfolio">
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a
              href={project.projects.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.projects.title}
            </a>
            <p>{project.projects.description}</p>
            <p>Creators: {project.projects.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
