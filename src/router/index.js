import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from `@/views/LoginPage.vue`
import GamePage from `@/views/GamePage.vue`

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    component : loginPage,
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
