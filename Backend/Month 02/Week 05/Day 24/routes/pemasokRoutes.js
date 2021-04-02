const express = require("express"); // Import express

// Import controller
const pemasokController = require("../controllers/pemasokController");

// Make router
const router = express.Router();

// Get All Data
router.get("/", pemasokController.getAll);
router.get("/:id", pemasokController.getOne);
router.post("/", pemasokController.create);
router.put("/:id", pemasokController.update);
router.delete("/:id", pemasokController.delete);

// Export router
module.exports = router;
