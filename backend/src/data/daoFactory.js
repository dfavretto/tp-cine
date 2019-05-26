const peliculaDAO_Arr = require('./daoPeliculaArray');
const peliculaDAO_DB = require('./daoPeliculaDB');
const peliculaDAO_Arr = require('./daoFuncionArray');
const peliculaDAO_DB = require('./daoFuncionDB');
const { mode } = require('../config');

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
    getPeliculaDAO,
    getFuncionsDAO
};
