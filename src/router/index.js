import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Mine from '@/views/Mine'
import Shopping from '@/views/Shopping'
import Listshop from '@/views/Listshop'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/list',
    name: 'List',
    component: Listshop
  }
]

const router = new VueRouter({
  routes
})

export default router


