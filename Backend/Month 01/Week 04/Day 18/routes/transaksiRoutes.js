const express = require("express");
const router = express.Router();

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Define routes
router.get("/", transaksiController.getAll);

module.exports = router;