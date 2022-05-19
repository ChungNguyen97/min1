<template>
  <div class="search-feature">
    <input
      type="text"
      name="search"
      id="search"
      v-model="searchText"
      placeholder="Nhập nội dung tìm kiếm..."
    />
    <button>Tìm</button>
  </div>
</template>

<script>
export default {
  name: "SearchFeature",
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style lang="scss">
.search-feature {
  border: 1px solid red;
}
</style>