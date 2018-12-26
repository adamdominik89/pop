import Vue from 'vue'
import Router from 'vue-router'
import main from '../frontend/components/main'
import Stock from '../frontend/components/pages/stock'

import Production from '../frontend/components/pages/production'
import Deep from '../frontend/components/pages/production/deep'
import AddNewRecipe from '../frontend/components/pages/production/add-new-recipe'
import Plan from '../frontend/components/pages/production/plan'
import Recipes from '../frontend/components/pages/production/recipes'
import Display from '../frontend/components/pages/production/recipes/display'

import Reports from '../frontend/components/pages/reports'
import TechnologyCards from '../frontend/components/pages/reports/technology-cards'

import ActualStock from '../frontend/components/pages/stock/actual_stock'
import ReciveGoods from '../frontend/components/pages/stock/recive_goods'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/production/recipes/display',
      name: 'display',
      component: Display
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
      path: '/production/deep',
      name: 'production_deep',
      component: Deep
    },
    {
      path: '/production/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/production/add_new_recipe',
      name: 'add_new_recipe',
      component: AddNewRecipe
    },
    {
      path: '/production/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/reports/technology_cards',
      name: 'technology_cards',
      component: TechnologyCards
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
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.fullPath === '/production/recipes/display') {
    console.log('tutaj nalezy umiescic funkcje ktora bedzie czyscic kolumny w storze i tworzyc kolumny oraz wiersze')
  }
  // zeby dodac nowy link to trzeba wywoalcc metode router.addRoutes
  next()
})
export default router
