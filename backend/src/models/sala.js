export class Sala {
    constructor(numero) {
        this.numero = numero;
        const CANT_FILAS = 5;
        const BUTACAS_FILA = 6;
        this.butacas = new Array (CANT_FILAS);
        this.butacas.forEach(fila => {
            fila = new Array (BUTACAS_FILA);
            fila.forEach(butaca => {
                butaca = false;
            });
        });
    }
}