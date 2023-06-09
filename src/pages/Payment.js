import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="mb-5 text-center">Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name on Card:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiration Date:</label>
              <input
                type="text"
                id="expiry"
                className="form-control"
                value={expiry}
                onChange={(event) => setExpiry(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                className="form-control"
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
                required
              />
            </div>
            <button className="btn btn-success " type="submit">
              <Link to="/thankyou" className="nav-link">
                {" "}
                Submit Payment
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
