<template>
  <div>
    <h1>Your Cart</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th class="text-center">Qty</th>
            <th class="text-right">Price</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td class="item-image">
              <img :src="item.image" class="image" />
            </td>
            <td class="item-details">
              <a :href="item.url" target="_blank">{{ item.productName }}</a>
              - {{ item.manufacturer }}
              <p class="description">{{ item.description }}</p>
            </td>
            <td class="quantity">
              <div>
                <quantity-selector
                  :maxAmount="item.available"
                  :initialAmount="item.quantity"
                  @amountChanged="amount => amountChanged(item, amount)"
                />
              </div>
              <div class="available">({{ item.available }} available)</div>
              <div>
                <button @click="removeItem(item)">Remove</button>
              </div>
            </td>
            <td class="price">{{ item.price | currency }}</td>
            <td class="item-total">
              {{ (item.price * item.quantity) | currency }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="text-right">
        <h3>Total: {{ total | currency }}</h3>
        <button @click="saveCart()">Save Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import currencyFilter from '../filters/currency-filter';
import QuantitySelector from './QuantitySelector';

export default {
  name: 'Cart',
  filters: {
    currency: currencyFilter,
  },
  components: {
    QuantitySelector,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let total = 0;

      this.cart.forEach(item => {
        total += item.price * item.quantity;
      });

      return total;
    },
  },
  methods: {
    amountChanged(item, amount) {
      this.$store.commit('changeItemQuantity', {
        item,
        quantity: amount,
      });
    },
    removeItem(item) {
      this.$store.commit('removeItemFromCart', item);
    },
    saveCart() {
      this.$store.dispatch('saveCart');
    },
  },
};
</script>

<style scoped>
td {
  vertical-align: top;
  padding: 10px 0 10px 0;
}

h3 {
  margin-top: 0px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  width: 100px !important;
  height: 100px !important;
}

.item-details {
  width: 400px;
}

.quantity {
  width: 100px;
  text-align: center;
}

.price,
.item-total {
  text-align: right;
}

.description,
.available {
  font-size: 0.8rem;
}
</style>
