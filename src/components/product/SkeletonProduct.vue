<template>
  <div class="loading" v-if="isLoad">
    <h3>{{ title }}</h3>
    <div class="card-text placeholder-glow mt-4">
      <p class="placeholder bg-primary placeholder-lg col-12 my-3 p-5"></p>
    </div>
    <div class="card-text placeholder-wave">
      <p class="placeholder bg-danger placeholder-lg col-12 my-3 p-5"></p>
    </div>
    <div class="card-text placeholder-glow">
      <p class="placeholder bg-warning placeholder-lg col-12 my-3 p-5"></p>
    </div>
    <div class="card-text placeholder-wave">
      <p class="placeholder bg-info placeholder-lg col-12 my-3 p-5"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonProduct",
  data() {
    return {
      title: "Loading ....",
    };
  },
  props: {
    isLoad: {
      type: Boolean,
      default: true,
    },
  },
};
</script>