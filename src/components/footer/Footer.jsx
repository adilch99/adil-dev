import React from "react";
import bye from "../../assests/byee.png";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { IconContext } from "react-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container" id="footer">
      <div className="footer_container-main">
        <h1>Let's talk</h1>
        <div className="footer_container-main-data">
          <IconContext.Provider value={{ className: "footer_icons" }}>
            <a href="https://www.facebook.com/people/Adil-Ch/100069074281113/">
              <BsFacebook />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "footer_icons" }}>
            <a href="https://www.instagram.com/adil_hello/">
              <BsInstagram />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "footer_icons" }}>
            <a href="https://github.com/adilch99">
              <BsGithub />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "footer_icons" }}>
            <a href="https://www.upwork.com/freelancers/~01271810fa460c70fb">
              <SiUpwork />
            </a>
          </IconContext.Provider>
        </div>
        <div className="footer_container-main-handimg">
          <img className="wobble-hor-bottom" src={bye} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
