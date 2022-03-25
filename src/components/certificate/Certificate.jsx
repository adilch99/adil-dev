import "./certificate.css";

import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Close, CropSquare, HorizontalRule } from "@mui/icons-material";

const Certificate = () => {
  return (
    <div className="certi_container" id="certificates">
      <div className="certi_container-main">
        <div className="apple_bar">
          <div className="apple_left">
            <div className="apple_left-div apple_red"></div>
            <div className="apple_left-div apple_yellow"></div>
            <div className="apple_left-div apple_green"></div>
          </div>
          <div className="apple_right">
            <div className="apple_right-icon">
              <HorizontalRule />
            </div>
            <div className="apple_right-icon">
              <CropSquare />
            </div>
            <div className="apple_right-icon">
              <Close />
            </div>
          </div>
        </div>
        <div className="certi_container-main-inner">
          <h1>Certificates</h1>
          <div className="certi_container-main-div">
            <div className="certi_container-main-data">
              <IconContext.Provider
                value={{ className: "certi-freecode-icon" }}
              >
                <FaFreeCodeCamp />
              </IconContext.Provider>
              <p>Responsive Web Design Certificate by FreeCodeCamp</p>
            </div>
            <div className="certi_container-main-data">
              <IconContext.Provider
                value={{ className: "certi-freecode-icon" }}
              >
                <FaFreeCodeCamp />
              </IconContext.Provider>
              <p>JavaScript Algorithm Certificate by FreeCodeCamp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
