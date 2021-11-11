import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/home/Home'
import List from '../pages/blog/list/List'
import About from '../pages/about/About.vue'
import Portfolio from '../pages/portfolio/Portfolio.vue'
import Contact from '../pages/contact/Contact.vue'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/list',
            component: List 
        },
        {
            path: '/about',
            component: About 
        },
        {
            path: '/portfolio',
            component: Portfolio 
        },
        {
            path: '/contact',
            component: Contact 
        },

    ]
})