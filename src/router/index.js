import Vue from 'vue'
import Router from 'vue-router'
import main from '../frontend/components/main'
import Stock from '../frontend/components/pages/stock'
import Production from '../frontend/components/pages/production'
import Reports from '../frontend/components/pages/reports'
import ActualStock from '../frontend/components/pages/stock/actual_stock'
import ReciveGoods from '../frontend/components/pages/stock/recive_goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock

    },
    {
      path: '/production',
      name: 'production',
      component: Production
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/stock/actual_stock',
      name: 'actual_stock',
      component: ActualStock
    },
    {
      path: '/stock/recive_goods',
      name: 'recive_goods',
      component: ReciveGoods
    }
  ]
})
