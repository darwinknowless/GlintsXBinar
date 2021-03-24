const express = require("express");
const app = express();

// Import router

// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Define routes

// Server running
app.listen(3000, () => console.log("Server running on 3000!"));