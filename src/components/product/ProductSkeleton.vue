<template>
  <div class="skeleton">
    <div class="information">
      <div class="loadIcon"></div>
      <h3>Loading ....</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSkeleton",
};
</script>

<style lang="scss" scoped>
.skeleton {
  background: red;
  text-align: center;
  padding: 20px 0;
  background: #333;
  display: flex;
  opacity: 0.75;
  .information {
    margin: auto;
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