const assert = require('assert');
const funcionRouter = require('../src/routes/funcionRouter');
const arrayMockeado = require("./mocks/arrayFunciones.json");
const funcionMockeada = require("./mocks/funcionByPeliculaId.json");

describe('Funciones', function() {

    describe('El Endpoint getAll', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await funcionRouter.getAll();
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeado));
        });

        it.skip('Se produjo un error', async function() {

        });
    });

    describe('El Endpoint getByPelicula', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await funcionRouter.getByPelicula('Hulk');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(funcionMockeada));
        });

        it('Se produjo un error', async function() {
            const resultado = await funcionRouter.getByPelicula('La Sirenita');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify([]));
        });
    });
});
