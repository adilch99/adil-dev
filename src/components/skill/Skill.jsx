import "./skill.css";

import React from "react";

const Front = () => {
  return (
    <div className="skill_container" id="skills">
      <div className="skill_container-main">
        <h1>SKILLS</h1>
        <div className="skill_container-main-skills">
          <div className="skill_container-main-skils-div">
            <i class="devicon-html5-plain"></i>
            <p>HTML</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-css3-plain"></i>
            <p>CSS</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-javascript-plain"></i>
            <p>Javascript</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-react-original"></i>
            <p>React</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-redux-original"></i>
            <p>Redux</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-bootstrap-plain"></i>
            <p>Bootstrap</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-nodejs-plain"></i>
            <p>NodeJS</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-express-original"></i>
            <p>ExpressJS</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-mongodb-plain"></i>
            <p>MongoDb</p>
          </div>
          <div className="skill_container-main-skils-div">
            <i class="devicon-git-plain"></i>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
