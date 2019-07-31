<template>
  <div>
    <h1>Your Cart</h1>
    <div class="item" v-for="(item, index) in cart" :key="index">
      <div>
        <img :src="item.image" class="item-image" />
      </div>
      <div class="item-details">
        <h3 class="name">
          <a :href="item.url" target="_blank">{{ item.productName }}</a> -
          <small>{{ item.manufacturer }}</small>
        </h3>
        <p class="description">{{ item.description }}</p>
      </div>
      <div class="item-cost">
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <span>{{ item.price }}</span>
        <span>{{ item.quantity }}</span>
        <span>{{ item.price * item.quantity }}</span>-->
      </div>
    </div>
    <div>Total: {{ total }}</div>
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
