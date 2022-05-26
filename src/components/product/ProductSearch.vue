<template>
  <div class="search-feature">
    <input
      type="text"
      name="search"
      id="search"
      v-model="searchText"
      placeholder="Nhập nội dung tìm kiếm..."
    />
    <button @click="searchText=''">Clear</button>
  </div>
</template>

<script>
export default {
  name: "product-search",
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText() {
      this.$emit("updateSearch", this.searchText);
    },
  },
};
</script>

<style lang="scss">
.search-feature {
  margin: 12px auto;
  text-align: center;
  input{
    padding: 5px 12px;
    border-radius: 8px;
    min-width: 500px;
    @media only screen and (max-width:768px){
      max-width: 100%;
    }
  }
  button{
    padding: 7px 12px;
    border: none;
    margin: 0 0 0 12px;
    color: #fff;
    background: blue;
    border-radius: 4px;
  }
}
</style>