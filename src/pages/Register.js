import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { BsFacebook } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/register`,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        }
      );

      // Handle the response if needed
      console.log(response.data); // Assuming the server returns a JSON response

      // Redirect to the dashboard
      navigate("/dashboard");

      // Reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h3 className="mb-5">Sign Up</h3>
      <div className="card shadow p-3 w-75 mb-5 bg-white rounded mx-auto">
        <form onSubmit={handleSubmit} data-netlify="true">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="hidden" name="form-name" value="register" />

          <button type="submit" className="btn btn1">
            Submit
          </button>
        </form>
        <div className="my-4 text-center">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <hr className="border-secondary" />
            </div>
            <span className="px-3 bg-white text-muted">or</span>{" "}
            <div className="flex-grow-1">
              <hr className="border-secondary" />
            </div>
          </div>
        </div>
        <div>
          <p>Sign Up with</p>
          <div className="">
            <FcGoogle />
            <BsFacebook />
            <DiApple />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <p>Already have an Account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <Subscribe />
    </div>
  );
};

export default Register;
