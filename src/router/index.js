import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Meals = () => import('@/views/Meals.vue')
const Restaurants = () => import('@/views/Restaurants.vue')
const Ingredients = () => import('@/views/Ingredients.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: Ingredients
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
