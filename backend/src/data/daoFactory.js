const peliculaDAO_Arr = require('./daoPeliculaArray');
const peliculaDAO_DB = require('./daoPeliculaDB');
const funcionDAO_Arr = require('./daoFuncionArray');
const funcionDAO_DB = require('./daoFuncionDB');
const salaDAO_DB = require('./daoSalaDB');
const { mode } = require('../db/config');

function getPeliculasDAO() {
    switch (mode) {
        case 'online': return peliculaDAO_DB;
        case 'offline': return peliculaDAO_Arr;
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

function getSalasDAO() {
    switch (mode) {
        case 'online': return salaDAO_DB;
        case 'offline': throw "not implemented DAO";
        default: throw "invalid mode. check system config!";
    }
}

module.exports = {
    getPeliculasDAO,
    getFuncionesDAO,
    getSalasDAO
};
