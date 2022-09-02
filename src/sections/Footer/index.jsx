import React from "react";

import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Get in <span>contact</span> with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:joaofranciscoreis13@outlook.com" className="p-text">
            joaofranciscoreis13@outlook.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+353 (85) 206 7632" className="p-text">
            +353 (85) 206 7632
          </a>
        </div>
      </div>
      <div className="app__footer-social">
        <p className="bold-text">
          You can also connect with me through my socials
        </p>
        <div className="app__footer-arrow">
          <img src={images.arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
