const knex = require('../db/knex')

async function getAll() {
    try {
        const selectAllQuery = `SELECT * FROM Salas;`
        const result = await knex.raw(selectAllQuery)
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

    
module.exports = {
    getAll
}
