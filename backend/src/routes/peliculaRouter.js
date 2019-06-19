const express = require('express');
const _ = require('lodash');
const emailer = require('../data/emailer');
const daoFactory = require('../data/daoFactory');

const router = express.Router();

const baseURI = '/api/pelicula';

router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {

        const peliculaDAO = daoFactory.getPeliculasDAO();
        const result = await peliculaDAO.getAll();
        res.json(result);

    } catch (err) {
        res.status(err.status).json(err);
    }
});

router.get('/:titulo', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {
        const peliculaDAO = daoFactory.getPeliculasDAO();
        const resultado = await peliculaDAO.getByTitulo(req.params.titulo);

        if (!resultado) {
            throw { status: 404, descripcion: 'pelicula no encontrada' };
        }

        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

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
