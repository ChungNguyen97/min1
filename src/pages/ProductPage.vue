<template>
  <div class="product container">
    <div class="showInformationAll" v-if="this['login/getStatusLogin']">
      <skeleton-loading-vue />
      <div class="control">
        <h1>PRODUCT LIST</h1>
        <div class="search">
          <product-search-vue v-on:updateSearch="handleUpdateSearch" />
          
        </div>
        <div class="filter">
          <product-vendor v-on:changeSelect="handleChangeVendor" />
          <product-collection
            class="collect"
            v-on:changeSelect="handleChangeSelect"
          />
        </div>
      </div>
      <table-product-vue />
      <product-pagination v-on:changePagination="handleChangePagination" />
    </div>

    <p v-else class="warn-login">
      Bạn cần đăng nhập để xem danh sách sản phẩm.
      <router-link class="redirect" to="/login">Đăng nhập ngay</router-link>
    </p>
  </div>
</template>

<script>
import TableProductVue from "@/components/product/ProductTable.vue";
import SkeletonLoadingVue from "@/components/product/ProductSkeleton.vue";
import ProductSearchVue from "@/components/product/ProductSearch.vue";
import ProductCollection from "@/components/product/ProductCollection";
import ProductPagination from "@/components/product/ProductPagination";
import ProductVendor from "@/components/product/ProductVendor";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "ProductPage",
  data: () => ({
    search: "",
    collecion: "",
    cursor: {},
    vendor: "",
  }),
  components: {
    TableProductVue,
    SkeletonLoadingVue,
    ProductSearchVue,
    ProductCollection,
    ProductPagination,
    ProductVendor,
  },
  methods: {
    handleUpdateSearch(searchText) {
      this.search = searchText;
    },
    ...mapActions(["product/getDataProduct"]),
    handleChangeSelect(payload) {
      this.collecion = payload;
    },
    handleChangeVendor(payload) {
      this.vendor = payload;
    },
    handleChangePagination(data) {
      console.log("handleChangePagination data", data);
      this.cursor = data;
    },
  },
  computed: {
    ...mapGetters(["login/getStatusLogin", "product/getProductList"]),
    ...mapState("product", ["isLoading"]),
  },
  watch: {
    search() {
      this.$store.dispatch("product/getDataProduct", { search: this.search });
    },
    collecion() {
      this.$store.dispatch("product/getDataProduct", {
        collection: this.collecion,
      });
    },
    cursor() {
      console.log("change");
      this.$store.dispatch("product/getDataProduct", this.cursor);
    },
    vendor() {
      this.$store.dispatch("product/getDataProduct", { vendor: this.vendor });
    },
  },
};
</script>

<style lang="scss">
.product {
  h1 {
    color: #d63031;
    text-align: center;
  }
  .warn-login {
    text-align: center;
    margin: 48px 0 0;
    font-weight: 700;
    font-size: 23px;
    font-family: system-ui;
    .redirect {
      font-style: italic;
    }
  }

  .subMessager {
    text-align: left;
    font-style: italic;
    margin: 4px 0 8px 0;
    span {
      font-weight: 700;
    }
  }
  .control{
    background: aliceblue;
    padding: 12px;
    margin-bottom: 6px;
    margin-top: 6px;
    border-radius: 8px;
    box-shadow: 0px 1px 5px #7f8fa6;
  }
  .filter {
    display: flex;
    gap: 0 20px;
    justify-content: flex-end;
  }
  .collect {
    margin-bottom: 12px;
    h3 {
      margin: 0;
      text-align: center;
    }
  }
  .table {
    background-color: #fff;
    .img {
      max-width: 100px;
      height: auto;
    }
    .tableHeader {
      background-color: #0984e3;
    }

    tr.tr-detail {
      &:hover {
        background-color: #dfe6e9;
      }
    }
  }
}
</style>
