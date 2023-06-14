import React, { useState } from "react";

function Vendors() {
  const [vendorName, setVendorName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleVendorNameChange = (event) => {
    setVendorName(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset form fields
    setVendorName("");
    setProductName("");
    setProductDescription("");
  };

  return (
    <div className="container">
      <h2 className=" text-center mb-4">Vendors</h2>
      <div className="row justify-content-center">
        <div className="card shadow p-3 w-75 mb-5 bg-white rounded mx-auto">
          <div className=" ">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="vendorName">Vendor Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vendorName"
                    value={vendorName}
                    onChange={handleVendorNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productName">Product Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productDescription">
                    Product Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    value={productDescription}
                    onChange={handleProductDescriptionChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendors;
