import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout'
import Test from '@/views/test.vue'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children:[
      {
        name:'Home',
        path:'/home',
        component:()=>import('@/views/Home.vue'),
        meta:{title:'首页'},
      },
      {
        name:'Form',
        path:'/form',
        component:()=>import('@/views/Form.vue')
      },
      {
        name:'World',
        path:'/world',
        component:()=>import('@/views/world.vue')
      },
      {
        name:'News',
        path:'/news',
        component:()=>import('@/views/news.vue')
      },
      {
        name:'About',
        path:'/about',
        component:()=>import('@/views/About.vue')
      },
      {
        name:'Station',
        path:'/station',
        component:()=>import('@/views/station.vue')
      },
      {
        name:'Test',
        path:'/test',
        component:()=>import('@/views/test.vue')
      }
    ]
  },

]



const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})


export default router
