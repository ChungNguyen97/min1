<template>
  <div class="collection">
    <p>
      <iconsvg
        class="iconFilter"
        name="filter-solid"
        width="15"
        height="15"
        color="#000"
      />
      {{ $t("productCollection.title") }}
    </p>
    <select name="collection" @change="handleChangeSelect">
      <option value="">---- {{ $t("productCollection.select") }} ----</option>
      <option
        v-for="(option, index) in getCollections"
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
  name: "ProductCollection",
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapActions("collection", ["getCollectionData"]),
    handleChangeSelect(e) {
      this.$emit("changeSelect", e.target.value);
    },
  },
  computed: {
    ...mapGetters("collection", ["getCollections"]),
  },
  created() {
    this.getCollectionData();
  },
};
</script>

<style lang="scss" scoped>
.collection {
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