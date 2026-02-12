require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// CORS handling
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedheaders: ["Content-Type", "Authorization"],
  }),
);

// Connect Database
connectDB();

// Middleware
app.use(express.json())

// Static folder for uploads
app.use('/backend/uploads', express.static(path.join(__dirname, "uploads")));

// Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))