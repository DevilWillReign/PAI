const offerService = require("../services/offer")

const addOffer = (req, res) => {
    const { body } = req
    offerService.addOffer(body, (success) => success ? res.status(201).end() : res.status(400).end())
}

module.exports = {
    addOffer
}