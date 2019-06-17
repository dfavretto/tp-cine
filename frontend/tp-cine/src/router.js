import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'peliculas',
            component: () => import('./components/peliculas.vue')
        },
        {
            path: '/sala',
            name: 'sala',
            component: () => import('./components/sala.vue')
        },
        {
            path: '/peliculas',
            name: 'peliculas',
            component: () => import('./components/peliculas.vue')
        },
        {
            path: '/estadisticas',
            name: 'estadisticas',
            component: () => import('./components/estadisticas.vue')
        },
    ]
})