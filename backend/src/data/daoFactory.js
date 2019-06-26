const estadisticaDAO_Arr = require('./daoEstadisticaArray');
const funcionDAO_Arr = require('./daoFuncionArray');
const funcionDAO_DB = require('./daoFuncionDB');
const peliculaDAO_Arr = require('./daoPeliculaArray');
const peliculaDAO_DB = require('./daoPeliculaDB');
const reservaDAO_Arr = require('./daoReservaArray');
const salaDAO_Arr = require('./daoSalaArray');
const { mode } = require('../db/config');

function getEstadisticasDAO() {
    switch (mode) {
        case 'online': throw "not implemented DAO";
        case 'offline': return estadisticaDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

function getFuncionesDAO() {
    switch (mode) {
        case 'online': return funcionDAO_DB;
        case 'offline': return funcionDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

function getPeliculasDAO() {
    switch (mode) {
        case 'online': return peliculaDAO_DB;
        case 'offline': return peliculaDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

function getReservasDAO(){
    switch (mode) {
        case 'online': throw "not implemented DAO";
        case 'offline': return reservaDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

function getSalasDAO(){
    switch (mode) {
        case 'online': throw "not implemented DAO";
        case 'offline': return salaDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

module.exports = {
    getEstadisticasDAO,
    getFuncionesDAO,
    getPeliculasDAO,
    getReservasDAO,
    getSalasDAO
};
