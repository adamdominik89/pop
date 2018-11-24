import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../frontend/components/HelloWorld'
import Stock from '../frontend/components/pages/stock'
import Production from '../frontend/components/pages/production'
import Reports from '../frontend/components/pages/reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock,

    },
    {
      path: '/production',
      name: 'production',
      component: Production,
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
    }
  ]
})
