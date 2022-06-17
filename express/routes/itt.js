var express = require('express');
var router = express.Router();
var db = require("../services/db")

router.get("/", (req, res) => {
    db.query("SELECT itt_id,itt_name,start_date,end_date FROM itts WHERE strftime('%s', end_date) >= strftime('%s', datetime('now', 'localtime'));", {}, (rows) => {
        res.render("layout", { data: rows, completed: false, content: "ittlist", title: "ITT List" })
    })
})

router.get("/completed", (req, res) => {
    db.query("SELECT itt_id,itt_name,start_date,end_date FROM itts WHERE strftime('%s', end_date) < strftime('%s', datetime('now', 'localtime'));", {}, (rows) => {
        res.render("layout", { data: rows, completed: true, content: "ittlist", title: "ITT Completed List" })
    })
})

router.get("/form", (req, res) => {
    res.render("layout", { content: "ittform", title: "ITT Form" })
})

router.post("/", (req, res) => {
    const { body } = req
    db.query("INSERT INTO itts(itt_name,institution_name,itt_description,start_date,end_date,max_price) VALUES(?,?,?,?,?,?);", Object.values(body), (rows) => {
        res.redirect("/itts/")
    })
})

router.get("/:id", (req, res) => {
    db.query("SELECT * FROM itts WHERE itt_id=?", [req.params.id], (rows) => {
        let itt = rows[0]
        db.query("SELECT * FROM offers WHERE itt_id=? ORDER BY ABS(offer_value-?)", [req.params.id, itt.max_price], (offers) => {
            itt.offers = offers
            res.render("layout", { data: itt, unsettled: offers.map(e => e.offer_value).every(v => v > itt.max_price), content: "ittdetails", title: "ITT Details" })
        })
    })
})

module.exports = router