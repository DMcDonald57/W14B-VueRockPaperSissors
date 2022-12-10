import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import GamePage from '@/views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    component : HomePage,
  },
  {
    path : "/Gameon",
    component : GamePage,
  }
]


const router = new VueRouter({
  routes
})

export default router
