<template>
  <div class="product">
    <div class="loading" v-if="isLoad">
      <h3>Loading ....</h3>
    </div>

    <div class="content" v-else>
      <h1>PRODUCT LIST</h1>

      <div class="control">
        <div class="control__numberProduct">
          <label for="selectNumber">Chọn số lượng sản phẩm muốn xem: </label>
          <input
            type="number"
            name="selectNumber"
            id="selectNumber"
            v-model="number"
          />
          <button v-on:click="handleShowNumberProduct">Xem</button>
        </div>
        <div class="control__search">
          <label for="search">Tìm</label>
          <input type="search" name="search" id="search" v-model="searchText" />
          <button v-on:click="searchText = 'women\'s dresses'">
            Women's dresses
          </button>
          <button v-on:click="searchText = 'Apparel'">Apparel</button>
        </div>
      </div>

      <div class="error" v-if="isError">
        <p v-for="(e, index) in error" :key="index">
          {{ e.min ? e.min : e.max }}
        </p>
      </div>

      <div class="table-responsive">
        <table class="table align-middle">
          <thead class="tableHeader text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Product Type</th>
              <th scope="col">Vendor</th>
              <!-- <th scope="col">Options</th> -->
            </tr>
          </thead>

          <!-- All -->
          <tbody>
            <tr
              v-for="(
                { id, title, images, variants, product_type, vendor, ...rest },
                index
              ) in searchFlowName"
              :key="id"
              class="tr-detail"
            >
              <th scope="row">{{ (index += 1) }}</th>
              <td>
                <img
                  class="img"
                  :src="images.url || imageDefault"
                  :alt="title"
                  :title="title"
                />
              </td>
              <td>{{ title || to - uppercase }}</td>
              <td>{{ variants[0].price }}</td>
              <td>{{ product_type }}</td>
              <td>{{ vendor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import productApi from "@/api/productApi";

export default {
  name: "ProductList",
  data() {
    return {
      list: [],
      baseurl: "product/",
      imageDefault:
        "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png",
      isLoad: true,
      number: 10,
      error: [],
      isError: false,
      searchText: "",
      isSearch: false,
    };
  },

  methods: {
    async handleShowNumberProduct() {
      if (this.number >= 50) {
        this.number = 50;
        this.isError = true;
        this.error.push({ max: "Số lượng sản phẩm tối đa là 50" });
      } else if (this.number <= 0) {
        this.isError = true;
        this.number = 1;
        this.error.push({ min: "Số lượng sản phẩm tối thiểu phải là 1" });
      } else {
        this.number;
        this.isError = false;
      }
      const params = {
        limit: this.number,
      };
      const ProductList = await productApi.getAll(params);
      this.isLoad = false;
      console.log(ProductList.products);
      this.list = await ProductList.products;
    },
  },

  mounted() {
    const callData = async () => {
      try {
        const params = {
          limit: 10,
        };
        const ProductList = await productApi.getAll(params);
        this.list = await ProductList.products;
        this.isLoad = false;
        console.log(ProductList.products);
      } catch (error) {
        console.log(error);
      }
    };
    callData();
  },

  computed: {
    searchFlowName() {
      return this.list.filter(
        (product) =>
          product.title.match(this.searchText) ||
          product.product_type.match(this.searchText) ||
          product.vendor.match(this.searchText)
      );
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

  .loading {
    margin-top: 50px;

    h3 {
      text-align: center;
      font-style: italic;
      font-size: 32px;
    }
  }

  .control {
    padding: 10px;
    margin: 12px auto;
    &__numberProduct {
      display: flex;
      gap: 0 36px;
      justify-content: flex-start;
    }
    button {
      padding: 4px 12px;
      border: none;
      border: 1px solid #fff;
      background: #81ecec;
      cursor: pointer;
    }
    &__search {
      margin-top: 12px;
      label {
        margin-right: 12px;
      }
      input {
        padding: 4px 12px;
        color: blue;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 18px;
        border: 1px solid #fff;
        outline: none;
        &:focus {
          outline: 1px solid orangered;
        }
      }
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
}
</style>