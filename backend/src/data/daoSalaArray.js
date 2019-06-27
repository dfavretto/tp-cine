const Sala = require('../models/sala').Sala;

const salas = [
    new Sala(0, 1),
    new Sala(1, 3),
    new Sala(2, 0),
    new Sala(3, 4),
    new Sala(4, 2)
];

async function getAll() {
    return salas;
}

async function getByFuncion(funcionId) {
    return filterByFuncion(salas, funcionId);
}

async function edit(sala) {
    console.log(JSON.stringify(sala));
    salas.forEach((salaFound, index) => {
        if (salaFound.funcionId == sala.funcionId) {
            salaFound.butacas = sala.butacas;            
        }
    });
    console.log(JSON.stringify(salas[2]));
    // const salaFound = filterById(salas, sala.id)[0];
    return true;
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

function filterById(elems, val) {
    const result = []
    for (const elem of elems) {
        if (elem.funcionId == val) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = {
    edit,
    getAll,
    getByFuncion
}