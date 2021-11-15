import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/home/Home'
import Articles from '../pages/blog/articles/Articles'
import About from '../pages/about/About.vue'
import Portfolio from '../pages/portfolio/Portfolio.vue'
import Contact from '../pages/contact/Contact.vue'

// erro when click same route component multi times
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, onResolved, onRejected) {
    // if there is no callback passed to push(just passed a router obj), 
    // then return origin push
    if (onResolved === undefined && onRejected === undefined) {
        return originPush.call(this, location).catch(() => {})
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
    // if there is no callback passed to replace(just passed a router obj), 
    // then return origin replace 
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => {})
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/articles',
            component: Articles 
        },
        {
            path: '/about',
            component: About,
            meta: {
                isHidden: true
            }
        },
        {
            path: '/portfolio',
            component: Portfolio,
            meta: {
                isHidden: true
            }
        },
        {
            path: '/contact',
            component: Contact,
            meta: {
                isHidden: true
            }
        },

    ]
})