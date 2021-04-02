require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const fileUpload = require("express-fileupload"); // Import express-fileupload

// Import routes
const transaksiRoutes = require("./routes/transaksiRoutes");
const pemasokRoutes = require("./routes/pemasokRoutes");

// Make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// To read form-data request
app.use(fileUpload());

// Set static file directory
app.use(express.static("public"));

// Make routes
app.use("/transaksi", transaksiRoutes);
app.use("/pemasok", pemasokRoutes);

//Running server
let PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}!`));
