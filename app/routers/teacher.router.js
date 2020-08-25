const express = require("express");
const router = express.Router();
const controller = require("../controllers/teacher.controller");

router.get("/", controller.findAll);
router.post("/add", controller.addOne);
router.get("/:id", controller.findById);
router.put("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.deleteById);

module.exports = router;