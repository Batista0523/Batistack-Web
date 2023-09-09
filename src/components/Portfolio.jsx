import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const porfolioData = [
    {
      title: "Youtube Clone",
      description:
        "This app allows you to search videos using the Youtube API.",
      projectLink: "https://main--velvety-sundae-768c66.netlify.app/",
      creator: "Elisaul Batista, Erick Tolentino"
    },
    {
      title: "Student Dashboard",
      description:
        "This app allows you to display a list of students with essential information and features.",
      projectLink: "https://fastidious-pasca-edcf37.netlify.app",
      creator: "Elisaul Batista"
    },
  ];
  return (
    <div className="portfolio">
      <h2>Our Projects</h2>
      <div className="project-list">
        {porfolioData.map((project, index) => (
          <div className="project" key={index}>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <p>{project.description}</p>
            <p>Creators: {project.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
