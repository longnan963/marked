import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import One from '@/components/One'
import Tow from '@/components/Tow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/One',
      name: 'One',
      component: One
    },
    {
      path: '/Tow',
      name: 'Tow',
      component: Tow
    }
  ]
})
