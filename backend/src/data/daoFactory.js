const peliculaDAO_Arr = require('./daoPeliculaArray');
const peliculaDAO_DB = require('./daoPeliculaDB');
const funcionDAO_Arr = require('./daoFuncionArray');
const funcionDAO_DB = require('./daoFuncionDB');
const { mode } = require('../db/config');

function getPeliculasDAO() {
    switch (mode) {
        case 'online': return peliculaDAO_DB;
        case 'offline': return peliculaDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

function getFuncionsDAO() {
    switch (mode) {
        case 'online': return funcionDAO_DB;
        case 'offline': return funcionDAO_Arr;
        default: throw "invalid mode. check system config!";
    }
}

module.exports = {
    getPeliculasDAO,
    getFuncionsDAO
};
