<template>
  <div>
    <b-alert show variant="primary">Listado de Películas</b-alert>
    <b-table striped hover :items="peliculas"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "peliculas",
      url: "http://127.0.0.1:8090/api/pelicula",
      peliculas: []
    };
  },
  methods: {
    listarPeliculas() {
      axios

        .get(this.url)
        .then(response => {
          this.peliculas = response.data
        })
        .catch(e => {
          //console.log(2);
        });
    }
  },
  mounted() {
    this.listarPeliculas();
  }
};
</script>

