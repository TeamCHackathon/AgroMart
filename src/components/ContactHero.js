import React from "react";

import logo from "../images/micro32.jpg";

const ContactHero = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h1 className="mt-5 mb-5">Get In Touch</h1>
        </div>

        <img
          src={logo}
          alt={ContactHero.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default ContactHero;
