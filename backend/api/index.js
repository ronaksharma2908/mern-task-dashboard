const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend running on Vercel!" });
});

// Export app as serverless function
module.exports = app;
