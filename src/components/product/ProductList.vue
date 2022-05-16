<template>
  <div class="product">
    <div class="loading" v-if="isLoad">
      <h3>Loading ....</h3>

      <div class="card-text placeholder-glow mt-4">
        <p class="placeholder bg-primary placeholder-lg col-12 my-3 p-5"></p>
      </div>
      <div class="card-text placeholder-wave">
        <p class="placeholder bg-danger placeholder-lg col-12 my-3 p-5"></p>
      </div>
      <div class="card-text placeholder-glow">
        <p class="placeholder bg-warning placeholder-lg col-12 my-3 p-5"></p>
      </div>
      <div class="card-text placeholder-wave">
        <p class="placeholder bg-info placeholder-lg col-12 my-3 p-5"></p>
      </div>
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
            v-model="params.limit"
          />
          <button v-on:click="callData() && (searchText='') ">Xem</button>
        </div>
        <div class="control__search">
          <label for="search">Tìm</label>
          <input type="search" name="search" id="search" v-model="searchText" />
          <button v-on:click="searchText = 'women\'s dresses'">
            Women's dresses
          </button>
          <button v-on:click="searchText = 'Apparel'">Apparel</button>
          <button v-on:click="searchText = ''">X</button>
        </div>

        <!-- <div class="control__sortPrice">
          <button v-on:click="handleSortPrice()">Cao xuống thấp</button>
        </div> -->
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
            </tr>
          </thead>

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
              <td>{{ handlFormatPrice(variants[0].price) }}</td>
              <td>{{ product_type }}</td>
              <td>{{ vendor }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination: Phân trang sản phẩm -->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              @click.prevent="params.tags-- && callData()"
              href="#"
              >Previous</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              @click.prevent="params.tags++ && callData()"
              href="#"
              >Next</a
            >
          </li>
        </ul>
      </nav>
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
      imageDefault:
        "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png",
      isLoad: true,
      isError: false,
      searchText: "",
      isSearch: false,
      params: {
        limit: 10,
        tags: 2,
      },
    };
  },

  methods: {
    async callData() {
      const ProductList = await productApi.getAll(this.params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(ProductList.products);
    },

    // Định dạng lại Price theo chuẩn tiền tệ
    handlFormatPrice(value) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },

    handleSortPrice() {
      // this.list = this.list.filter((item, index) => {
      //   return (
      //     Number(this.list[index].variants[0].price) -
      //     Number(
      //       this.list[index >= this.list.length - 1 ? index : index + 1]
      //         .variants[0].price
      //     )
      //   );
      // });
      // return this.list;
      // this.list = this.list.sort(Number(this.list[index]))
    },
  },

  mounted() {
    this.callData();
  },

  computed: {
    // Tìm kiếm dựa trên danh sách đang hiển thị
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
      align-items: center;
      input{
        padding:4px 12px;
      }
      @media screen and(max-width:768px){
        flex-direction:column;
        gap:12px 0;
      }
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

  .mt-4 {
    margin-top: 52px !important;
  }
}
</style>
