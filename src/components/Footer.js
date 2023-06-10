import React from "react";
import logo from "../images/agromartlogo2.png";
import styled from "styled-components";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

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

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="">
        <Logo />
        <div className="contact-info">
          <div className="info-item">
            <GoLocation size={20} style={{ color: "#73DF08" }} />
            <p>18, Onabule Street, Diamond Estate Magodo</p>
          </div>
          <div className="info-item">
            <AiOutlinePhone size={20} style={{ color: "#73DF08" }} />
            <p>+23480300000</p>
          </div>
          <div className="info-item">
            <AiOutlineMail size={20} style={{ color: "#73DF08" }} />
            <p>info@agromart.com</p>
          </div>
          <div className="info-item">
            <GiWorld size={20} style={{ color: "#73DF08" }} />
            <p>www.agromart.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
