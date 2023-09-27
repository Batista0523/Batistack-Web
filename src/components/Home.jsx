import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 p-1">
          <h3 className="display-4">Batistack Development</h3>
          <p className="lead">
            Crafting Digital Dreams, Amplifying Your Vision
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="home">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  Welcome to our platform dedicated to crafting bespoke projects
                  for frontend software engineers. Elevate your digital presence
                  with our expert team proficient in JavaScript, HTML, CSS, and
                  React. We specialize in creating captivating web experiences,
                  ensuring seamless user interactions and visually stunning
                  designs. Let us turn your vision into a polished reality that
                  resonates with your target audience. Empower your brand with
                  our expertise, delivering innovative solutions that drive
                  success in the ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <p className="card-text">
                  Our team is committed to bringing your ideas to life. We
                  believe in the power of collaboration and iterate through
                  feedback to deliver the best results. We stay updated with the
                  latest technologies and trends to ensure your projects are
                  modern and future-proof.
                </p>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <p className="card-text">
                  Whether you're starting a new venture or looking to enhance
                  your existing platform, we're here to help you succeed. Join
                  our growing community of satisfied clients and let's create
                  something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features">
            <div className="features-content">
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
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="why-choose-us">
            <div className="text-center">
              <h2 className="mb-4">Why Choose Us</h2>
              <p className="mb-4">
                We are dedicated to providing exceptional web solutions that are
                tailored to your unique needs. Here's why you should choose us:
              </p>
              <ul>
                <li>Expertise in cutting-edge technologies</li>
                <li>Highly skilled and collaborative team</li>
                <li>Customized solutions for your business</li>
                <li>Timely project delivery and updates</li>
                <li>Custom Web Development</li>
                <li>User Experience Design</li>
                <li>Expertise in cutting-edge technologies</li>
                <li>Highly skilled and collaborative team</li>
                <li>Customized solutions for your business</li>
                <li>Timely project delivery and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="testimonials">
            <div className="text-center">
              <h2 className="mb-4">What Our Clients Say</h2>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "Working with Batistack Development has been a game-changer
                  for our business. Their attention to detail and technical
                  expertise is unparalleled."
                </p>
                <p className="testimonial-author">- Jarlin Batista</p>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "The team at Batistack Development truly understands our
                  vision and translates it into stunning, functional websites.
                  We highly recommend their services."
                </p>
                <p className="testimonial-author">- Winder Marte</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="cta">
            <div className="text-center">
              <h2 className="mb-4">Ready to Elevate Your Projects?</h2>
              <p className="mb-4">
                Elevate your business with a stunning online presence. Our
                expert team, proficient in modern web technologies including
                JavaScript, HTML, CSS, and React, is here to craft tailored
                projects that showcase your business at its best.
              </p>
              <Link to="contact-form">
                <button className="btn btn-cta">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
