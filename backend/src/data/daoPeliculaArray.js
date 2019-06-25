const Pelicula = require('../models/pelicula').Pelicula;

const peliculas = [
    new Pelicula(0, 'Hulk', '35', 'M', "https://i.kym-cdn.com/entries/icons/original/000/029/827/cover4.jpg"),
    new Pelicula(1, 'Batman', '45', 'T', "https://s3-sa-east-1.amazonaws.com/assets.abc.com.py/2017/06/10/adam-west-personifico-a-batman-en-los-anos-60-_970_546_1501595.jpg"),
    new Pelicula(2, 'El padrino', '50', 'RP', "https://static1.squarespace.com/static/585c0c61197aeafef00344cd/5abbd144352f53d18600da1e/5abbd1461ae6cf78145f521f/1522258259597/O4.jpg"),
    new Pelicula(3, 'Unknown', '64', 'T', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrUn2QHmIDE6JLTb4sADQ__EmJzPu-h9bVglKmh5gXLnS9_su"),
    new Pelicula(4, 'Pokemon', '48', 'E', "https://i.kym-cdn.com/entries/icons/mobile/000/029/740/detpikachu.jpg")
];

async function getAll() {
    return peliculas;
}

async function getByTitulo(titulo) {
    return filterByTtitulo(peliculas, titulo);
}

function filterByTtitulo(elems, val) {
    const result = []
    for (const elem of elems) {
        if (elem.titulo == val) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = {
    getAll,
    getByTitulo
}