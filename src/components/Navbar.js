import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "../images/agromartlogo2.png";
import { BsCart3 } from "react-icons/bs";

const Nav = styled("nav")`
  padding: 1.5rem 0;
  background-color: #ffffff;
`;

const LinksWrapper = styled("ul")`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto;
`;

const LogoWrapper = styled("div")`
  margin-right: auto;
`;

const Logo = () => {
  return (
    <LogoWrapper className="logo">
      <img src={logo} alt="Logo" />
    </LogoWrapper>
  );
};

const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const NavLinks = () => {
  return (
    <LinksWrapper className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/orders">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn1" to="/contact">
          Login/Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn1" to="/contact">
          <BsCart3 />
        </Link>
      </li>
    </LinksWrapper>
  );
};

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo />
      <NavbarToggler />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLinks />
      </div>
    </Nav>
  );
};

export default NavBar;
