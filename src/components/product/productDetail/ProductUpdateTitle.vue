<template>
  <div class="update-title">
    <span>Update title: </span>
    <input
      type="text"
      v-model="productTitle"
      placeholder="Enter your new title..."
      @keyup.enter="handleUpdateTitle"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductUpdateTitle",
  data() {
    return {
      productTitle: "",
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  watch: {
    title() {
      this.productTitle = this.title;
    },
    productTitle() {
      this.$emit("changTitle", this.productTitle);
    },
  },
  methods: {
    handleUpdateTitle() {
      this.$emit("attachUpdate");
    },
  },
  computed: {
    ...mapState("product", ["productItem"]),
  },
  created() {
    this.productTitle = this.productItem.title;
  },
};
</script>

<style lang="scss" scoped>
.update-title {
  span {
    margin: 8px 0 6px 0;
    font-weight: 700;
    color: #2c3e50;
  }
  padding: 24px 12px 0 12px;
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
    border: 1px solid rgba(41, 128, 185, 0.6);
    flex: 1;
    color: #2980b9;
    font-style: italic;
    &:focus {
      border: 2px solid;
      outline: none;
      background: rgba(236, 240, 241, 0.4);
    }
  }
  button {
    margin-left: 16px;
    background: blue;
    color: #fff;
    border: none;
  }
}
</style>