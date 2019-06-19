const express = require('express')
const _ = require('lodash')
const daoFactory = require('../data/daoFactory')


const router = express.Router()

const baseURI = '/api/funcion'

router.get('/', async (req, res) => {
    try {
        console.log(`GETTING: ${baseURI}${req.url}`);

        const funcionDAO = daoFactory.getFuncionesDAO();
        const result = await funcionDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

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