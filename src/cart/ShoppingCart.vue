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
              <img :src="item.image" class="image img-thumbnail" />
            </td>
            <td class="item-details">
              <a :href="item.url" target="_blank">{{ item.productName }}</a>
              - {{ item.manufacturer }}
              <p class="description">{{ item.description }}</p>
            </td>
            <td class="quantity">
              <div>{{ item.quantity }}</div>
              <div class="available">({{ item.available }} available)</div>
            </td>
            <td class="price">{{ item.price }}</td>
            <td class="item-total">{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <strong>Total: {{ total }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
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
  width: 100px;
  height: 100px;
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