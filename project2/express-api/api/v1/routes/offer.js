var express = require('express');
var router = express.Router();
const offerController = require("../controllers/offer")

router.post("/", offerController.addOffer)

module.exports = router