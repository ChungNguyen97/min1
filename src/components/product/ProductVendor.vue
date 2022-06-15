<template>
  <div class="vendor">
    <p class="title">
      <iconsvg
        class="iconFilter"
        name="filter-solid"
        width="15"
        height="15"
        color="#000"
      />
      {{ $t("productVendor.title") }}
    </p>
    <select name="vendor" @change="handleChangeSelect">
      <option value="">---- {{ $t("productVendor.select") }} ----</option>
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
import "@/assets/icons";
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
    .iconFilter {
      position: relative;
      top: 2px;
    }
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