const express = require("express");
const sailorController = require("../controllers/sailorController");

const router = express.Router();

router.post("/create", sailorController.createSailor);
router.get("/", sailorController.getAll);

module.exports = router;
