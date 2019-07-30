import Vue from 'vue';
import Vuex from 'vuex';
import items from './data/items.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items,
  },
  mutations: {},
  actions: {},
});
