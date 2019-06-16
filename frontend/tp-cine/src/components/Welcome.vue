<template>
    <div id="app">
        <h4 class="bg-primary text-white text-center p-2">
            Películas en cartelera (sí, ponemos lo que se nos canta)
        </h4>
        <div class="container-fluid p-4">
            <div class="row">
                <div class="col font-weight-bold">Título</div>
                <div class="col-2 font-weight-bold">Duración</div>
                <div class="col-3 font-weight-bold">Clasificación</div>
            </div>
            <div class="row" v-for="p in peliculas" v-bind:key="p.titulo">
                <div class="col">{{p.titulo}}</div>
                <div class="col-2">{{p.duracion}}</div>
                <div class="col-2">{{p.clasificacion}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            peliculas: [{ titulo: "Gran Torino", duracion: 125, clasificacion: 'M' },
                        { titulo: "Akira", duracion: 150, clasificacion: 'T' },
                        { titulo: "Bill & Ted's Excellent Adventure", duracion: 95, clasificacion: 'E' },
                        { titulo: "The Conjuring 2", duracion: 164, clasificacion: 'RP' }]
        }
    }
}
</script>

<style>

</style>
