const Pelicula = require('../models/pelicula').Pelicula;

const peliculas = [
    new Pelicula(0, 'Hulk', '35', 'M'),
    new Pelicula(1, 'Batman', '45', 'T'),
    new Pelicula(2, 'El padrino', '50', 'RP'),
    new Pelicula(3, 'Unknown', '64', 'T'),
    new Pelicula(4, 'Pokemon', '48', 'E')
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