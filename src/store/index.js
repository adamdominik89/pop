import Vue from 'vue'
import Vuex from 'vuex'

import frontend from './frontend/frontend'
import production from './frontend/production'
import deep from './frontend/deep'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // namespace w store
    frontend,
    production,
    deep
  }
})
