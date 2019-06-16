const express = require('express');
const _ = require('lodash');
const daoFactory = require('../data/daoFactory');

const router = express.Router();
const baseURI = '/api/reserva';

/**
 * Obtener todas las reservas
 */
router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

/**
 * Obtener todas las reservas de un usuario por su email
 */
router.get('/:email', async (req, res) => {
    try {
        console.log(`GETTING: ${baseURI}${req.url}`);

        const reservaDAO = daoFactory.getReservasDAO();
        const resultado = await reservaDAO.getByEmail(req.params.email);

        if (!resultado) {
            throw { status: 404, descripcion: 'Reservas no encontradas' };
        }

        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

/**
 * Obtener una reserva segun el email y id. Reenviar la reserva por email
 */
router.get('/:email/:id', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const resultado = await reservaDAO.getById(req.params.email, req.params.id);

        if (!resultado) {
            throw { status: 404, descripcion: 'reserva no encontrada' };
        }

        await enviarEmail(resultado);

        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

/**
 * Enviar una reserva por email
 * @param {Reserva} reserva Reserva a enviar por email
 */
async function enviarEmail(reserva) {
    console.log('Enviando email');
    await emailer.sendEmail(reserva);
    console.log('Email enviado');
}

module.exports = router;
