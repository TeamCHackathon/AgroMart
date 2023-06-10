const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://fortunechinenyem:agromart@cluster0.dkbmnkt.mongodb.net/";

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db("products");
    const products = await db.collection("products").find().toArray();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    client.close();
  }
});

module.exports = router;
