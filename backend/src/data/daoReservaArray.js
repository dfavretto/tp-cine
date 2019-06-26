const __ = require('lodash');
const Reserva = require('../models/reserva').Reserva;
const Funcion = require('../models/funcion').Funcion;

let funcion1 = new Funcion (20, 1, 5);

const reservas = [
    new Reserva(1, 'ddaviddf@gmail.com', 3, funcion1),
    new Reserva(2, 'ddaviddf@gmail.com', 3, funcion1),
    new Reserva(3, 'jeremias.hsn@gmail.com', 4, funcion1),
    new Reserva(4, 'jeremias.hsn@gmail.com', 2, funcion1),
    new Reserva(5,'jeremias.hsn@gmail.com', 2, funcion1)
];

reservas.forEach((reserva, indice) => {
    reserva.id = indice;
});

async function getAll() {
    return reservas;
}

async function getByEmail(email) {
    return filterByEmail(reservas, email);
}

async function getById(email, id) {
    return filterById(filterByEmail(reservas, email), id);
}

async function postReserva(reserva) {
    reservas.push(reserva);
}

function filterByEmail(elems, val) {
    const result = [];
    for (const elem of elems) {
        if (elem.email == val) {
            result.push(elem);
        }
    }
    return result;
}

function filterById(elems, val) {
    
    const result = [];
    for (const elem of elems) {
        if (elem.id == val) {
            result.push(elem);
        }
    }
    return result[0];
}

module.exports = {
    getAll,
    getByEmail,
    getById,
    postReserva
}
