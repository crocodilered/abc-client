import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const routes = [
  { path: '/', component: () => import('@/views/home') },
  { path: '/list/:offset', component: () => import('@/views/list') },
  { path: '/publish/:secretKey', component: () => import('@/views/publish') }
]


const router = new Router({
  mode: 'history',
  routes
})


export default router
