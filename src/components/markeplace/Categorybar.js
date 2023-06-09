import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 10px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "block" : "none")};
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 3px;
  transition: all 0.3s ease-in-out;

  &:nth-child(2) {
    width: ${(props) => (props.showMenu ? "15px" : "30px")};
    transform: ${(props) => (props.showMenu ? "rotate(-45deg)" : "none")};
  }

  &:nth-child(3) {
    width: ${(props) => (props.showMenu ? "15px" : "30px")};
    transform: ${(props) => (props.showMenu ? "rotate(45deg)" : "none")};
  }
`;

function Categorybar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MenuContainer className="mt-7 mb-5">
      <HamburgerMenu onClick={handleToggleMenu}>
        {" "}
        Category
        <HamburgerLine showMenu={showMenu} />
        <HamburgerLine showMenu={showMenu} />
        <HamburgerLine showMenu={showMenu} />
      </HamburgerMenu>
      <MenuItem to="/cropsandgrains" showMenu={showMenu}>
        Crops & Grains
      </MenuItem>
      <MenuItem to="/fishandseafood" showMenu={showMenu}>
        Fish & SeaFood
      </MenuItem>
      <MenuItem to="/foodingredients" showMenu={showMenu}>
        Food Ingredients
      </MenuItem>
      <MenuItem to="/fruits" showMenu={showMenu}>
        Fruits
      </MenuItem>
      <MenuItem to="/meatanddiary" showMenu={showMenu}>
        Meat & Diary
      </MenuItem>
      <MenuItem to="/nuts" showMenu={showMenu}>
        Nuts
      </MenuItem>
      <MenuItem to="/oils" showMenu={showMenu}>
        Oils
      </MenuItem>
      <MenuItem to="/vegetables" showMenu={showMenu}>
        Vegetables
      </MenuItem>
      <MenuItem to="/tubers" showMenu={showMenu}>
        Tubers
      </MenuItem>
    </MenuContainer>
  );
}

export default Categorybar;
