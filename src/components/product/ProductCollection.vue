<template>
  <div class="collection">
    <p>Filter by Collections</p>
    <select name="collection" @change="handleChangeSelect">
      <option value="">---- Select collection ----</option>
      <option
        v-for="(option, index) in this['collection/getCollections']"
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
  name: "product-collection",
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapActions(["collection/getCollectionData"]),
    handleChangeSelect(e) {
      console.log("at product-collection ", e.target.value);
      this.$emit("changeSelect", e.target.value);
    },
  },
  computed: {
    ...mapGetters(["collection/getCollections"]),
  },
  created() {
    this.$store.dispatch("collection/getCollectionData");
  },
};
</script>

<style lang="scss" scoped>
.collection {
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