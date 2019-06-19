const express = require('express');
const funcionRouter = require('./routes/funcionRouter');
const peliculaRouter = require('./routes/peliculaRouter');
const salaRouter = require('./routes/salaRouter');
const reservaRouter = require('./routes/reservaRouter');

//Permitir el uso de llamadas por servicio desde páginas
var cors = require('cors')

const app = express();

app.use(express.json());

//Uso de cors()
app.use(cors())

app.set('json spaces', 4);

app.use('/api/pelicula', peliculaRouter);
app.use('/api/funcion', funcionRouter);
app.use('/api/sala', salaRouter);
app.use('/api/reserva', reservaRouter);

const puerto = 8090;
app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
});
