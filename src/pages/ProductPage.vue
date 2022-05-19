<template>
  <div class="product">
    <SkeletonLoadingVue />
    <TableProductVue />
  </div>
</template>

<script>
import TableProductVue from '@/components/product/TableProduct.vue';
import SkeletonLoadingVue from '@/components/product/SkeletonLoading.vue';

export default {
  name: "ProductPage",
  components: {
    TableProductVue,
    SkeletonLoadingVue,
  },
};
</script>

<style lang="scss">
.product {
  h1 {
    color: #d63031;
    text-align: center;
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
