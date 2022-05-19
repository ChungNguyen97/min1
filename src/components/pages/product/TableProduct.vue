<template>
  <div class="content" v-if="!isLoad">
    <h1>PRODUCT LIST</h1>
    <div class="list-table">
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
            ) in getList"
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
            <td>{{ title }}</td>
            <td>{{ variants[0].price }}</td>
            <td>{{ product_type }}</td>
            <td>{{ vendor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  name: "TableProduct",
  data() {
    return {
      imageDefault:
        "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png",
    };
  },

  computed: {
    ...mapGetters(['getList']),
    handlFormatPrice(value) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  },

  created() {
    this.getListProduct();
  },

  methods: {
    ...mapActions(["getListProduct"]),
  },
};
</script>

<style lang="scss">
  table.table{
    width: 100%;
    .tableHeader{
      th{
        padding:8px 0;
      }
    }
    td{
      text-align:center
    }
  }
</style>