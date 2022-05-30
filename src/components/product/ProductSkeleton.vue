<template>
  <div class="loading" v-if="getIsLoading">
    <div class="base"></div>
    <div class="information">
      <div class="loadIcon"></div>
      <h3>Loading ....</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductSkeleton",
  computed: mapGetters("product", ["getIsLoading"]),
};
</script>

<style lang="scss">
.loading {
  position: relative;
  .base {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333;
    opacity: 0.4;
    z-index: 100;
  }
  .information {
    position: absolute;
    z-index: 999;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
    .loadIcon {
      width: 77px;
      height: 77px;
      border: 10px solid #fff;
      border-radius: 100rem;
      border-top-color: transparent;
      border-bottom-color: transparent;
      margin: auto;
      animation: loadtime 1s linear infinite;
    }
    h3 {
      font-size: 40px;
      color: #fff;
      margin: 12px 0 12px 54px;
    }
    @keyframes loadtime {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>