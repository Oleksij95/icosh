import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us/',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/faq/',
    name: 'Faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/price/',
    name: 'Price',
    component: () => import('../views/Price.vue')
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('../views/Course')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else{
      return { x: 0, y: 0 }
    }
    
  }
})


export default router
