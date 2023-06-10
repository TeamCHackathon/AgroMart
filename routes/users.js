import express from "express";
import mongodb from "mongodb";
import bcrypt from "bcrypt";

const router = express.Router();
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://fortunechinenyem:agromart@cluster0.dkbmnkt.mongodb.net/";
const saltRounds = 10;

router.post("/register", async (req, res) => {
  let client;

  try {
    const { username, email, password } = req.body;

    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("users");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // Insert the new user into the database
    const result = await db.collection("users").insertOne(newUser);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (client) {
      client.close();
    }
  }
});

router.post("/login", async (req, res) => {
  let client;

  try {
    const { email, password } = req.body;

    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("agromart");

    // Find the user with the given email
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Return a success message or user information
    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (client) {
      client.close();
    }
  }
});

export default router;
