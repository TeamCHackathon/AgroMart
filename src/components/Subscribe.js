import React from "react";
import logo from "../images/agr02.JPG";

const Subscribe = () => {
  return (
    <div className="container subscribe mt-5">
      <div className="subscribe-card">
        <div className="subscribecard-image">
          <img src={logo} alt="" />
        </div>
        <div className="subscribecard-content">
          <h5>Subscribe</h5>
          <p>Get updates on groceries available in stock</p>
          <input placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
