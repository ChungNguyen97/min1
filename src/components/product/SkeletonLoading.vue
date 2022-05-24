<template>
  <div class="loading" v-if="getIsLoading">
    <h3>Loading ....</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "SkeletonLoading",
  computed: mapGetters(['getIsLoading'])
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