<template>
  <header class="header">
    <nav class="container">
      <router-link exact-active-class="exact-active" to="/">Home</router-link>
      <router-link exact-active-class="exact-active" to="/product"
        >Product</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
};
</script>

<style lang="scss" scoped>
header.header {
  box-shadow: 0 1px 5px #777;
  background-color: #333;
  nav {
    a {
      display: inline-block;
      margin-right: 12px;
      padding: 10px 12px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
    }
  }
}

.exact-active{
  color:violet !important;
  background-color: #ccc;
}
</style>