import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
