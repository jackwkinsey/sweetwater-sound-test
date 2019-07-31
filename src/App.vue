<template>
  <div id="app" class="container">
    <shopping-cart />
  </div>
</template>

<script>
import ShoppingCart from './cart/ShoppingCart';

export default {
  name: 'app',
  components: { ShoppingCart },
};
</script>

<style></style>
