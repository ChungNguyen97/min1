<template>
  <div class="search">
    <div class="search__control">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Nhập nội dung tìm kiếm"
        v-model="contentSearch"
      />
      <button v-on:click="handleSearch()">Tìm kiếm</button>
      <button @click="removeSearch()" class="remove">Remove</button>
    </div>
    <div class="search__suggest">
      <p @click="contentSearch = 'A-Line Mini Dress in Blue'">
        A-Line Mini Dress in Blue
      </p>
      <p @click="contentSearch = 'A-Line Jacket'">A-Line Jacket</p>
      <p @click="contentSearch = 'Alex Twill Pant in Mariner'">
        Alex Twill Pant in Mariner
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFeature",
  data() {
    return {
      contentSearch: "",
    };
  },

  methods: {
    handleSearch() {
      this.$emit("changeSearch", this.contentSearch);
    },
    removeSearch(){
      this.contentSearch = ''
      this.handleSearch()
    }
  },
};
</script>


<!-- === SCSS === -->
<style lang="scss" scoped>
.search {
  margin-top: 32px;
  &__control {
    input {
      width: 60%;
      padding: 3px 12px;
      margin-right: 12px;
    }
    button {
      border: none;
      outline: none;
      background: blue;
      color: #fff;
      padding: 5px 12px;
      opacity: 0.85;
      &:hover {
        opacity: 1;
      }
    }
    button.remove {
      margin-left: 14px;
      color: #fff;
      background-color: #e74c3c;
    }
  }
  &__suggest {
    margin: 10px 0 0;
    display: flex;
    gap: 0 16px;
    font-style: italic;
    color: #3498db;
    p {
      &:hover {
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
}
</style>