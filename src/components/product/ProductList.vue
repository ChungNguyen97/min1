<template>
  <div class="product">
    <SkeletonProduct :isLoad="isLoad" />
    <div class="content" v-if="!isLoad">
      <h1>PRODUCT LIST</h1>
      <div class="control">
        <!-- <ControlResult /> -->
        <div class="control__numberProduct">
          <label for="selectNumber">Chọn số lượng sản phẩm muốn xem: </label>
          <input
            type="number"
            name="selectNumber"
            id="selectNumber"
            v-model="params.limit"
            @keyup.enter="callData() && (searchText = '')"
          />
          <button
            v-on:click="callData() && (searchText = '')"
            class="btn btn-primary"
          >
            Xem
          </button>
        </div>

        <div class="control__search">
          <div class="action">
            <label for="search">Tìm</label>
            <input
              type="search"
              name="search"
              id="search"
              v-model="searchText"
            />
          </div>
          <div class="suggest">
            <button v-on:click="searchText = 'women\'s dresses'">
              Women's dresses
            </button>
            <button v-on:click="searchText = 'Apparel'">Apparel</button>
            <button v-on:click="searchText = ''" class="bg-danger">X</button>
          </div>
        </div>

        <div class="select">
          <!-- Select Product Type -->
          <select
            name="selectProductType"
            id="selectProductType"
            v-on:click="handleSelectProductType($event)"
          >
            <option value="">--- Select Product type ---</option>
            <option
              v-for="{ id, product_type } in list"
              :key="id"
              :value="product_type"
            >
              {{ product_type }}
            </option>
          </select>

          <!-- Select vendor -->
          <select
            name="selectVendor"
            id="selectVendor"
            v-on:click="handleSelectVendor($event)"
          >
            <option value="">--- Select Vendor ---</option>
            <option v-for="{ id, vendor } in list" :key="id" :value="vendor">
              {{ vendor }}
            </option>
          </select>
        </div>
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
            <a class="page-link" @click.prevent="callData()" href="#"
              ><i class="fa-solid fa-angles-left"></i> Previous</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" @click.prevent="handleNextPage()" href="#"
              >Next <i class="fa-solid fa-angles-right"></i
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import productApi from "@/api/productApi";
import SkeletonProduct from "./SkeletonProduct.vue";
// import ControlResult from "./ControlResult.vue";

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
      isShowOptionVendor: true,
      params: {
        limit: 10,
        tags: 0,
        next_page_cursor: "eyJsYXN0X2lkIjo2ODA3MjczMjc1NDUxLCJsYXN0X3ZhbHVlIjoiM1wvNCBTbGVldmUgS2ltb25vIERyZXNzIn0=",
        previous_page_cursor:null
      },
    };
  },
  components: {
    SkeletonProduct,
    // ControlResult,
  },

  methods: {
    async handleNextPage() {
      this.params.next_page_cursor = "after";
      this.params.limit=3;
      const ProductList = await productApi.getAll(this.params);
      this.list = await ProductList.products;
      this.isLoad = false;
      console.log(ProductList.products);
    },
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

    handleSelectProductType(e) {
      return (this.searchText = e.target.value);
    },
    handleSelectVendor(e) {
      return (this.searchText = e.target.value);
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
    margin-top: 52px !important;
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
