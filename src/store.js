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
    removeItemFromCart(state, item) {
      const index = state.cart.findIndex(i => item.itemid === i.itemid);

      if (index > -1) {
        state.cart.splice(index, 1);
      }
    },
    changeItemQuantity(state, payload) {
      const { item, quantity } = payload;
      const foundItem = state.cart.find(i => item.itemid === i.itemid);

      if (foundItem) {
        foundItem.quantity = quantity;
      }
    },
  },
});
