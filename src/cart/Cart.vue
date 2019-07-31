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
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
}
</style>
