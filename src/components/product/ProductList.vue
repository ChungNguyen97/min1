<template>
  <div class="product">
    <SkeletonLoading :isLoad="isLoad" />
    <TableProductVue :list="list" :isLoad="isLoad"/>
    
  </div>
</template>

<script>
import productApi from "@/api/productApi";
import SkeletonLoading from "./SkeletonLoading.vue";
import TableProductVue from "./TableProduct.vue";

export default {
  name: "ProductList",
  data() {
    return {
      list: [],
      
      isLoad: true,
      isError: false,
      isSearch: false,
      params: {
        limit: 5,
        tags: 0,
      },
    };
  },
  components: {
    SkeletonLoading,
    TableProductVue
  },

  methods: {
    async callData() {
      const ProductList = await productApi.getAll(this.params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(this.isLoad);
      console.log(ProductList.products);
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
  .control {
    padding: 10px;
    margin: 12px auto 0;

    &__numberProduct {
      display: flex;
      gap: 0 10px;
      justify-content: flex-start;
      align-items: center;
      input {
        padding: 4px 12px;
      }
      button {
        padding: 2px 12px;
      }
      @media screen and(max-width:768px) {
        flex-direction: column;
        gap: 12px 0;
      }
    }

    &__search {
      margin-top: 12px;
      .action {
        label {
          margin-right: 12px;
        }
        input {
          padding: 2px 12px;
          color: blue;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 18px;
          outline: none;
          border: 1px solid #82ccdd;
          border-radius: 4px;

          &:focus {
            background-color: #7bed9f;
          }
        }
      }
      .suggest {
        margin: 3px 0 0 39px;
        button {
          margin-right: 4px;
          padding: 4px 12px;
          border: 1px solid #fff;
          background: #81ecec;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
  }
  .select {
    display: flex;
    justify-content: right;
    gap: 0 16px;
    select {
      padding: 4px;
    }
  }
  .img {
    max-width: 100px;
    height: auto;
  }

  .table {
    background-color: #fff;

    .tableHeader {
      background-color: #0984e3;
    }

    tr.tr-detail {
      &:hover {
        background-color: #dfe6e9;
      }
    }
  }

  .mt-4 {
    margin-top: 32px !important;
  }
  .pagination {
    justify-content: center;
    .page-item {
      margin-right: 4px;
      i {
        margin: 0 3px;
        font-size: 13px;
      }
    }
  }
}
</style>
