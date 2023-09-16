import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import "./projects.css";

const Projects = () => {
  const projects = servicesData.filter((item) => item.projects);

  return (
    <div className="portfolio">
      <h2 className="home-link">Our Projects</h2>
      <Link to="/">Go back to Home</Link>
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
