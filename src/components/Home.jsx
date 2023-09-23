import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <p>
        Welcome to our platform dedicated to crafting bespoke projects for
        frontend software engineers. Elevate your digital presence with our
        expert team proficient in JavaScript, HTML, CSS, and React. We
        specialize in creating captivating web experiences, ensuring seamless
        user interactions and visually stunning designs. Let us turn your vision
        into a polished reality that resonates with your target audience.
        Empower your brand with our expertise, delivering innovative solutions
        that drive success in the ever-evolving digital landscape.
      </p>
      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Custom Web Development</li>
          <li>User Experience Design</li>
          <li>Responsive and Mobile-First Design</li>
          <li>Single Page Applications (SPAs)</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>Frontend Frameworks (React, Angular, Vue.js)</li>
          <li>Performance Optimization</li>
          <li>Cross-Browser Compatibility</li>
          <li>Web Accessibility (WCAG Compliance)</li>
          <li>SEO-Friendly Development</li>
          <li>RESTful API Integration</li>
          <li>GraphQL Integration</li>
          <li>State Management (Redux, Mobx)</li>
          <li>Responsive Email Templates</li>
          <li>UI/UX Prototyping</li>
          <li>Interactive Data Visualization</li>
          <li>Web Security and Authentication</li>
          <li>Version Control (Git)</li>
          <li>Frontend Build Tools (Webpack, Babel)</li>
          <li>Continuous Integration (CI/CD)</li>
        </ul>
      </section>
      <section className="cta">
        <h2>Ready to Elevate Your Projects?</h2>
        <p>Join us now and experience the difference.</p>
        <Link to="contact-form">
          <button className="btn">Get Started</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
