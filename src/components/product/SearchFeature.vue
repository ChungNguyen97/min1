<template>
  <div class="search">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Nhập nội dung tìm kiếm"
      v-model="contentSearch"
    />
    <button v-on:click="handleSearch()">Tìm kiếm</button>
  </div>
</template>

<script>
export default {
  name: "SearchFeature",
  data() {
    return {
      contentSearch: "",
    };
  },

  methods: {
    handleSearch() {
      this.$emit("changeSearch", this.contentSearch);
    },
  },
};
</script>


<!-- === SCSS === -->
<style lang="scss" scoped>
.search {
  margin-top: 32px;
  display: flex;
  padding: 12px;
  gap: 16px;
  justify-content: center;
  input {
    width: 60%;
    padding: 3px 12px;
  }
  button {
    border: none;
    outline: none;
    background: blue;
    color: #fff;
    padding: 3px 12px;
  }
}
</style>