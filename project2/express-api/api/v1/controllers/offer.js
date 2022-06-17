const offerService = require("../services/offer")

const addOffer = (req, res) => {
    const { body } = req
    offerService.addOffer(body, () => res.status(201).end())
}

module.exports = {
    addOffer
}