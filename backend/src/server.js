const express = require('express');
const funcionRouter = require('./funcion/funcionRouter');
const peliculaRouter = require('./pelicula/peliculaRouter');

const app = express();

app.use(express.json());

app.set('json spaces', 4);

app.use('/api/pelicula', peliculaRouter);

const puerto = 8080;
app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
})
