const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/helloController");

router.get("/:name", HelloController.get);
router.post("/", HelloController.post);
router.put("/", HelloController.put);
router.delete("/", HelloController.delete);

module.exports = router;
