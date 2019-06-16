const Reserva = require('../models/reserva').Reserva;
const Funcion = require('../models/funcion').Funcion;

let funcion1 = new Funcion (20, 1, 5);

const reservas = [
    new Reserva('ddaviddf@gmail.com', 3, funcion1),
    new Reserva('ddaviddf@gmail.com', 3, funcion1),
    new Reserva('jeremias.hsn@gmail.com', 4, funcion1),
    new Reserva('jeremias.hsn@gmail.com', 2, funcion1),
    new Reserva('jeremias.hsn@gmail.com', 2, funcion1)
];

async function getAll() {
    return reservas;
}

async function getByEmail(email) {
    return filterByEmail(reservas, email);
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

module.exports = {
    getAll,
    getByEmail
}
