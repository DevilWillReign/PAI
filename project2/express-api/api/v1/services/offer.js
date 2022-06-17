var db = require("../services/db")

const addOffer = (body, callback) => {
    body.offer_date = Date.now()
    var insert = {}
    for (var k in body) {
        insert[":"+k] = body[k]
    }
    db.query("INSERT INTO offers(institution_name,offer_value,offer_date,itt_id) VALUES (:institution_name,:offer_value,:offer_date,:itt_id)", insert, (rows) => {
        callback()
    })
}

module.exports = {
    addOffer
}