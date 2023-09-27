import React from "react";
import servicesData from "../data/servicesData";
import "./projects.css";

const Projects = () => {
  const projects = servicesData.filter((item) => item.projects);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"> Projects</h2>
      <div className="row">
        <div className="coming-soon">
          <h2>Our Exceptional Projects Coming Soon..</h2>
          <p>
            Discover some of the exciting projects we've meticulously crafted to
            perfection for our esteemed clients. Your vision could be the next
            success story we tell. here are two sample while you wait and see the amazing projects we have created for our clients
          </p>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  <a
                    href={project.projects.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.projects.title}
                  </a>
                </h3>
                <p className="card-text">{project.projects.description}</p>
                <p className="card-text">
                  Creators: {project.projects.creator}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="card-text">
        🚀 Experience innovation at its finest with our featured projects! We
        believe in turning ideas into exceptional digital solutions. If you're
        eager to start a conversation, we're just a click away.
      </p>
      <p className="card-text">
        📧 Don't hesitate to get in touch with us to discuss your unique project
        requirements. We're here to listen, collaborate, and bring your visions
        to life. Let's make something amazing together!
      </p>
      <p className="card-text">
        🚀 Step into a world of innovation and creativity with our featured
        projects! We believe in the power of collaboration and the magic of
        turning ideas into exceptional digital solutions.
      </p>
      <p className="card-text">
        🌟 At our core, we are passionate about crafting unique and engaging
        experiences for our clients. If you're ready to take your project to the
        next level, we're here to support you every step of the way.
      </p>
      <p className="card-text">
        💬 Your vision matters to us. Let's sit down and have a conversation
        about how we can bring your dreams to life. We're excited to hear from
        you and embark on this creative journey together!
      </p>
      <p className="card-text">
        🚀 Embark on a journey of innovation with our featured projects! We're
        passionate about pushing the boundaries and creating exceptional digital
        experiences.
      </p>
      <p className="card-text">
        🌟 Join us in the realm of creativity and imagination. Your ideas are
        unique, and we're here to bring them to life with our expertise and
        dedication.
      </p>
      <p className="card-text">
        💬 Let's talk! We love to connect and discuss exciting projects. Reach
        out to us and let's transform your vision into a spectacular reality.
      </p>
      <p className="card-text">
        🛠️ Crafted with love and expertise, our projects are a testament to our
        commitment to excellence. Ready to craft something amazing together?
      </p>
    </div>
  );
};

export default Projects;
