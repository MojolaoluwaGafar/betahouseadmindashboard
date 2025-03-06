const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.post("/api/Signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed!" });
  }
});
// signin
app.post("/api/Signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Test route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
