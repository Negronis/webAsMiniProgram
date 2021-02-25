import Vue from 'vue'
import VueRouter from 'vue-router'
import routerArray from './routes';
Vue.use(VueRouter)

const routes = [
  ...routerArray
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
