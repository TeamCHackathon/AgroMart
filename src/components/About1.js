import React from "react";
import logo from "../images/agroabout.JPG";
import logo1 from "../images/agroabout2.JPG";
import logo2 from "../images/agroabout3.JPG";

const About1 = () => {
  return (
    <section className="container mt-5 mb-2">
      <div className="d-flex row ">
        <div className=" col-md -10">
          <p>
            Agromart is an e-commerce service that bridge the gap between
            farmers and off-takers for our crops. Our platform is designed to
            connect farmers directly with potential buyers, eliminating the
            traditional middlemen and streamlining the process of buying and
            selling agricultural products. Our goal is to empower farmers, small
            scale producers by providing them with a convenient and efficient
            way to market and sell their crops. By leveraging technology, we aim
            to overcome the challenges farmers face in reaching buyers,
            negotiating fair prices, and ensuring timely payments. Our
            e-commerce service aims to create a fair and transparent
            marketplace, benefiting both farmers and off-takers. By eliminating
            unnecessary intermediaries, we aim to improve farmers' income,
            reduce post-harvest losses, and provide off-takers with direct
            access to a wide range of crops. We believe that by bridging the gap
            between farmers and off-takers, we can contribute to the growth and
            sustainability of the agricultural sector, while ensuring food
            security, reduction of food waste and supporting rural economies.
          </p>
        </div>
        <div className=" col-md-4">
          <img
            src={logo}
            alt={logo.JPG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="d-flex row ">
        <div className=" col-md-4">
          <img
            src={logo1}
            alt={logo1.JPG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" col-md -10">
          <h5>Vision</h5>
          <p>
            To be a leading agro foods company committed to nourishing lives and
            promoting sustainable agriculture by revolutionizing the way
            agricultural products are traded and ensuring a fair and efficient
            marketplace for all stakeholders.
          </p>
        </div>
      </div>
      <div className="d-flex row ">
        <div className=" col-md -10">
          <h5>Mision</h5>
          <p>
            Our goal is to empower farmers, small scale producers by connecting
            them directly with potential buyers, such as wholesalers, retailers,
            restaurants, and other businesses that require agricultural
            products.
          </p>
        </div>
        <div className=" col-md-4">
          <img
            src={logo2}
            alt={logo2.JPG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p>
          By adhering to our vision and mission, we aim to be recognized as a
          trusted and socially responsible agro foods company that contributes
          to the well-being of individuals, communities, and the planet. Thank
          you for choosing our e-commerce service. We are excited to connect you
          with the agricultural community and help you discover the best crops
          for your needs while supporting local farmers.
        </p>
      </div>
    </section>
  );
};
export default About1;
