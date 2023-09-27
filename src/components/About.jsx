import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <p>
        Welcome to Batistack Development, where innovation meets creativity.
        We're a team of dedicated full-stack developers and designers passionate
        about crafting exceptional digital experiences for your projects.
      </p>
      <p>
        Our journey began with a vision to transform ideas into reality. We
        believe in pushing boundaries, embracing challenges, and delivering
        outstanding solutions tailored to your needs. Specializing in modern web
        technologies, including JavaScript, HTML, CSS, and React, we create
        stunning web applications.
      </p>
      <p>
        
        At Batistack, we pride ourselves on building long-term relationships
        based on trust and reliability. Our commitment is to provide you with
        cutting-edge solutions that drive your success and leave a lasting
        impact on your audience.
      </p>
      <div className="ceo-info">
        <h3>Meet Our CEO: Elisaul Batista</h3>
        <p>
          Elisaul Batista is a visionary leader with a passion for technology
          and innovation. With years of experience in the tech industry, he
          founded Batistack Development with the mission to revolutionize the
          digital landscape.
        </p>
        <p>
          Connect with Elisaul on{" "}
          <a
            href="https://github.com/Batista0523"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/elisaul-batista/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          Or Reach out via <a href="mailto:elisaulbatista@pursuit.org">Email</a>
        </p>
      </div>
      <div className="additional-info">
        <div className="additional-info">
          <h3>Our Team</h3>
          <p>
            We are a dedicated team of full-stack developers and designers who
            are passionate about creating outstanding digital experiences for
            your projects. With a focus on innovation and excellence, we strive
            to deliver solutions that meet and exceed your expectations.
          </p>
          <p>
            Our team is committed to staying updated with the latest
            technologies and trends in the industry. We embrace challenges and
            are driven by a collaborative spirit, working closely with you to
            understand your vision and bring it to life.
          </p>
          <p>
            Building relationships based on trust and transparency is at the
            core of our values. We believe in open communication and timely
            delivery, ensuring a smooth and successful journey throughout your
            project development.
          </p>
          <p>
            We look forward to being a part of your success story and
            contributing to your growth in the digital landscape.
          </p>
        </div>
        <h3>Our Values</h3>
        <ul className="value-list">
          <li>Customer satisfaction is our top priority.</li>
          <li>We believe in continuous learning and improvement.</li>
          <li>Transparency and open communication with our clients.</li>
          <li>Attention to detail and precision in our work.</li>
          <li>Adaptability to the ever-evolving tech landscape.</li>
        </ul>

        <Link to="/contact-form">
          <button className="btn btn-cta">
            Start Building the Design Your Project Needs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
