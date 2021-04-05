import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Greeting from '@/components/Greeting'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/greeting',
      name: 'Greeting',
      component: Greeting
    },
    {
      path: '/users/:id/',
      name: 'Users',
      component: Users
    }
  ]
})
