import { createStore } from 'vuex'
import auth from '@/modules/auth.module'

export default createStore({
  modules: {
    auth
  },
  state () {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
