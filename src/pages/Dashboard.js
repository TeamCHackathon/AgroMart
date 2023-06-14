import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2 className="mb-5 mt-5 text-center">Welcome to your Dashboard</h2>
      <div className="mt-5 mb-5 text-center">
        <p> We Cater to your Agro Needs,</p>
        <button className="btn1 " type="submit">
          <Link to="/marketplace" className="nav-link">
            {" "}
            Marketplace
          </Link>
        </button>

        <div>Track your Orders</div>
        <button className="btn1 " type="submit">
          <Link to="/orders" className="nav-link">
            {" "}
            Orders
          </Link>
        </button>
      </div>
    </>
  );
};
export default Dashboard;
