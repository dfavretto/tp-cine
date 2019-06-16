const Estadistica = require('../models/estadisticaMock.json');

/**
 * Devuelve todas las estadísticas
 */
async function getAll() {
    return Estadistica;
}

/**
 * Agregar un objeto de estadistica
 * @param {Objeto} estad Objeto de estadistica
 * Debe ser modificado y adaptado al modelo
 */
async function add(estad) {
    const estudianteBuscado = await getByDni(estuNuevo.dni);
    if (estudianteBuscado)
        throw { status: 400, descripcion: 'ya existe un estudiante con ese dni' };

    peliculas.push(estuNuevo);
    return estuNuevo;
}

module.exports = {
    getAll,
    add
};
