import React from "react";

import logo from "../images/agro5.JPG";

const AboutHero = () => {
  return (
    <div className="image-container">
      <img src={logo} alt="Hero" className="hero-image" />
      <div className="image-text">
        <h2 className="text-black">About Us</h2>
      </div>
    </div>
  );
};
export default AboutHero;
