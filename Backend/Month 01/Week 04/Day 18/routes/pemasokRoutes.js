const express = require("express");
const router = express.Router();

//Import controller
const pemasokController = require("../controllers/pemasokController");

//Define routes
router.get("/", pemasokController.getAllPem);
router.post("/", pemasokController.createPem);
router.get("/:id", pemasokController.getOnePem);
router.put("/:id", pemasokController.updatePem);
router.delete("/:id", pemasokController.deletePem);

module.exports = router;