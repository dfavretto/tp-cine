const Reserva = require('../models/reserva').Reserva;
const Funcion = require('../models/funcion');

let funcion1 = new Funcion (20, 1, 5);

const reservas = [
    new Reserva(3, funcion1),
    new Reserva(3, funcion1),
    new Reserva(4, funcion1),
    new Reserva(2, funcion1),
    new Reserva(2, funcion1)
];

async function getAll() {
    return reservas;
}

module.exports = {
    getAll
}