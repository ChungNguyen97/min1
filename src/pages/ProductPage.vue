<template>
  <div class="product container">
    <skeleton-loading-vue />
    
    <table-product-vue v-if="getStatusLogin"/>

    <p v-else class="warn-login">Bạn cần đăng nhập để xem danh sách sản phẩm.
      <router-link class="redirect" to="/login">Đăng nhập ngay</router-link>
    </p>
  </div>
</template>

<script>
import TableProductVue from '@/components/product/TableProduct.vue';
import SkeletonLoadingVue from '@/components/product/SkeletonLoading.vue';
import { mapGetters } from 'vuex';

export default {
  name: "ProductPage",
  components: {
    TableProductVue,
    SkeletonLoadingVue,
  },
  computed: {
    ...mapGetters(['getStatusLogin'])
  }
};
</script>

<style lang="scss">
.product {
  h1 {
    color: #d63031;
    text-align: center;
  }
  .warn-login{
    text-align: center;
    margin: 48px 0 0;
    font-weight: 700;
    font-size: 23px;
    font-family: system-ui;
    .redirect{
      font-style: italic;
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
