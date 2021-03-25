const express = require("express");
const router = express.Router();

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Define routes
router.get("/", transaksiController.getAll);
router.post("/", transaksiController.create);
router.delete("/:id", transaksiController.deleteData);

module.exports = router;