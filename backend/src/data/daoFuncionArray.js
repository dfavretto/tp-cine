const Funcion = require('../models/funcion').Funcion;

const funciones = [
    new Funcion('12:00', 'Pelicula1', '2'),
    new Funcion('14:00', 'Pelicula1', '2'),
    new Funcion('16:00', 'Pelicula1', '2'),
    new Funcion('18:00', 'Pelicula1', '2'),
    new Funcion('20:00', 'Pelicula1', '2')
];

async function getAll() {
    return funciones;
}

async function getByPelicula(pelicula) {
    return filterByPelicula(funciones, pelicula);
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
