const db = require("../services/db")

const getAllActiveItt = (callback) => {
    db.query("SELECT itt_id,itt_name, start_date,end_date FROM itts WHERE strftime('%s', end_date) >= strftime('%s', datetime('now', 'localtime'));", {}, (rows) => {
        callback({ itts: rows })
    })
}

const getAllCompletedItt = (callback) => {
    db.query("SELECT itt_id,itt_name,start_date,end_date FROM itts WHERE strftime('%s', end_date) < strftime('%s', datetime('now', 'localtime'));", {}, (rows) => {
        callback({ itts: rows })
    })
}

const addItt = (body, callback) => {
    db.query("INSERT INTO itts(itt_name,institution_name,itt_description,start_date,end_date,max_price) VALUES(?,?,?,?,?,?);", Object.values(body), (rows) => {
        callback()
    })
}

const getIttById = (id, callback) => {
    db.query("SELECT * FROM itts WHERE itt_id=?", [id], (rows) => {
        let itt = rows[0]
        db.query("SELECT * FROM offers WHERE itt_id=? ORDER BY ABS(offer_value-?)", [id, itt.max_price], (offers) => {
            itt.offers = offers
            itt.unsettled = offers.map(e => e.offer_value).every(v => v > itt.max_price)
            callback(itt)
        })
    })
}

module.exports = {
    getAllActiveItt,
    getAllCompletedItt,
    addItt,
    getIttById
}