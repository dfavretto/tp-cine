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
    let funciones = await getAll()
    return filterByPelicula(funciones, idPelicula);
}
    
function filterByPelicula(elems, val) {
    const result = []
    console.log(elems)
    for (const elem of elems) {
        if (elem.PeliculaId == val) {
            result.push(elem);
        }
    }
    return result;
}
    
function filterByRange(elems, campo, minVal, maxVal) {
    const result = []
    for (const elem of elems) {
        if (elem[campo] >= minVal && elem[campo] <= maxVal) {
            result.push(elem)
        }
    }
    return result
}
    
module.exports = {
    getAll,
    getByPelicula
}
