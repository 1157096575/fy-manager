import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('components/common/login')), 'Login')
const Home = r => require.ensure([], () => r(require('@/Home')), 'Home')

export default new Router({
  routes: [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    }
  ]
})
