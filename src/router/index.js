import Vue from 'vue'
import Router from 'vue-router'
import main from '../frontend/components/main'
import Stock from '../frontend/components/pages/stock'

import Production from '../frontend/components/pages/production'
import Deep from '../frontend/components/pages/production/deep'
import NewRecipe from '../frontend/components/pages/production/new-recipe'
import Plan from '../frontend/components/pages/production/plan'
import Recipes from '../frontend/components/pages/production/recipes'
import Display from '../frontend/components/pages/production/recipes/display'
import Add from '../frontend/components/pages/production/new-recipe/add'

import Reports from '../frontend/components/pages/reports'
import TechnologyCards from '../frontend/components/pages/reports/technology-cards'
import TechnologyCard from '../frontend/components/pages/reports/technology-cards/single'

import ActualStock from '../frontend/components/pages/stock/actual_stock'
import ReciveGoods from '../frontend/components/pages/stock/recive_goods'
import store from '../store/index'

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
      component: Display,
      name: 'display',
      props: true
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
      path: '/production/new-recipe/add',
      name: 'add',
      component: Add
    },
    {
      path: '/production/add_new_recipe',
      name: 'add_new_recipe',
      component: NewRecipe
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
      path: '/reports/technology_card',
      name: 'technology_card',
      component: TechnologyCard,
      props: true
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
  if (store.getters['frontend/is_logged'] === true && to.fullPath === '/') {
    next('/stock')
  } else if (store.getters['frontend/is_logged'] === false && to.fullPath !== '/') {
    router.push('/')
  }
  // console.log(this.a.app.$store)
  if (to.fullPath === '/production/recipes/display') {
    // console.log('tutaj nalezy umiescic funkcje ktora bedzie czyscic kolumny w storze i tworzyc kolumny oraz wiersze')
  }
  next()
})
export default router
