<template>
  <div
    class="homepage"
    :style="{ backgroundImage: `url(${backgroundHomePage})` }"
  >
    <div class="content">
      <h1>{{ label }}</h1>
      <p class="redirect-to-product">
        See a list of products at:
        <router-link :to="{ name: 'productPage' }">Product Page</router-link>
      </p>
      
    </div>
  </div>
</template>

<script>
import backgroundHomePage from "@/assets/image/background_homepage.jpg";
export default {
  name: "HomePage",
  data() {
    return {
      label: "Home page",
      backgroundHomePage,
    };
  },
};
</script>

<style  lang="scss" scoped>
.homepage {
  
  background-size: cover;
  height: 100vh;
  .content {
    padding-top: 60px;
    h1 {
      text-align: center;
      margin: 0;
    }

    .redirect-to-product {
      text-align: center;
      font-size: 20px;
      font-style: italic;
      font-family: cursive;
    }
  }
}
</style>
