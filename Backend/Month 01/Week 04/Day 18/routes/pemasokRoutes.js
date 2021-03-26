const express = require("express");
const router = express.Router();

// Import controller
const pemasokController = require("../controllers/pemasokController");

// Define routes
router.get("/", pemasokController.getAll);
router.post("/", pemasokController.create);
router.get("/:id", pemasokController.getOne);
router.put("/:id", pemasokController.update);
router.delete("/:id", pemasokController.deleteData);

module.exports = router;