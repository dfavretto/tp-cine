const express = require('express');
const _ = require('lodash');
const emailer = require('../data/emailer');
const daoFactory = require('../data/daoFactory');

const router = express.Router();

const baseURI = '/api/estadistica';

router.get('/', async (req, res) => {
    try {
        console.log(`GETTING: ${baseURI}${req.url}`);

        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

async function getAll() {
    try {
        const estadisticaDAO = daoFactory.getEstadisticasDAO();
        const result = await estadisticaDAO.getAll();
        return result;
    } catch (err) {
        throw err;
    }
}

/**
 * 
 * @param {Reserva} reserva 
 */
async function enviarEmail(reserva) {
    console.log('Enviando email');
    await emailer.sendEmail('Este es un email de prueba');
    console.log('Email enviado');
}

module.exports = {
    getAll,
    router
};
