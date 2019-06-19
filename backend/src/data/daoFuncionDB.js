const knex = require('../db/knex')

async function getAll() {
    try {
        const selectAllQuery = `SELECT * FROM Funciones;`
        const result = await knex.raw(selectAllQuery)
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function getByPelicula(idPelicula) {
    try{
    const selectByIdQuery = `SELECT * FROM Funciones where PeliculaId=${idPelicula};`
    const result = await knex.raw(selectByIdQuery);

    return result;
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

module.exports = {
    getAll,
    getByPelicula
}
