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
                <li>Animation and Transition Effects</li>
                <li>Optimizing Web Fonts (Loading, Rendering)</li>
                <li>Cross-platform and Cross-device Compatibility</li>
                <li>Responsive Images (srcset, sizes)</li>
                <li>Internationalization (i18n) and Localization (l10n)</li>
                <li>Design System Implementation and Maintenance</li>
                <li>Progressive Enhancement for Core Functionality</li>
                <li>Offline Web App Functionality (Service Workers)</li>
                <li>Accessibility Testing and Compliance (e.g., ARIA)</li>
                <li>Form Validation and User Input Handling</li>
                <li>Code Minification and Bundling</li>
                <li>Frontend Performance Auditing and Optimization</li>
                <li>
                  Memory and Performance Profiling (e.g., Chrome DevTools)
                </li>
                <li>
                  Browser DevTools Utilization for Debugging and Optimization
                </li>
                <li>Responsive Web Design (RWD) for Various Screen Sizes</li>
                <li>Cross-Browser and Cross-Platform Testing</li>
                <li>
                  Implementing SEO Best Practices (meta tags, structured data)
                </li>
                <li>Web App Security Measures (XSS, CSRF, etc.)</li>
                <li>Frontend Build Process Optimization</li>
                <li>Optimizing for High Pixel Density (Retina displays)</li>

                <li>GraphQL Integration</li>
                <li>State Management (Redux, Mobx)</li>
                <li>Responsive Email Templates</li>
                <li>UI/UX Prototyping</li>
                <li>Interactive Data Visualization</li>
                <li>Web Security and Authentication</li>
                <li>Version Control (Git)</li>
                <li>Frontend Build Tools (Webpack, Babel)</li>
                <li>Continuous Integration (CI/CD)</li>
                <li>Web Performance Optimization</li>
                <li>Code Splitting and Lazy Loading</li>
                <li>Responsive Design for Multiple Devices</li>
                <li>Cross-Platform Development</li>
                <li>Progressive Enhancement</li>
                <li>Internationalization and Localization</li>
                <li>Browser DevTools and Debugging</li>
                <li>Responsive Images and Media</li>
                <li>Content Management Systems (CMS) Integration</li>
                <li>Static Site Generators</li>
                <li>Animation and Interaction Design</li>
                <li>Web Caching Strategies</li>
                <li>Frontend Testing (Unit, Integration, E2E)</li>
                <li>Web Performance Auditing and Monitoring</li>
                <li>Web Analytics Integration</li>
                <li>WebSockets and Real-Time Applications</li>
                <li>Offline Support and Service Workers</li>
                <li>Micro Frontends Architecture</li>
                <li>Progressive Enhancement</li>
                <li>Web App Security Best Practices</li>
                <li>Responsive Typography</li>
                <li>Responsive Email Design and Development</li>
                <li>SEO Optimization and On-Page SEO</li>
                <li>A/B Testing and Conversion Rate Optimization (CRO)</li>
                <li>Website Accessibility (ADA Compliance)</li>
                <li>Frontend Build Automation</li>
                <li>Optimized Asset Loading (Images, Fonts, etc.)</li>
                <li>API Integration and Consumption</li>
                <li>Mobile App Integration (Web to Mobile)</li>
                <li>Webhooks and Serverless Integration</li>
                <li>Containerization and Docker</li>
                <li>Progressive Web App (PWA) Features</li>
                <li>Web Scraping and Data Visualization</li>
                <li>Headless CMS Integration</li>
                <li>Web Forms and Data Validation</li>
                <li>Design Systems and Component Libraries</li>
                <li>Error Handling and Logging</li>
                <li>Web Accessibility Testing and Audits</li>
                <li>Real-Time Data Updates (WebSockets, SSE)</li>
                <li>Dynamic Content Generation</li>
                <li>Cross-Platform Testing (Browser Compatibility)</li>
                <li>Search Functionality and Algolia Integration</li>
                <li>Web Analytics Integration and Custom Tracking</li>
                <li>Content Management System (CMS) Integration</li>
                <li>E-commerce Integration and Payment Gateways</li>
                <li>Multi-language and Internationalization (i18n)</li>
                <li>Data Encryption and Security Best Practices</li>
                <li>Responsive Typography and Font Management</li>
                <li>Image and Media Optimization for Web</li>
                <li>Lazy Loading for Improved Performance</li>
                <li>Automated Testing (Unit, Integration, End-to-End)</li>
                <li>Error Monitoring and Alerting (e.g., Sentry)</li>
                <li>CI/CD Pipeline Setup and Configuration</li>
                <li>API Documentation and Testing (e.g., Postman)</li>
                <li>Microservices Architecture</li>
                <li>Content Delivery Network (CDN) Integration</li>
                <li>
                  Responsive Design for Different Devices (Desktop, Tablet,
                  Mobile)
                </li>
                <li>Performance Monitoring and Optimization</li>
                <li>
                  Code Splitting and Lazy Loading for Improved Performance
                </li>
                <li>Server-side Rendering (SSR) for SEO and Performance</li>
                <li>Database Integration and Optimization</li>
                <li>
                  Integration with Third-Party Services (e.g., Social Media,
                  Maps)
                </li>
                <li>Progressive Enhancement and Graceful Degradation</li>
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
