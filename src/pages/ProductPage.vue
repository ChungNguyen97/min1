<template>
  <div class="product container">
    <skeleton-loading/>
    <div class="showInformationAll" v-if="'getStatusLogin'">
      <product-search v-on:updateSearch="handleUpdateSearch" />

      <p class="subMessager" v-if="search">
        Có {{productList.length}}
        kết quả cho từ khóa tìm kiếm <span>{{ search }}</span>
      </p>
      <table-product />
    </div>

    <p v-else class="warn-login">
      Bạn cần đăng nhập để xem danh sách sản phẩm.
      <router-link class="redirect" to="/login">Đăng nhập ngay</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import SkeletonLoading from '@/components/product/ProductSkeleton.vue';
import ProductSearch from '@/components/product/ProductSearch.vue';
import TableProduct from '@/components/product/ProductTable.vue';

export default {
  name: "ProductPage",
  data: () => ({
    search: "",
  }),
  components: {
    TableProduct,
    ProductSearch,
    SkeletonLoading,
  },
  methods: {
    handleUpdateSearch(searchText) {
      this.search = searchText;
    },
    ...mapActions(["product/getDataProduct"]),
  },
  computed: {
    ...mapGetters("login",['getStatusLogin']),
    ...mapState('product',['productList']),
  },
  watch: {
    search() {
      this.$store.dispatch("product/getDataProduct", { search: this.search });
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
