<template>
  <div class="product">
    <SkeletonLoading :isLoad="isLoad" />

    <div class="main-content" v-if="!isLoad">
      <ShowByQuantity v-on:changeLimit="handleChangeLimit($event)" />
      <SearchFeature v-on:changeSearch="handleResearch($event)" />
    </div>

    <TableProductVue :list="list" :isLoad="isLoad" />
  </div>
</template>

<script>
import productApi from "@/api/productApi";
import SkeletonLoading from "./SkeletonLoading.vue";
import TableProductVue from "./TableProduct.vue";
import SearchFeature from "./SearchFeature.vue";
import ShowByQuantity from "./ShowByQuantity.vue";

export default {
  name: "ProductList",
  data() {
    return {
      list: [],

      isLoad: true,
      isError: false,
      isSearch: false,
      params: {
        limit: 10,
        tags: 0,
        search: "",
      },
    };
  },
  components: {
    SkeletonLoading,
    TableProductVue,
    SearchFeature,
    ShowByQuantity,
  },

  methods: {
    async callData() {
      const ProductList = await productApi.getAll(this.params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(ProductList.products);
    },
    handleResearch(e) {
      this.params.search = e;
      this.callData();
    },
    handleChangeLimit(e) {
      console.log("Change limit");
      this.params.limit = e;
      this.callData();
    },
  },

  mounted() {
    this.callData();
  },
  computed: {},
};
</script>

<style lang="scss">
.product {
  h1 {
    color: #d63031;
    text-align: center;
  }

  .mt-4 {
    margin-top: 32px !important;
  }
}
</style>
