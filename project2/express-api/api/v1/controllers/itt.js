const ittService = require("../services/itt")

const getAllActiveItt = (req, res) => {
    ittService.getAllActiveItt(data => {
        res.status(200).json(data)
    })
}

const getAllCompletedItt = (req, res) => {
    ittService.getAllCompletedItt(data => {
        res.status(200).json(data)
    })
}

const addItt = (req, res) => {
    const { body } = req
    ittService.addItt(body, () => res.status(201).end())
}

const getIttById = (req, res) => {
    ittService.getIttById(req.params.id, data => res.status(200).json(data))
}

module.exports = {
    getAllActiveItt,
    getAllCompletedItt,
    addItt,
    getIttById
}