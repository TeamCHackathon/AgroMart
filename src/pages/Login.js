import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Subscribe from "../components/Subscribe";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  navigate("/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("./api/login", {
        email,
        password,
      });

      // Handle the response if needed
      console.log(response.data); // Assuming the server returns a JSON response

      // Reset the form
      setEmail("");
      setPassword("");

      // Redirect to the dashboard or desired page
      navigate.push("/dashboard");
    } catch (error) {
      // Handle error responses
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3 className="mb-5">Login</h3>
      <div className="card shadow p-3 w-75 mb-5 bg-white rounded mx-auto">
        <form onSubmit={handleSubmit} data-netlify="true">
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

export default Login;
