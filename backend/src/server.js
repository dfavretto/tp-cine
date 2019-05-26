const express = require('express');
const funcionRouter = require('./routes/funcionRouter');
const peliculaRouter = require('./routes/peliculaRouter');

const app = express();

app.use(express.json());

app.set('json spaces', 4);

app.use('/api/pelicula', peliculaRouter);

const puerto = 8080;
app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
})
