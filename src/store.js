import Vue from 'vue';
import Vuex from 'vuex';
import cart from './data/items.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart,
  },
  mutations: {
    addItemToCart(state, item) {
      state.cart.push(item);
    },
    changeItemQuantity(state, payload) {
      const { item, quantity } = payload;
      let foundItem = state.cart.find(i => item.itemid === i.itemid);

      if (foundItem) {
        foundItem.quantity = quantity;
      }
    },
  },
});
