const Pelicula = require('../models/pelicula').Pelicula;

const peliculas = [
    new Pelicula('Pelicula1', '35', 'M'),
    new Pelicula('Pelicula2', '45', 'T'),
    new Pelicula('Pelicula3', '50', 'RP'),
    new Pelicula('Pelicula4', '64', 'T'),
    new Pelicula('Pelicula5', '48', 'E')
];

async function getAll() {
    return peliculas;
}

async function getByTitulo(titulo) {
    return filterByTtitulo(peliculas, titulo);
}

function filterByTtitulo(elems, val) {
    const result = []
    for (const elem of elems) {
        if (elem.titulo == val) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = {
    getAll,
    getByTitulo
}