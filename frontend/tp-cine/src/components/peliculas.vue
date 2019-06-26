<template>
  <div>
    <b-alert show variant="primary">Listado de Películas</b-alert>
    <b-card-group deck id="cardGroup">
      <b-card
        v-for="(pelicula, index) in peliculas"
        v-bind:key="index"
        :title="pelicula.titulo"
        :img-src="pelicula.poster"
        :img-alt="pelicula.titulo"
        img-top
        tag="pelicula"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>La pelicula {{pelicula.titulo}} tiene una duracion de {{pelicula.duracion}} minutos y una clasificacion de "{{pelicula.clasificacion}}".</b-card-text>

        <b-link
			class="btn btn-primary"
			v-for="(funcion, index) in filtrarHorarios(pelicula.titulo)"
			v-bind:key="index"
			:to="{ name: 'sala', params: { funcionId: funcion.id } }">{{funcion.horario}}</b-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
		name: "peliculas",
		urlPelicula: "http://127.0.0.1:8090/api/pelicula",
		urlFuncion: "http://127.0.0.1:8090/api/funcion/",
		urlReserva: "http://127.0.0.1:8090/api/reserva/",
		peliculas: [],
		funciones: []
    };
  },
  methods: {
    listarPeliculas() {
      /* eslint-disable */
      axios
        .get(this.urlPelicula)
        .then(response => {
          this.peliculas = response.data;
        })
        .catch(e => {
          console.log(e);
        });
	},
	listarHorarios() {
		axios
			.get(this.urlFuncion)
			.then(response => {
				this.funciones = response.data;
			})
			.catch(e => {
				console.log(e);
			})
	},
    filtrarHorarios(peliculaId) {
		const horariosFiltrados = [];
		for (const funcion of this.funciones) {
			if (funcion.peliculaId == peliculaId) {
				horariosFiltrados.push(funcion);
			}
		}
		return horariosFiltrados;
	},
	pruebaPost() {
		axios
			.post(this.urlReserva, {
				"id": 6,
				"email": "jeremias.hsn@gmail.com",
				"cantAsientos": 7,
				"funcion": {
					"id": 8,
					"horario": "17:54"
				}
			})
			.then(response => {
				console.log(response);
			})
			.catch(e => {
				console.log(e);
			})
	},
  },
  mounted() {
    this.listarPeliculas();
    this.listarHorarios();
    this.pruebaPost();
  }
};
</script>

<style>
	#cardGroup {
		margin-left: 5%;
	}
</style>