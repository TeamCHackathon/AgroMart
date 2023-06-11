const express = require("express");
const { Product } = require("../models/Product");

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/products
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const product = new Product({ name, description });
    const result = await product.save();
    res.status(201).json(result);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
