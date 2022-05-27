<template>
  <div class="vendor">
    <h3>Filter by Vendor</h3>
    <select name="vendor" @change="handleChangeSelect">
      <option value="">---- Select vendor ----</option>
      <option
        v-for="(option, index) in getVendorList"
        :key="index"
        :value="option.title"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductVendor",
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapActions(["vendor/getVendorData"]),
    handleChangeSelect(e) {
      this.$emit("changeSelect", e.target.value);
    },
  },
  computed: {
    ...mapGetters('vendor',['getVendorList']),
  },
  created() {
    this.$store.dispatch("vendor/getVendorData");
  },
};
</script>

<style lang="scss" scoped>
.vendor {
  margin-bottom:12px;
  h3 {
    margin:0;
    text-align:center;
  }
  select {
    padding: 5px 12px;
    width: 250px;
    text-align: center;
    border-radius:8px

  }
  option {
    text-align: left;
  }
}
</style>