var express = require('express');
var router = express.Router();
const ittController = require("../controllers/itt")

router.get("/", ittController.getAllActiveItt)

router.get("/completed", ittController.getAllCompletedItt)

router.post("/", ittController.addItt)

router.get("/:id", ittController.getIttById)

module.exports = router