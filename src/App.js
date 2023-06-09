import React from "react";
import "./index.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Orders from "./pages/Orders";
import PaymentPage from "./pages/Payment";
import Cart from "./pages/Cart";
import ThankYouPage from "./pages/Thankyou";
import Login from "./pages/Login";

function App() {
  const cartItems = []; // Replace with your cart items data

  return (
    <article>
      <NavBar cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </article>
  );
}

export default App;
