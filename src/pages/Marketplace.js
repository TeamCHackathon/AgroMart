import React from "react";
import Categorybar from "../components/markeplace/Categorybar";
import logo from "../images/agr04.jpg";
import MainMenu from "../components/markeplace/MainMenu";

const Marketplace = () => {
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
          <h2>Marketplace</h2>
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
      <Categorybar />
      <MainMenu />
    </>
  );
};
export default Marketplace;
