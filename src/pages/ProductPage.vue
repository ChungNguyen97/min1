<template>
  <div class="product container">
    <div class="showInformationAll" v-if="accessToken">
      <div class="control">
        <h1>{{ $t("productPage.title") }}</h1>
        <div class="search">
          <product-search v-on:updateSearch="handleUpdateSearch" />
        </div>
        <div class="filter">
          <product-vendor v-on:changeSelect="handleChangeVendor" />
          <product-collection
            class="collect"
            v-on:changeSelect="handleChangeSelect"
          />
        </div>
      </div>
      <product-table
        :params="{ search: search, collection: collection, vendor: vendor }"
      />
      <product-pagination v-on:changePagination="handleChangePagination" />
    </div>

    <p v-else class="warn-login">
      {{ $t("productPage.warnLogin") }}
      <router-link class="redirect" :to="{ name: 'loginPage' }">{{
        $t("productPage.need")
      }}</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductSearch from "@/components/product/ProductSearch.vue";
import ProductVendor from "@/components/product/ProductVendor.vue";
import ProductCollection from "@/components/product/ProductCollection.vue";
import ProductTable from "@/components/product/ProductTable.vue";
import ProductPagination from "@/components/product/ProductPagination.vue";

export default {
  name: "ProductPage",

  data: () => ({
    search: "",
    collection: "",
    cursor: {},
    vendor: "",
  }),
  components: {
    ProductSearch,
    ProductVendor,
    ProductCollection,
    ProductTable,
    ProductPagination,
  },
  methods: {
    ...mapActions("product", ["getDataProduct"]),
    handleUpdateSearch(data) {
      this.search = data;
    },
    handleChangeSelect(payload) {
      this.collection = payload;
    },
    handleChangeVendor(payload) {
      this.vendor = payload;
    },
    handleChangePagination(data) {
      this.cursor = data;
    },
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.product.isLoading,
      accessToken: (state) => state.auth.accessToken,
    }),
  },

  watch: {
    search() {
      const params = {
        collection: this.collection ? this.collection : null,
        search: this.search,
        vendor: this.vendor ? this.vendor : null,
      };
      this.getDataProduct(params);
    },

    vendor() {
      const params = {
        collection: this.collection ? this.collection : null,
        search: this.search ? this.search : null,
        vendor: this.vendor,
      };
      this.getDataProduct(params);
    },
    collection() {
      const params = {
        collection: this.collection,
        search: this.search ? this.search : null,
        vendor: this.vendor ? this.vendor : null,
      };
      this.getDataProduct(params);
    },

    cursor() {
      this.getDataProduct(this.cursor);
    },
  },
};
</script>

<style lang="scss" scoped>
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

  .control {
    background: #fff;
    margin: 56px 0 12px 0;
    padding: 12px;
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
  }
}
</style>
