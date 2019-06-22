const assert = require('assert');
const estadisticaRouter = require('../src/routes/estadisticaRouter');
const arrayMockeado = require("./mocks/arrayEstadisticas.json");

describe('Estadisticas', function() {

    describe('El Endpoint getAll', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await estadisticaRouter.getAll();
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeado));
        });

        it.skip('Se produjo un error', async function() {

        });
    });
});
