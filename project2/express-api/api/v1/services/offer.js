var db = require("../services/db")

const addOffer = (body, callback) => {
    body.offer_date = Date.now()
    var insert = {}
    for (var k in body) {
        insert[":"+k] = body[k]
    }
    db.query("SELECT end_date FROM itts WHERE itt_id=:itt_id", {":itt_id": insert[":itt_id"]}, (rows) => {
        if (Date.now() <= new Date(rows[0].end_date)) {
            db.query("INSERT INTO offers(institution_name,offer_value,offer_date,itt_id) VALUES (:institution_name,:offer_value,:offer_date,:itt_id)", insert, () => {
                callback(true)
            })
        } else {
            callback(false)
        }
    })
}

module.exports = {
    addOffer
}