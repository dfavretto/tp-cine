class Sala {
    constructor(id, funcionId) {
        this.id = id;
        this.butacas = new Array (8);
        for (let index = 0; index < this.butacas.length; index++) {
            this.butacas[index] = false;
        }
        this.funcionId = funcionId;
    }
}

exports.Sala = Sala;