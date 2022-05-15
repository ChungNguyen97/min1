<template>
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
</template>

<script>
export default {
  name: "TableListProduct",
  data() {},
  props: {
    searchFlowName: {
      type: Function,
    },
  },
};
</script>

<style lang="scss">
</style>