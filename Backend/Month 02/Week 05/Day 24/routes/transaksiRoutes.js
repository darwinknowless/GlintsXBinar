const express = require("express"); // Import express
const transaksiValidator = require("../middlewares/validators/transaksiValidator");
const transaksiController = require("../controllers/transaksiController");

const router = express.Router();

router.get("/", transaksiController.getAll);
router.get("/:id", transaksiController.getOne);
router.post("/", transaksiValidator.create, transaksiController.createData);
router.put("/:id", transaksiValidator.update, transaksiController.updateData);
router.delete("/:id", transaksiController.deleteData);

module.exports = router;