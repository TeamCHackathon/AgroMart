import React from "react";
import logo from "../images/agro1.jpg";

const Hero = () => {
  const handleSearch = () => {
    // Perform search logic here
    const searchValue = document.getElementById("search-input").value;
    console.log("Performing search for:", searchValue);
  };

  return (
    <>
      <div className="image-container">
        <img src={logo} alt="Hero" className="hero-image" />
        <div className="image-text">
          <h1>
            Discover Amazing <span>Grocery</span> deals and{" "}
            <span>Save your Time.</span>
          </h1>
          <div className="search-bar ms-auto">
            <input
              type="text"
              id="search-input"
              placeholder=" Search for groceries"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
