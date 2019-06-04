const express = require('express')
const _ = require('lodash')
const Joi = require('@hapi/joi')
const daoFactory = require('../data/daoFactory')

const router = express.Router()

const baseURI = '/api/reserva'

router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    if (_.isEmpty(req.query)) {
        _handleGetAll(req, res);
    } else {
        _handleGetWithQS(req, res);
    }
});

async function _handleGetAll(req, res) {
    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

module.exports = router