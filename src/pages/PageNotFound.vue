<template>
  <div
    class="pageNotFound"
    :style="{ backgroundImage: `url(${imageNotFound})` }"
  >
    <div class="description">
      <h3>Trang này không tồn tại, xem lại đường dẫn của bạn</h3>
      <p>
        Quay về
        <router-link :to="{ name: 'homePage' }"><i>Trang chủ</i></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import imageNotFound from "@/assets/image/image_404error.png";

export default {
  name: "PageNotFound",
  data() {
    return {
      imageNotFound,
    };
  },
};
</script>

<style  lang="scss" scoped>
.pageNotFound {
  width: 100%;
  height: 100vh;
  background-position: center;
  .description {
    text-align: center;
    padding-top: 50px;
    h3 {
      margin: 0;
    }
  }
}
</style>