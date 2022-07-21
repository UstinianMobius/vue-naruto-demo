import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('@/views/home/HomePage.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/about/AboutPage.vue')
    }
]

export const router = new VueRouter({
    mode: 'hash',
    routes
})
