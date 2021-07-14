import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  INCREMENT() {
    state.count++
  },
  DECREMENT() {
    state.count--
  }
}

const actions = {
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
const getters = {
  evenOrOdd(state) {
    return state.count% 2===0? '偶数':'奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
