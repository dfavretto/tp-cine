const express = require('express')
const _ = require('lodash')
const daoFactory = require('../data/daoFactory')

const router = express.Router()

const baseURI = '/api/funcion'

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
        const funcionDAO = daoFactory.getFuncionesDAO();
        const result = await funcionDAO.getAll();
        return result;
    } catch (err) {
        throw err;
    }
}

router.get('/:peliculaId', async (req, res) => {
    try {
        console.log(`GETTING: ${baseURI}${req.url}`)
        const resultado = await getByPelicula(req.params.peliculaId);

        if (!resultado) {
            throw { status: 404, descripcion: 'funcion no encontrada' };
        }

        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

async function getByPelicula(peliculaId) {
    try {
        const funcionDAO = daoFactory.getFuncionesDAO();
        const resultado = await funcionDAO.getByPelicula(peliculaId);

        return resultado;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAll,
    getByPelicula,
    router
};
