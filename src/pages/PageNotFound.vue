<template>
  <div class="pageNotFound">
    <div class="description">
      <h3>This page does not exist, please review your link</h3>
      <div class="code-error">
        <p class="number">404</p>
        <p class="text">Page not Found</p>
      </div>
      <p>
        Return
        <router-link :to="{ name: 'homePage' }"><i> Home page</i></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {};
  },
};
</script>

<style  lang="scss" scoped>
.pageNotFound {
  .description {
    text-align: center;
    padding-top: 50px;
    h3 {
      margin: 0;
    }
    .code-error {
      margin: 32px 0;

      .number {
        font-size: 91px;
        font-weight: 600;
        letter-spacing: 16px;
        margin: 0px;
      }
      .text {
        margin-top: 0;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
}
</style>