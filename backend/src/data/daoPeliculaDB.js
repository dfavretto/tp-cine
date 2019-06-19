const knex = require('../db/knex')

async function getAll() {
    try {
        const selectAllQuery = `SELECT * FROM Peliculas;`
        const result = await knex.raw(selectAllQuery)
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function getByTitulo(titulo) {

    const selectByTituloQuery = `SELECT * FROM Peliculas where titulo=${titulo};`
    const result = await knex.raw(selectByTituloQuery);
    
    return result;
}
    
module.exports = {
    getAll,
    getByTitulo
}
