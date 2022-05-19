import React from "react";
import "./projects.css";
import projectA from "../../assests/projectA.png";
import projectB from "../../assests/projectB.png";

const Projects = () => {
  return (
    <div className="projects_container" id="projects">
      <h1>Projects</h1>
      <div className="projects_container-main">
        <div className="projects_container-main-data">
          <div className="projects_container-main-data-img">
            <a
              href="https://sleepy-feynman-d4e84f.netlify.app/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={projectA} alt="" />
            </a>
          </div>
          <p>Modern UI/UX Site</p>
        </div>
        <div className="projects_container-main-data">
          <div className="projects_container-main-data-img">
            <a
              href="https://ec-client-ten.vercel.app/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={projectB} alt="" />
            </a>
          </div>
          <p>Ecommerce App</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
