const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  // or log anything helpful in the req object
  next();
});
app.use(express.urlencoded({ extended: true }));

// Update the path for productRoutes.js
app.use("/api/products", productRoutes);
// Update the path for userRoutes.js
app.use("/api/users", userRoutes);

// const MongoClient = mongodb.MongoClient;
const MONGODB_URI =
  "mongodb+srv://fortunechinenyem:agromart@cluster0.dkbmnkt.mongodb.net/";
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
