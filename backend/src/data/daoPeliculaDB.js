const knex = require('../db/knex')

async function getAll() {
    try {
        const selectAllQuery = `SELECT * FROM Peliculas;`
        const result = await knex.raw(selectAllQuery)
        // const result = await knex.select('*').from('estudiantes')
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function getByAge(edadMin, edadMax) {
    try {
        const selectByEdadQuery = `SELECT * FROM estudiantes WHERE edad >= ${edadMin} AND edad <= ${edadMax};`
        const result = await knex.raw(selectByEdadQuery)
        // const result = await knex.select('*').from('estudiantes').whereBetween('edad', [edadMin, edadMax])
        return result
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function getByDni(dni) {
    try {
        const selectByDni = `SELECT TOP 1 * FROM estudiantes WHERE dni='${dni}';`
        const result = await knex.raw(selectByDni)
        return result[0]
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function add(nuevo) {
    try {
        let insertionQuery = 'INSERT INTO estudiantes '
        insertionQuery += '(nombre, apellido, edad, dni) '
        insertionQuery += `VALUES ('${nuevo.nombre}', '${nuevo.apellido}', ${nuevo.edad}, '${nuevo.dni}')`
        await knex.raw(insertionQuery)
        return nuevo
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function deleteByDni(dni) {
    try {
        const deleteByDniQuery = `DELETE FROM estudiantes WHERE dni=${dni}`
        await knex.raw(deleteByDniQuery)
        return
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function updateByDni(dni, nuevoEstu) {
    try {
        let updateByDniQuery = 'UPDATE estudiantes '
        updateByDniQuery += `SET nombre='${nuevoEstu.nombre}', `
        updateByDniQuery += `apellido='${nuevoEstu.apellido}', edad=${nuevoEstu.edad}, dni='${nuevoEstu.dni}' `
        updateByDniQuery += `WHERE dni=${dni};`
        await knex.raw(updateByDniQuery)
        return nuevoEstu
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

module.exports = {
    getAll,
    getByAge,
    getByDni,
    add,
    deleteByDni,
    updateByDni
}
