import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_container-main">
        <div className="about_container-main-img">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="about_container-data">
          <h4>a gamer turned into a developer</h4>
          <p>
            Hey, This is Adil, a full stack web developer who is experienced in
            HTML, CSS, React, Nodejs, MongoDB. I love the logic and structure of
            coding and always strive to work on backend
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
