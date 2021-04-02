const express = require("express"); // Import express
const transaksiValidator = require("../middlewares/validators/transaksiValidator");
const transaksiController = require("../controllers/transaksiController");

const router = express.Router();

router.get("/", transaksiController.getAll);
router.get("/:id", transaksiController.getOne);
router.post("/", transaksiValidator.create, transaksiController.create);
router.put("/:id", transaksiValidator.update, transaksiController.update);
router.delete("/:id", transaksiController.delete);

module.exports = router;