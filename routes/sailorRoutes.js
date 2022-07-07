const express = require("express");
const sailorController = require("../controllers/sailorController");

const router = express.Router();

router.post("/create", sailorController.createSailor);

module.exports = router;
