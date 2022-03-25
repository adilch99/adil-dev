import "./front.css";
import { CgFormatSlash } from "react-icons/cg";
import { FaLessThan, FaGreaterThan, FaCertificate } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { GiCrossMark, GiSkills } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { AiFillProject } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";

import React, { useState } from "react";

const Front = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="front_container">
      {toggle && (
        <div className="front_container-menu-links">
          <IconContext.Provider
            value={{ className: "front_container-menu-icon-svg-b" }}
          >
            <a href="#skills">
              <GiSkills />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "front_container-menu-icon-svg-b" }}
          >
            <a href="#certificates">
              <FaCertificate />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "front_container-menu-icon-svg-b" }}
          >
            <a href="#projects">
              <AiFillProject />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "front_container-menu-icon-svg-b" }}
          >
            <a href="#about">
              <SiAboutdotme />
            </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "front_container-menu-icon-svg-b" }}
          >
            <a href="#footer">
              <RiContactsFill />
            </a>
          </IconContext.Provider>
        </div>
      )}
      <h1 className="front_container-styling">Hello</h1>
      <div className="front_container-main">
        <div className="front_container-logo">
          <div className="front_container-logo-less slide-in-left">
            <FaLessThan />
          </div>
          <div className="front_container-logo-slash">
            <CgFormatSlash />
          </div>
          <div className="front_container-logo-greater slide-in-right">
            <FaGreaterThan />
          </div>
        </div>
        <div className="front_container-title">
          <h1 className="tracking-in-contract">adil</h1>
          <p>full stack developer</p>
        </div>
      </div>
      <div className="front_container-menu">
        {toggle ? (
          <>
            <div className="front_container-menu-icon">
              <button onClick={() => setToggle(false)}>
                <IconContext.Provider
                  value={{ className: "front_container-menu-icon-svg" }}
                >
                  <GiCrossMark />
                </IconContext.Provider>
              </button>
            </div>
          </>
        ) : (
          <div className="front_container-menu-icon">
            <button onClick={() => setToggle(true)}>
              <IconContext.Provider
                value={{ className: "front_container-menu-icon-svg" }}
              >
                <BiMenuAltRight />
              </IconContext.Provider>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Front;
