import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Offer from '@/components/offer'

Vue.use(Router)

export default new Router({
  // remove # hashbang from url
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/offer',
      name: 'Offer',
      component: Offer
    }

  ]
})
