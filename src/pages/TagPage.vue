<template>
  <div class="tag-page container">
    <tag-search />
    <tag-list />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import TagList from "@/components/tags/TagList.vue";
import TagSearch from "@/components/tags/TagSearch.vue";

export default {
  name: "TagPage",
  data() {
    return {};
  },
  components: {
    TagList,
    TagSearch,
  },
};
</script>

<style lang="scss" scoped>
.tag-page {
  background: #fff;
}
</style>