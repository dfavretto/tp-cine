<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">CINES</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            
            <router-link to="/peliculas">&nbsp; Películas |</router-link>
            <router-link to="/sala">&nbsp; Reservas |</router-link>
            <router-link to="/estadisticas">&nbsp; Estadísticas</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import home from "./components/home.vue";

export default {
  name: "app",
  components: {
    home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body a {
  text-align: center;
  color: #fff;
}
</style>
