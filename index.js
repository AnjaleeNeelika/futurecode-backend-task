const express = require("express");
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/auth.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", authRoutes);

// DB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port " + process.env.PORT || 3000);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
