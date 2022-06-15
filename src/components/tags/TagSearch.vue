<template>
  <div class="tag-search">
    <div class="form-input">
      <label for="search">Search: </label>
      <input
        v-model="title"
        type="text"
        id="search"
        placeholder="Enter title ..."
        @keyup.enter="handleSearchTag"
      />
      <button
        :class="isActive ? 'active-search' : 'btn-default'"
        @click="handleClear"
      >
        Search
      </button>

      <button
        :class="isActive ? 'active-clear' : 'btn-default'"
        class="clear"
        @click="handleClear"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TagSearch",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapState("tags", ["isLoad"]),
    isActive() {
      if (this.title && !this.isLoad) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions("tags", ["getListTag"]),
    handleSearchTag() {
      if (!this.isLoad) this.getListTag({ title: this.title });
    },
    handleClear() {
      this.title = "";
      this.getListTag({ title: "" });
    },
  },
  watch: {
    title() {
      if (this.title === "") {
        this.getListTag({ title: "" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-search {
  .form-input {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 48px 0 32px 0;
    border-bottom: 1px solid rgba(149, 165, 166, 0.3);
    margin: 0 12px;
    label {
      width: 10%;
      width: fit-content;
      font-weight: 700;
      font-size: 18px;
      color: #2980b9;
    }
    input#search {
      width: 60%;
      padding: 6px 16px;
      border-radius: 5px;
      border: 1px solid #2980b9;
      &:focus {
        background: rgba(26, 188, 156, 0.4);
        outline: none;
        font-weight: 600;
      }
    }
    button {
      padding: 6px 16px;
      border-radius: 5px;
      border: none;
    }
    .btn-default {
      color: #bbb;
    }

    .active-search {
      color: #fff;
      background: #3498db;
      &:hover {
        cursor: pointer;
      }
    }
    .active-clear {
      background: #e67e22;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>