const express = require("express");
const mongodb = require("mongodb");

const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const url =
  "mongodb+srv://fortunechinenyem:agromart@cluster0.dkbmnkt.mongodb.net/";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  const productRoutes = require("./routes/productRoutes"); // Update the path for productRoutes.js

  app.use("/api/products", productRoutes);
  // Use other routes as needed

  const userRoutes = require("./routes/userRoutes"); // Update the path for userRoutes.js
  // Other imports

  app.use("/api/users", userRoutes); // Use the "/api/users" path instead of "/routes/"

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
