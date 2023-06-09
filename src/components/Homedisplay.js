import React from "react";
import logo from "../images/agro2.JPG";
import logo2 from "../images/agro3.JPG";
import logo3 from "../images/agro4.JPG";
// import logo4 from "../images/agro5.JPG";
import logo5 from "../images/agro6.JPG";
import logo6 from "../images/agro7.JPG";
import logo7 from "../images/agro8.JPG";
import { Link } from "react-router-dom";

const Homedisplay = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={logo} alt="Organic Banana" className="card-image" />
          <p className="card-text">Organic Banana</p>
        </div>

        <div className="card">
          <img src={logo2} alt="Organic Watermelon" className="card-image" />
          <p className="card-text">Organic Watermelon</p>
        </div>

        <div className="card">
          <img src={logo3} alt="Organic Apple" className="card-image" />
          <p className="card-text">Organic Apple</p>
        </div>
      </div>

      {/* <div className="container">
        <div className="mx-auto">
          <img src={logo4} alt="" className="" />
        </div>
      </div> */}

      <div className="card-container">
        <div className="card">
          <img src={logo5} alt="Organic Banana" className="card-image" />
          <p className="card-text">Organic Tomatoes</p>
        </div>

        <div className="card">
          <img src={logo6} alt="Organic Watermelon" className="card-image" />
          <p className="card-text">Organic onions</p>
        </div>

        <div className="card">
          <img src={logo7} alt="Organic Apple" className="card-image" />
          <p className="card-text">Organic Date</p>
        </div>
      </div>
      <div className="text-center mt-5 mb-5">
        <button>
          <Link to="/marketplace" className=" btn1">
            Marketplace
          </Link>
        </button>
      </div>
    </>
  );
};
export default Homedisplay;
