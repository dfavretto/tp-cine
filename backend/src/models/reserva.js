class Reserva {
    id = 0;
    constructor(email, cantAsientos, funcion) {
        this.email = email;
        this.cantAsientos = cantAsientos;
        this.funcion = funcion;
    }
}

exports.Reserva = Reserva;