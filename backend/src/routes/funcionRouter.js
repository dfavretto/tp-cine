const express = require('express')
const _ = require('lodash')
const Joi = require('@hapi/joi')
const daoFactory = require('../data/daoFactory')

// const estudiantesDAO = require('../data/estudiantesDAO_Arr')
// const estudiantesDAO = require('../data/estudiantesDAO_DB')

const router = express.Router()

const baseURI = '/api/funcion'

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
        const funcionDAO = daoFactory.getFuncionesDAO();
        const result = await funcionDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

async function _handleGetWithQS(req, res) {
    try {
        const funcionDAO = daoFactory.getFuncionesDAO();
        const result = await funcionDAO.getByPelicula(req.query.idPelicula);
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err)
    }
}

router.get('/:idPelicula', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)

    try {
        const funcionDAO = daoFactory.getFuncionesDAO();
        const resultado = await funcionDAO.getByPelicula(req.params.idPelicula);

        if (!resultado)
            throw { status: 404, descripcion: 'funcion no encontrada' }

        res.json(resultado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

module.exports = router