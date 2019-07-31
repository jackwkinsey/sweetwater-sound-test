<template>
  <div>
    <button @click="decreaseAmount()">-</button>
    <span>{{ amount }}</span>
    <button @click="increaseAmount()">+</button>
  </div>
</template>

<script>
function valueIsPositive(value) {
  return value > 0;
}

export default {
  name: 'QuantitySelector',
  data() {
    return {
      amount: this.initialAmount,
    };
  },
  created() {
    this.emitAmountChanged();
  },
  updated() {
    this.emitAmountChanged();
  },
  props: {
    maxAmount: {
      type: Number,
      required: true,
      validator: valueIsPositive,
    },
    initialAmount: {
      type: Number,
      validator: valueIsPositive,
    },
  },
  methods: {
    emitAmountChanged() {
      this.$emit('amountChanged', this.amount);
    },
    decreaseAmount() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
    increaseAmount() {
      if (this.amount < this.maxAmount) {
        this.amount++;
      }
    },
  },
};
</script>

<style></style>
