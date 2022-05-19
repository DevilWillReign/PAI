var express = require('express');
var router = express.Router();
var db = require("../services/db")

router.get("/form", (req, res) => {
    res.render("layout", { itt_id: req.query.itt_id, title: "Offer form", content: "offerform" })
})

router.post("/", (req, res) => {
    const { body } = req
    body.offer_date = Date.now()
    var insert = {}
    for (var k in body) {
        insert[":"+k] = body[k]
    }
    console.log(insert)
    db.query("INSERT INTO offers(institution_name,offer_value,offer_date,itt_id) VALUES (:institution_name,:offer_value,:offer_date,:itt_id)", insert, (rows) => {
        res.redirect("/itts/" + body.itt_id)
    })
})

module.exports = router