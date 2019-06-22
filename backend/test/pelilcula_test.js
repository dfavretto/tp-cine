const assert = require('assert');
const peliculaRouter = require('../src/routes/peliculaRouter');
const arrayMockeado = require("./mocks/arrayPeliculas.json");
const peliculaMockeada = require("./mocks/peliculaByTitulo.json");

describe("Peliculas", function () {

    describe("El Endpoint getAll", function () {

        it("Devuelve los datos correctamente", async function () {
            const resultado = await peliculaRouter.getAll();
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeado));
        });

        it.skip("Se produjo un error", async function () {

        });
    });

    describe("El Endpoint getByTitulo", function () {

        it("Devuelve los datos correctamente", async function () {
            const resultado = await peliculaRouter.getByTitulo("Pokemon");
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(peliculaMockeada));
        });

        it("Se produjo un error", async function () {
            const resultado = await peliculaRouter.getByTitulo("9847194719872359871");
            assert.deepStrictEqual(JSON.stringify(resultado), '[]');

        });
    })
});