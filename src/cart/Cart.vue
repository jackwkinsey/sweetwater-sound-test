<template>
  <div>
    <h1>Your Cart</h1>
    <div class="item" v-for="(item, index) in cart" :key="index">
      <div class="image">
        <img :src="item.image" />
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

<style></style>
