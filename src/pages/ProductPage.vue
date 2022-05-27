<template>
  <div class="product container">
    <skeleton-loading-vue />
    <div class="showInformationAll" v-if="this['login/getStatusLogin']">
      <h1>PRODUCT LIST</h1>

      <div class="control">
        <div class="search">
          <product-search-vue v-on:updateSearch="handleUpdateSearch" />
          <p class="subMessager" v-if="search">
            Có
            <span>{{ this["product/getProductList"].length }}</span>
            kết quả cho từ khóa tìm kiếm <span>{{ search }}</span>
          </p>
        </div>
        <product-vendor v-on:changeSelect="handleChangeVendor" />
        <product-collection
          class="product-collect"
          v-on:changeSelect="handleChangeSelect"
        />
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
import { mapActions, mapGetters } from "vuex";

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
      // console.log("at ProductPage", payload);
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
    text-align: center;
    font-style: italic;
    span {
      font-weight: 700;
    }
  }
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ecf0f1;
    margin-bottom: 12px;
    flex-wrap:wrap;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px 0;
    }
    
  }
  .product-collect {
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
