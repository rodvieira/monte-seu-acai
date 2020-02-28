import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pedido: {},
  },

  mutations: {
    SET_PEDIDO(state, data) {
      state.pedido = data;
    },
  },

  actions: {
    setPedido({ commit }, data) {
      commit('SET_PEDIDO', data);
    },
  },
});
