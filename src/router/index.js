import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Mine from '@/views/Mine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mine',
    name: 'Index',
    component: Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
