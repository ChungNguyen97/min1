<template>
  <div class="pagination">
    <button
      @click="handleChangePrev"
      :class="{ stop: !page_info.has_previous_page }"
    >
      Prev
    </button>
    <button @click="handleChangeNext" 
      :class="{ stop: !page_info.has_next_page }"
    >Next</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductPagination",
  methods: {
    handleChangeNext() {
      const data = {
        after: this.page_info.next_page_cursor,
      };
      console.log(this.page_info);
      if (this.page_info.has_next_page) this.$emit("changePagination", data);
    },
    handleChangePrev() {
      const data = {
        before: this.page_info.previous_page_cursor,
      };
      if(this.page_info.has_previous_page) this.$emit("changePagination", data);
    },
  },
  computed: {
    ...mapState("product", ["page_info"]),
  },
};
</script>

<style scoped lang="scss">
.pagination {
  text-align: right;
  button {
    padding: 8px 16px;
    border: none;
    font-weight: 700;
    margin: 12px 0 12px 12px;
    border-radius: 5px;
    background: #1abc9c;
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
  .stop {
    background: #ccc;
    color: #555;
    opacity: 0.35;
  }
  button.stop:hover {
    cursor: default;
    color: #555;
  }
}
</style>