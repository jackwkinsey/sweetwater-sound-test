<template>
  <div>
    <h1>Your Cart</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td>
              <img :src="item.image" />
            </td>
            <td>
              <h3 class="name">
                <a :href="item.url" target="_blank">{{ item.productName }}</a> -
                <small>{{ item.manufacturer }}</small>
              </h3>
              <p class="description">{{ item.description }}</p>
            </td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.price * item.quantity }}</td>
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
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-image {
  width: 125px;
  height: 125px;
}

.item-details {
  width: 450px;
}
</style>
