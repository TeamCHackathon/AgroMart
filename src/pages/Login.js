import React, { useState } from "react";
import Subscribe from "../components/Subscribe";
// import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h3 className="mb-5">Login</h3>
      <div className="card shadow p-3 w-75 mb-5 bg-white rounded mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn1">
            Login
          </button>
        </form>
      </div>

      <Subscribe />
    </div>
  );
};

export default Register;
