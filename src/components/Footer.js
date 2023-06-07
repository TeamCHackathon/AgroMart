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
    <footer>
      <div className="">
        <Logo />
        <div className="contact-info">
          <div className="info-item">
            <GoLocation />
            <p>18, Onabule Street, Diamond Estate Magodo</p>
          </div>
          <div className="info-item">
            <AiOutlinePhone />
            <p>+23480300000</p>
          </div>
          <div className="info-item">
            <AiOutlineMail />
            <p>info@agromart.com</p>
          </div>
          <div className="info-item">
            <GiWorld />
            <p>www.agromart.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
