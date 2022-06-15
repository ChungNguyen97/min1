<template>
  <section
    class="homepage"
    :style="{ backgroundImage: `url(${backgroundHomePage})` }"
  >
    <div class="content">
      <h1>{{ $t("homePage.title") }}</h1>
      <p class="redirect-to-product">
        {{ $t("homePage.instruction") }}:
        <router-link :to="{ name: 'productPage' }">{{
          $t("homePage.to")
        }}</router-link>
      </p>
    </div>
  </section>
</template>

<script>
import backgroundHomePage from "@/assets/image/background_homepage.jpg";
export default {
  name: "HomePage",
  data() {
    return {
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
