import React from "react";
import logo from "../images/agr1.JPG";
import logo2 from "../images/agr2.JPG";
import logo3 from "../images/agr3.JPG";
import logoo from "../images/agr00.jpg";
const Homedisplay2 = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div>
          <h4>
            How does <strong>Agro Mart</strong> Work?
          </h4>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={logo} alt="" className="card-image" />
          <p className="card-text">Search for items</p>
        </div>

        <div className="card">
          <img src={logo2} alt="" className="card-image" />
          <p className="card-text">Compare the Prices with other Stores</p>
        </div>

        <div className="card">
          <img src={logo3} alt="" className="card-image" />
          <p className="card-text">Save Time and Money</p>
        </div>
      </div>

      <div className="image-container">
        <img src={logoo} alt="Hero" className="hero-image" />
        <div className="image-text">
          <h5>Are you a Store Owner?</h5>
          <p>Your Products can be listed on Agromart too!</p>
          <div>
            <button className="btn1">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homedisplay2;
