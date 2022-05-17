<template>
  <div class="showByQuantity">
    <label for="number">Xem theo số lượng: </label>
    <input
      type="number"
      name="number"
      id="number"
      ref="inputNumber"
      placeholder="Nhập số lượng bạn muốn xem"
      @change="handleChange($event)"
    />
    <button v-on="handleSendNumber()">Xem</button>
  </div>
</template>

<script>
export default {
  name: "ShowByQuantity",
  data() {
    return {
      number: null,
    };
  },
  methods: {
    handleChange(e) {
      this.number = e.target.value;
    },
    handleSendNumber() {
      this.$emit("changeLimit", this.number);
    },
  },
};
</script>
<style lang="scss" scoped>
.showByQuantity {
  margin-top: 12px;
  input {
    padding: 3px 12px;
    margin:0 12px;
  }
  button {
    padding: 3px 12px;
    border: 1px solid;
  }
}
</style>