import Vue from 'vue'
import Router from 'vue-router'
import main from '../frontend/components/main'
import Stock from '../frontend/components/pages/stock'
import Production from '../frontend/components/pages/production'
import Reports from '../frontend/components/pages/reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
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
