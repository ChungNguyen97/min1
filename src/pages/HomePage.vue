<template>
  <div class="homepage container">
    <h1>{{ label }}</h1>
    <p class="redirect-to-product">
      Xem danh sách sản phẩm tại
      <router-link  :to="{name:'homePage'}"
        >Product Page</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      label: "Trang chủ",
    };
  },
};
</script>

<style scoped lang="scss">
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
