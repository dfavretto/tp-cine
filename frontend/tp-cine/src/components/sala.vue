<template>
  <div class="cine">
    <div id="pantalla">
      <b-jumbotron text-variant="white" style="background: transparent !important">Pantalla</b-jumbotron>
    </div>
    <div id="asientos">
      <b-button-group size="sm">
        <b-button
          v-for="(btn, idx) in buttons"
          :key="idx"
          :pressed.sync="btn.state"
          variant="danger"
          :disabled="dataSala.butacas[idx]"
        >{{ btn.caption }}</b-button>
      </b-button-group>
    </div>
    <div id="formulario">
      <b-form @submit="onSubmit">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      form: {
        email: ""
      },
      name: "sala",
      urlSala: "http://127.0.0.1:8090/api/sala/",
      urlReserva: "http://127.0.0.1:8090/api/reserva",
      buttons: [],
      dataSala: {},
      asientos: [],
      funcionId: 0
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.buttons.forEach((button, index) => {
        this.dataSala.butacas[index] = button.state;
      });
      const reserva = {
        id: 0,
        email: this.form.email,
        cantAsientos: 2,
        funcion: this.funcionId,
        sala: this.dataSala
      };
      axios.post(this.urlReserva, reserva);
      alert(JSON.stringify(reserva));
      this.$router.push({ name: 'peliculas' })
    },
    obtenerSala() {
      axios
        .get(this.urlSala + this.funcionId)
        .then(response => {
          this.dataSala = response.data[0];
          // this.asientos = this.dataSala.butacas;
          this.dataSala.butacas.forEach((asiento, index) => {
            this.buttons.push({
              caption: `Asiento ${index}`,
              state: asiento
            });
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.obtenerSala();
  },

  created() {
    this.funcionId = this.$route.params.funcionId;
  }
};
</script>



<style>
#formulario {
  margin-top: 2%;
}
#pantalla {
  position: relative;
  margin-top: 2%;
  left: 25%;
  width: 50%;
  height: 70%;
  background-color: black;
  color: black;
}
#asientos {
  margin-top: 2%;
  width: 50%;
  left: 25%;
  position: relative;
}
body {
  margin: 60px;
}
.theatre {
  display: flex;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cinema-seats {
  display: flex;
}
.cinema-seats .seat {
  cursor: pointer;
}
.cinema-seats .seat:hover:before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
}
.cinema-seats .seat.active:before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 7px;
}
.left .cinema-row {
  transform: skew(-15deg);
  margin: 0 6px;
}
.left .seat {
  width: 35px;
  height: 50px;
  border-radius: 7px;
  background: linear-gradient(
    to top,
    #761818,
    #761818,
    #761818,
    #761818,
    #761818,
    #b54041,
    #f3686a
  );
  margin-bottom: 10px;
  transform: skew(20deg);
  margin-top: -32px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.left .row-2 {
  transform: skew(-13deg);
}
.left .row-2 .seat {
  transform: skew(18deg);
}
.left .row-3 {
  transform: skew(-12deg);
}
.left .row-3 .seat {
  transform: skew(16deg);
}
.left .row-4 {
  transform: skew(-11deg);
}
.left .row-4 .seat {
  transform: skew(15deg);
}
.left .row-5 {
  transform: skew(-10deg);
}
.left .row-5 .seat {
  transform: skew(12deg);
}
.left .row-6 {
  transform: skew(-9deg);
}
.left .row-6 .seat {
  transform: skew(10deg);
}
.left .row-7 {
  transform: skew(-7deg);
}
.left .row-7 .seat {
  transform: skew(8deg);
}
.right {
  margin-left: 70px;
}
.right .cinema-row {
  transform: skew(7deg);
  margin: 0 6px;
}
.right .seat {
  width: 35px;
  height: 50px;
  border-radius: 7px;
  background: linear-gradient(
    to top,
    #761818,
    #761818,
    #761818,
    #761818,
    #761818,
    #b54041,
    #f3686a
  );
  margin-bottom: 10px;
  transform: skew(-8deg);
  margin-top: -32px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.right .row-2 {
  transform: skew(9deg);
}
.right .row-2 .seat {
  transform: skew(-10deg);
}
.right .row-3 {
  transform: skew(10deg);
}
.right .row-3 .seat {
  transform: skew(-12deg);
}
.right .row-4 {
  transform: skew(11deg);
}
.right .row-4 .seat {
  transform: skew(-15deg);
}
.right .row-5 {
  transform: skew(12deg);
}
.right .row-5 .seat {
  transform: skew(-16deg);
}
.right .row-6 {
  transform: skew(13deg);
}
.right .row-6 .seat {
  transform: skew(-18deg);
}
.right .row-7 {
  transform: skew(15deg);
}
.right .row-7 .seat {
  transform: skew(-20deg);
}
</style>