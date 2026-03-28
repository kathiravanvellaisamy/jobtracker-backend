const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");


connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/jobs", require("./routes/jobRoutes"));

app.get("/", (req, res) => {
  res.send("Job Tracker API Running");
});

const PORT = process.env.PORT || 5000;
console.log("MONGO_URI:", process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});