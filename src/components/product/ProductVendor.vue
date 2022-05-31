<template>
  <div class="vendor">
    <p>Filter by Vendor</p>
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
    ...mapActions("vendor", ["getVendorData"]),
    handleChangeSelect(e) {
      this.$emit("changeSelect", e.target.value);
    },
  },
  computed: {
    ...mapGetters("vendor", ["getVendorList"]),
  },
  created() {
    this.getVendorData();
  },
};
</script>

<style lang="scss" scoped>
.vendor {
  margin-bottom: 12px;
  p {
    margin: 3px 0;
    text-align: center;
    font-weight: bold;
  }
  select {
    padding: 5px 12px;
    width: 250px;
    text-align: center;
    border-radius: 8px;
  }
  option {
    text-align: left;
  }
}
</style>