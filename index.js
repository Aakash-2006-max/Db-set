const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("🎓 Welcome to Student Project Tracker Backend!");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
