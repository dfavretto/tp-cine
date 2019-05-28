const Pelicula = require('../models/pelicula').Pelicula;

const peliculas = [
    new Pelicula('Pelicula 1', '35', 'M'),
    new Pelicula('Pelicula 2', '45', 'T'),
    new Pelicula('Pelicula 3', '50', 'RP'),
    new Pelicula('Pelicula 4', '64', 'T'),
    new Pelicula('Pelicula 5', '48', 'E')
];

async function getAll() {
    return peliculas;
}

async function getByAge(edadMin, edadMax) {
    return filterByRange(peliculas, 'edad', edadMin, edadMax)
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

async function getByDni(dni) {
    const estudianteBuscado = peliculas.find(e => e.dni == dni)
    return estudianteBuscado
}

async function add(estuNuevo) {
    const estudianteBuscado = await getByDni(estuNuevo.dni)
    if (estudianteBuscado)
        throw { status: 400, descripcion: 'ya existe un estudiante con ese dni' }

    peliculas.push(estuNuevo)
    return estuNuevo
}

async function deleteByDni(dni) {
    const posBuscada = peliculas.findIndex(e => e.dni == dni)
    if (posBuscada == -1)
        throw { status: 404, description: 'estudiante no encontrado' }

    peliculas.splice(posBuscada, 1)
}

async function updateByDni(dni, nuevoEstu) {
    const posBuscada = peliculas.findIndex(e => e.dni == dni)
    if (posBuscada == -1)
        throw { status: 404, description: 'estudiante no encontrado' }

    peliculas.splice(posBuscada, 1, nuevoEstu)
    return nuevoEstu
}

module.exports = {
    getAll,
    getByAge,
    getByDni,
    add,
    deleteByDni,
    updateByDni
}
