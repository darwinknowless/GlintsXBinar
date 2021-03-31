const express = require("express"); //Import express

//Import validator

//Import controller
const transaksiController = require("../controllers/transaksiController");

//Make router
const router = express.Router();

//Make routes
router.get("/", transaksiController.getAll);

//Export router
module.exports = router;