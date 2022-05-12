<template>
  <header class="header">
    <div class="container">
      <router-link exact-active-class="exact-active" to="/">Home</router-link>
      <router-link exact-active-class="exact-active" to="product"
        >Product</router-link
      >
      <router-link exact-active-class="exact-active" to="collection"
        >Collection</router-link
      >
    </div>
  </header>
  <!-- class-active="active" -->
</template>

<script>
export default {
  name: "header-comp",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #333;
  position: sticky;
  top: 0;
  a {
    color: #fff;
    display: inline-block;
    padding: 10px 18px;
    margin-right: 12px;
    text-decoration: none;
    &:hover {
      background-color: #ccc;
      color: #333;
      // color:#c0392b;
    }
  }
  .active {
    color: red;
  }
  .exact-active {
    color: #ecf0f1;
    background-color: #c0392b;
    font-weight: 600;
  }
}
</style>