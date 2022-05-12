<template>
  <div class="product">
    <h1>PRODUCT LIST</h1>
    <div class="loading" v-if="isLoad">
      <h3>Loading ....</h3>
    </div>
    <div class="control" v-if="!isLoad">
      <label for="selectNumber">Chọn số lượng sản phẩm muốn xem: </label>
      <input
        type="number"
        name="selectNumber"
        id="selectNumber"
        v-model="number"
      />
      <button v-on:click="handleShowNumberProduct">Xem</button>
    </div>
    <!-- Table -->
    <div class="table-responsive" v-if="!isLoad && list">
      <table class="table align-middle">
        <thead class="tableHeader text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Product Type</th>
            <th scope="col">Vendor</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in list"
            :key="product.id"
            class="tr-detail"
          >
            <th scope="row">{{ (index += 1) }}</th>
            <td>
              <img
                class="img"
                :src="product.images.url || imageDefault"
                :alt="product.title"
                :title="product.title"
              />
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.variants[0].price }}</td>
            <!-- product.variants[0].price  -->
            <td>{{ product.product_type }}</td>
            <td>{{ product.vendor }}</td>
          </tr>
        </tbody>
      </table>
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
    };
  },

  methods: {
    async handleShowNumberProduct() {
      if (this.number >= 50) {
        this.number = 50;
      } else if (this.number <= 0) {
        this.number = 1;
      } else {
        this.number;
      }
      const params = {
        limit: this.number,
      };
      const ProductList = await productApi.getAll(params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(ProductList.products);
    },
    // handlePrice(){
    //   // const number1 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

    // }
  },

  mounted() {
    const callData = async () => {
      const params = {
        limit: 10,
      };
      const ProductList = await productApi.getAll(params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(ProductList.products);
    };
    callData();
  },

  // filters: {
  //   handlePrice(value) {
  //     const numberNew = new Intl.NumberFormat("de-DE", {
  //       style: "currency",
  //       currency: "VND",
  //     }).format(value);
  //     return numberNew;
  //   },
  // },
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
    // border:1px solid;
    padding: 10px;
    margin: 12px auto;
    display: flex;
    justify-content: space-around;
    gap: 0 12px;
    button {
      padding: 4px 12px;
      border: none;
      border: 1px solid #fff;
      background: #81ecec;
      cursor: pointer;
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