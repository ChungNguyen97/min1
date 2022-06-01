<template>
  <div class="homepage container">
    <h1>{{ label }}</h1>
    <p class="redirect-to-product">
    See a list of products at: 
      <router-link :to="{ name: 'productPage' }">Product Page</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      label: "Home page",
    };
  },
};
</script>

<style  lang="scss" scoped>
.homepage {
  h1 {
    text-align: center;
    margin: 48px auto;
  }

  .redirect-to-product {
    text-align: center;
    font-size: 20px;
    font-style: italic;
    font-family: cursive;
  }
}
</style>
