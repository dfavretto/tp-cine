const knex = require('../db/knex')

async function getAll() {
    try {
        const selectAllQuery = `SELECT * FROM Reservas;`
        const result = await knex.raw(selectAllQuery)
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function getByEmail(email) {

    const selectByEmailQuery = `SELECT * FROM Reservas where email=${email};`
    const result = await knex.raw(selectByEmailQuery);
    
    return result;
}

async function getById(email, id) {

    const selectByIdQuery = `SELECT * FROM Reservas where email=${email} AND id=${id};`
    const result = await knex.raw(selectByIdQuery);
    
    return result;
}
    
module.exports = {
    getAll,
    getByEmail,
    getById
}
