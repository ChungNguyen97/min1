<template>
  <div class="update-title">
    <span>Update title: </span>
    <input
      type="text"
      v-model="productTitle"
      placeholder="Enter your new title..."
    />
  </div>
</template>

<script>
export default {
  name: "ProductUpdateTitle",
  data() {
    return {
      productTitle: "",
    };
  },
  watch: {
    productTitle() {
      this.$emit("changTitle", this.productTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
.update-title {
  span {
    margin: 8px 0 6px 0;
    font-weight: 700;
  }
  padding: 12px 12px 0 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 16px;
  input,
  button {
    padding: 5px 12px;
    border-radius: 5px;
  }
  input {
    border: 1px solid;
    flex: 1;
  }
  button {
    margin-left: 16px;
    background: blue;
    color: #fff;
    border: none;
  }
}
</style>