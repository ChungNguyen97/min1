<template>
  <div class="content">
    <product-skeleton class="loading" v-if="isLoading" />

    <div class="list-table">
      <p class="subMessager" v-if="isSearchOrFiler && !isLoading">
        {{ $t("productTable.have") }}
        <strong>{{ getProductList.length }}</strong>
        {{ $t("productTable.result") }}:
        <strong v-if="params.search">{{ $t("productTable.key") }}: </strong>
        <mark>{{ params.search }} </mark>
        <strong v-if="params.vendor"
          >+ {{ $t("productTable.vendor") }}:
        </strong>
        <mark>{{ params.vendor }} </mark>
        <strong v-if="params.collection"
          >+ {{ $t("productTable.co") }}:
        </strong>
        <mark>{{ params.collection }}</mark>
      </p>

      <table class="table align-middle" v-if="getProductList.length != 0">
        <thead class="tableHeader text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ $t("productTable.th_img") }}</th>
            <th scope="col">{{ $t("productTable.th_title") }}</th>
            <th scope="col">{{ $t("productTable.th_price") }}</th>
            <th scope="col">{{ $t("productTable.th_pro") }}</th>
            <th scope="col">{{ $t("productTable.th_ven") }}</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(
              { id, title, images, variants, product_type, vendor, ...rest },
              index
            ) in getProductList"
            :key="id"
            class="tr-detail"
            @click="handleShowDetailProduct(id, images.url)"
          >
            <th scope="row">{{ (index += 1) }}</th>
            <td>
              <img
                class="img"
                :src="images.url || imageIconProduct"
                :alt="title"
                :title="title"
              />
            </td>
            <td>{{ title }}</td>
            <td>{{ handlFormatPrice(variants[0].price) }}</td>
            <td>{{ product_type }}</td>
            <td>{{ vendor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import imageIconProduct from "@/assets/image/icon_product.png";
import ProductSkeleton from "@/components/product/ProductSkeleton.vue";
import { handlFormatPrice } from "@/library";

export default {
  name: "ProductTable",
  data() {
    return {
      imageIconProduct,
      handlFormatPrice,
    };
  },
  props: {
    params: {
      type: Object,
    },
  },
  components: {
    ProductSkeleton,
  },

  methods: {
    ...mapActions("product", ["getDataProduct"]),
    handleShowDetailProduct(id, url) {
      this.$router.push({
        name: "productDetail",
        params: { id },
        query: { url },
      });
    },
  },

  created() {
    this.getDataProduct();
  },

  computed: {
    ...mapGetters("product", ["getProductList"]),
    ...mapState("product", ["isLoading"]),
    isSearchOrFiler() {
      const params = this.params;
      if (params.search || params.vendor || params.collection) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  .loading {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    min-height: 160px;
  }
}
.subMessager {
  text-align: left;
  font-style: italic;
  margin: 4px 0 8px 0;
  span {
    font-weight: 700;
  }
  mark {
    margin-right: 12px;
    font-style: italic;
  }
}
table.table {
  width: 100%;
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
      background-color: rgba(52, 172, 224, 0.2);
      cursor: pointer;
    }
  }

  .tableHeader {
    th {
      padding: 8px 0;
    }
  }
  td {
    text-align: center;
  }
}
</style>
