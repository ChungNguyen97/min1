<template>
  <div class="loading" v-if="isLoad">
    <h3>Loading ....</h3>

    <div class="card-text placeholder-glow mt-4">
      <p class="placeholder bg-primary placeholder-lg col-12 my-2 p-5"></p>
    </div>
    <div class="card-text placeholder-wave">
      <p class="placeholder bg-danger placeholder-lg col-12 my-2 p-5"></p>
    </div>
    <div class="card-text placeholder-glow">
      <p class="placeholder bg-warning placeholder-lg col-12 my-2 p-5"></p>
    </div>
    <div class="card-text placeholder-wave">
      <p class="placeholder bg-info placeholder-lg col-12 my-2 p-5"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoading",
  props: {
    isLoad:{
      type:Boolean
    }
  },
};
</script>

<style lang="scss">
.loading {
  margin-top: 50px;

  h3 {
    text-align: center;
    font-style: italic;
    font-size: 32px;
  }
}
</style>