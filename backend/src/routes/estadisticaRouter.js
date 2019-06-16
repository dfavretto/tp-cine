const express = require('express');
const _ = require('lodash');
const emailer = require('../data/emailer');
const daoFactory = require('../data/daoFactory');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const router = express.Router();

const baseURI = '/api/estadistica';

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
        const estadisticaDAO = daoFactory.getEstadisticasDAO();
        const result = await estadisticaDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

async function _handleGetWithQS(req, res) {
    try {
        // if (isNaN(req.query.edadMin) || isNaN(req.query.edadMax))
        //     throw { status: 400, descripcion: 'las edades provistas no son numéricas' }

        // if (req.query.edadMin < 0 || req.query.edadMax < 0)
        //     throw { status: 400, descripcion: 'las edades provistas no son positivas' }

        // const estudiantesDAO = daoFactory.getPeliculasDAO()
        // const result = await estudiantesDAO.getByAge(req.query.edadMin, req.query.edadMax)
        // res.json(result)

        const peliculaDAO = daoFactory.getPeliculasDAO();
        const result = await peliculaDAO.getByTitulo(req.query.titulo);
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
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

module.exports = router;
