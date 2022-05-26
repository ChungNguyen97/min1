<template>
  <div class="content">
    <h1>PRODUCT LIST</h1>
    <div class="list-table">
      <table class="table align-middle" v-if="this['product/getProductList'].length !=0">
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
            ) in this['product/getProductList']"
            :key="id"
            class="tr-detail"
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
import { mapActions, mapGetters } from "vuex";
import imageIconProduct from "@/assets/image/icon-product.png";

export default {
  name: "TableProduct",
  data() {
    return {
      imageIconProduct,
    };
  },

  methods: {
    handlFormatPrice(value) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    ...mapActions(["product/getDataProduct"]),
  },

  created() {
    this.$store.dispatch('product/getDataProduct');
    // console.log(this['product/getProductList']);
  },

  computed: {
    ...mapGetters(["product/getProductList"]),
  },

};
</script>

<style lang="scss">
table.table {
  width: 100%;
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
