import "./app.css";
import React from "react";
import Front from "./components/front/Front";
import Skill from "./components/skill/Skill";
import Certificate from "./components/certificate/Certificate";
import Projects from "./components/projects/Project";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Front />
      <Skill />
      <Certificate />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
