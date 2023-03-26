import React from 'react';
import companyImage from '../assets/images/company.jpg';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="project">
          <img src={companyImage} className="project-image" alt="project" />
          <div className="project-details">
            <h3>DripMotors.com</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="project-link" href="#" target="_blank" >View project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;