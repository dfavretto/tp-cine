const express = require('express');
const _ = require('lodash');
const daoFactory = require('../data/daoFactory');

const router = express.Router();
const baseURI = '/api/reserva';

router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {

        const result = await getAll();
        res.json(result);

    } catch (err) {
        res.status(err.status).json(err);
    }
});

async function getAll (){
    try {

        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getAll();
        return result;

    } catch (err) {
        throw err;
    }
}

router.get('/:email', async (req, res) => {
    try {
        console.log(`GETTING: ${baseURI}${req.url}`);

        const result = await getByEmail(req.params.email);

        if (!result) {
            throw { status: 404, descripcion: 'Reservas no encontradas' };
        }

        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

async function getByEmail (email){
    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getByEmail(email);
        return result;

    } catch (err) {
        throw err;
    }
}

router.get('/:email/:id', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {

        const resultado = await getByEmailAndId(req.params.email, req.params.id);

        if (!resultado) {
            throw { status: 404, descripcion: 'reserva no encontrada' };
        }

        if (req.query != null && req.query.enviarEmail != null && req.query.enviarEmail) {
            await enviarEmail(resultado);
        }
        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

async function getByEmailAndId (email, id){
    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getById(email, id);
        return result;

    } catch (err) {
        throw err;
    }
}

/**
 * Enviar una reserva por email
 * @param {Reserva} reserva Reserva a enviar por email
 */
async function enviarEmail(reserva) {
    console.log('Enviando email');
    await emailer.sendEmail(reserva);
    console.log('Email enviado');
}

/**
 * Crear una reserva
 */
router.post('/', async (req, res) => {
    console.log(`POSTING: ${baseURI}${req.url}`);

    try {
        const reserva = req.body;

        if (!validarReserva(reserva)) {
            throw { status: 400, descripcion: 'La reserva no existe' };
        }

        const reservaDAO = daoFactory.getReservasDAO();
        const nuevaReserva = await reservaDAO.add(reserva);
        res.status(201).json(nuevaReserva);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

module.exports = router;
