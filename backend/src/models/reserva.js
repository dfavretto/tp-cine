class Reserva {
    constructor(id, email, cantAsientos, funcion) {
        this.id = id;
        this.email = email;
        this.cantAsientos = cantAsientos;
        this.funcion = funcion;
    }
}

exports.Reserva = Reserva;