const assert = require('assert');
const reservaRouter = require('../src/routes/reservaRouter');
const arrayMockeado = require("./mocks/arrayReservas.json");
const reservasByEmailMockeada = require("./mocks/reservasByEmail.json");
const reservaByIdMockeada = require("./mocks/reservaById.json");

describe('Reservas', function() {

    describe('El Endpoint getAll', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await reservaRouter.getAll();
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeado));
        });

        it.skip('Se produjo un error', async function() {

        });
    });

    describe('El Endpoint getByEmail', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await reservaRouter.getByEmail('jeremias.hsn@gmail.com');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(reservasByEmailMockeada));
        });

        it('Se produjo un error', async function() {
            const resultado = await reservaRouter.getByEmail('test@gmail.com');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify([]));
        });
    });

    describe('El Endpoint getById', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await reservaRouter.getByEmailAndId('jeremias.hsn@gmail.com', '4');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(reservaByIdMockeada));
        });

        it('Se produjo un error', async function() {
            const resultado = await reservaRouter.getByEmailAndId('jeremias.hsn@gmail.com', '6');
            assert.deepStrictEqual(resultado, undefined);
        });
    });
});
