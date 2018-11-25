import Vue from 'vue'
import Vuex from 'vuex'

import frontend from './frontend/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // namespace w store
    frontend,
  },
})
