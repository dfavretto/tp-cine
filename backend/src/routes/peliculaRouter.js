const express = require('express');
const _ = require('lodash');
const Joi = require('@hapi/joi');
const emailer = require('../data/emailer');
const daoFactory = require('../data/daoFactory');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const estudiantesDAO = require('../data/estudiantesDAO_Arr')
// const estudiantesDAO = require('../data/estudiantesDAO_DB')

const router = express.Router();

const baseURI = '/api/pelicula';

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
        const peliculaDAO = daoFactory.getPeliculasDAO();
        const result = await peliculaDAO.getAll();
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

router.get('/:titulo', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {
        // if (isNaN(req.params.dni))
        //     throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' }

        // const estudiantesDAO = daoFactory.getPeliculasDAO()
        // const resultado = await estudiantesDAO.getByDni(req.params.dni)

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

function esEstudianteInvalido(estudiante) {
    const schema = {
        nombre: Joi.string().alphanum().min(1).required(),
        apellido: Joi.string().alphanum().min(1).required(),
        edad: Joi.number().integer().min(0).max(120).required(),
        dni: Joi.number().integer().min(1).max(99999999).required()
    };
    const { error } = Joi.validate(estudiante, schema);
    return error;
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
