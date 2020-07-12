import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score:0
  },
  mutations: {
    onSelected: state => state.score++
  },
  actions: {
  },
  modules: {
  },
  getters:{
    score:state => {return state.score}
  }
})
