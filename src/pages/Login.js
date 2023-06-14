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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, handle the success case
        console.log("Login successful");
        // Redirect to the dashboard page
        navigate.push("/dashboard");
      } else {
        // Login failed, handle the error case
        const data = await response.json();
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="mb-5">Login</h3>
      <div className="card shadow p-3 w-75 mb-5 bg-white rounded mx-auto">
        <form
          onSubmit={handleSubmit}
          data-netlify="true"
          name="login"
          method="post"
        >
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
