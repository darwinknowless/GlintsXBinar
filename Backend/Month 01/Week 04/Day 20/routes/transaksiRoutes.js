const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import controller
const transaksiController = require("../controllers/transaksiController");

router.get("/", transaksiController.getAll); // If GET (/transaksi), will go to getAll function in transaksiController class

module.exports = router; // Export router
