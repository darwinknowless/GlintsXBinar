const express = require("express");
const app = express();

// Import router
const transaksiRoutes = require("./routes/transaksiRoutes");

// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/transaksi", transaksiRoutes);

// Server running
let PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${ PORT }!`));
