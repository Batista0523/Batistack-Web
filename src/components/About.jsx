import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>
        Discover a world of endless possibilities in frontend software
        engineering with our platform. We are dedicated to crafting exceptional
        projects that push the boundaries of creativity and technology. Our team
        is fueled by the passion to build innovative solutions that redefine the
        digital experience.
      </p>
      <p>
        Embrace the art of coding and design as we specialize in JavaScript,
        HTML, CSS, and React. We believe in the power of seamless user
        interactions and elegant UIs. Let us join you on your journey to create
        web solutions that leave a lasting impression on your users.
      </p>
      <p>
        Your vision is our inspiration, and your success is our priority.
        Explore our services and let's embark on a collaborative adventure in
        the dynamic world of frontend development.
      </p>
      <div className="ceo-info">
        <h3>CEO: Elisaul Batista</h3>
        <a
          href="https://github.com/Batista0523"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/elisaul-batista/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <p>
         {" "}
          <a href="mailto:elisaulbatista@pursuit.org">
            Email
          </a>
        </p>
        <p>
      <a href="https://instagram.com/bati.stack?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </p>
        <p>
   {" "}
    <a href="tel:+19295572527">
     Phone
    </a>
  </p>
      </div>
    </div>
  );
};

export default About;
