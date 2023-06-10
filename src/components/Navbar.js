import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "../images/agromartlogo2.png";
import NavCartButton from "../productCart/NavCartButton";

const Nav = styled.nav`
  padding: 1.5rem 0;
  background-color: #ffffff;
  position: relative;
  &.navbar-expand-sm {
    background-color: #ffffff;
    z-index: 1;
  }
`;

const LinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto;
`;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

const Logo = () => {
  return (
    <LogoWrapper className="logo">
      <img src={logo} alt="Logo" />
    </LogoWrapper>
  );
};

const NavbarToggler = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onClick(!isOpen);
  };

  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded={isOpen ? "true" : "false"}
      aria-label="Toggle navigation"
      onClick={handleToggle}
    >
      <span className="navbar-toggler-icon">
        <span
          className="icon-bar"
          style={{ backgroundColor: "#004500" }}
        ></span>
      </span>
    </button>
  );
};

const NavLinks = ({ isOpen, cartItems }) => {
  return (
    <LinksWrapper className={`navbar-nav ${isOpen ? "open" : ""}`}>
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn1" to="/register">
          Login/Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn2" to="/cart">
          <NavCartButton cartItems={cartItems.length} />
        </Link>
      </li>
    </LinksWrapper>
  );
};

const NavBar = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newState) => {
    setIsOpen(newState);
  };

  return (
    <Nav className="navbar navbar-expand-sm px-3">
      <Logo />
      <NavbarToggler onClick={handleToggle} />
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <NavLinks isOpen={isOpen} cartItems={cartItems} />
      </div>
    </Nav>
  );
};

export default NavBar;
