const routes = [
    { path: '/distancias', component: httpVueLoader('distancias.vue'), props: true },
    { path: '/profesores', component: httpVueLoader('profesores.vue'), props: true },
    { path: '/pesos', component: httpVueLoader('pesos.vue'), props: true },
    { path: '/temperaturas', component: httpVueLoader('temperaturas.vue'), props: true }
]

const router = new VueRouter({
    routes: routes // short for `routes: routes`
})

const app = new Vue({
    router,
    el: "#app",
    data: {
        titulo: "Tarea #7: Marco Murillo",
        selected: ''
    }
}).$mount('#app')