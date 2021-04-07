require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const fileUpload = require("express-fileupload"); // Import express-fileupload

// Import router
const authRoutes = require("./routes/authRoutes");
const barangRoutes = require("./routes/barangRoutes");
const transaksiRoutes = require("./routes/transaksiRoutes");

// Make app
const app = express();

// Body parser
app.use(express.json()); // Enable json req.body
app.use(
  express.urlencoded({
    extended: true,
  })
); // Enable req.body urlencoded

// To read form-data
app.use(fileUpload());

// Static folder (for images)
app.use(express.static("public"));

// Make routes
app.use("/auth", authRoutes);
app.use("/barang", barangRoutes);
app.use("/transaksi", transaksiRoutes);

// Run server
let PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}!`));
