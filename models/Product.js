const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
});

const Product = model("Product", productSchema);

module.exports = Product;
