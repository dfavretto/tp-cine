const Sala = require('../models/sala').Sala;

const salas = [
    new Sala(0, 2),
    new Sala(1, 3),
    new Sala(2, 4),
    new Sala(3, 5),
    new Sala(4, 6)
];

async function getAll() {
    return salas;
}

async function getByFuncion(funcionId) {
    return filterByFuncion(salas, funcionId);
}

function filterByFuncion(elems, val) {
    const result = []
    for (const elem of elems) {
        if (elem.funcionId == val) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = {
    getAll,
    getByFuncion
}