import React from "react";
// import logoo from "../images/agr01.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="container">
      <h4 className="testimonial-heading">What our Clients Say</h4>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            I love Agromart, I always find fresh fruits for me and my family
          </p>
          <p className="testimonial-author">- Mrs Titilayo</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            AgroMart is not what you ordered for versus what you got, they are
            the best in terms of delivery.
          </p>
          <p className="testimonial-author">- Mrs Ayoka</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            It saves my time from going to the market.
          </p>
          <p className="testimonial-author">- Ada</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
