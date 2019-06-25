<template>
  <div>
    <b-alert show variant="primary">Listado de Películas</b-alert>
    <b-card-group deck id="cardGroup">
      <b-card
        v-for="(pelicula, index) in peliculas"
        v-bind:key="index"
        :title="pelicula.titulo"
        img-src="https://picsum.photos/600/300/?image=25"
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
			to="/sala">{{funcion.horario}}</b-link>
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
	}
  },
  mounted() {
    this.listarPeliculas();
    this.listarHorarios();
  }
};
</script>

<style>
	#cardGroup {
		margin-left: 5%;
	}
</style>