const Funcion = require('../models/funcion').Funcion;

const funciones = [
    new Funcion(0, '12:00', 'Hulk', '2'),
    new Funcion(1, '14:00', 'Batman', '2'),
    new Funcion(2, '16:00', 'Pokemon', '3'),
    new Funcion(3, '18:00', 'Batman', '2'),
    new Funcion(4, '20:00', 'Pokemon', '1')
];

async function getAll() {
    return funciones;
}

async function getByPelicula(peliculaId) {
    return filterByPelicula(funciones, peliculaId);
}

function filterByPelicula(elems, val) {
    const result = []
    for (const elem of elems) {
        if (elem.peliculaId == val) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = {
    getAll,
    getByPelicula
}
