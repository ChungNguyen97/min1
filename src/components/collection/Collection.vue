<template>
  <div class="collection">
    <h3>{{ label }}</h3>
  </div>
</template>

<script>
// import productApi from "@/api/productApi";
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)

export default {
  name: "collection-comp",
  data() {
    return {
      label: "Collection page",
      newList: [],
    };
  },
  created() {
    // const CallApi = async () => {
    //   const params = {
    //     previous_page_cursor: "after",
    //     limit: 2,
    //   };
    //   const ProductList = await productApi.getAll({ params });
    //   console.log(ProductList);
    // };
    // CallApi();
    // (async () => {
    //   const params = {
    //     previous_page_cursor: "after",
    //     limit: 2,
    //   };
    //   const ProductList = await productApi.getAll({ params });
    //   console.log(ProductList.products);
    // })();
  },
};
</script>

<style lang="scss" scoped>
</style>