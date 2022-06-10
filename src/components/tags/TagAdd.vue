<template>
  <div class="addTag">
    <div class="addTag__control">
      <p class="addTag__title" @click="isShow = !isShow">Add Tag:</p>
      <iconsvg name="down-1" v-if="!isShow" />
      <iconsvg name="angle-up-solid" v-else />
    </div>

    <section class="addTag__showInfo" v-if="isShow">
      <aside class="info">
        <div class="inputListTag">
          <span class="tag" v-for="(t, i) in tagInput" :key="i">
            {{ t }} <span @click="handleRemoveInput(i)"> X</span>
          </span>
        </div>
        <input
          v-model="tag"
          @keyup.enter="handleAddInput"
          type="text"
          id="addTag"
          placeholder="Enter your tag name..."
          v-on:blur="tag && tagInput.push(tag)"
          autofocus
        />
      </aside>
    </section>
  </div>
</template>

<script>
import "@/assets/icons";
export default {
  name: "TagAdd",
  data() {
    return {
      tag: "",
      tagInput: [],
      isShow: false,
    };
  },
  methods: {
    handleAddInput() {
      this.tagInput.push(this.tag);
      this.tag = "";
    },
    handleRemoveInput(i) {
      this.tagInput.splice(i, 1);
    },
  },
  watch: {
    tag() {
      this.$emit("updateTagName", { list: this.tagInput, tag: this.tag });
    },
  },
};
</script>

<style lang="scss" scoped>
.addTag {
  padding: 0px 10px 0px 10px;

  &__title {
    color: #2c3e50;
    font-weight: 600;
    margin: 6px 0 2px 0;
  }
  &__control {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  &__showInfo {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    .info {
      border: 1px solid rgba(149, 165, 166, 0.3);
      flex: 1;
      display: flex;
      gap: 12px;
      padding: 10px;
    }
    .inputListTag {
      display: flex;
      flex-wrap: wrap;
      gap: 5px 10px;
      width: auto;
      .tag {
        color: #2980b9;
        border: 1px solid orange;
        padding: 2px 12px;
        border-radius: 4px;
        &:hover {
          background: rgba(243, 156, 18, 0.5);
          cursor: pointer;
        }
        span {
          padding-left: 5px;
          font-weight: 600;
          color: #e74c3c;
          font-size: 16px;
        }
      }
    }
    input {
      border: none;
      font-style: italic;
      font-weight: 700;
      color: #2980b9;
      outline: none;
      border-left: 1px solid;
      padding-left: 12px;
      &:focus {
        outline: none;
      }
    }
    .add {
      text-transform: uppercase;
      font-weight: 600;
      padding: 8px;
      border: none;
      color: #7f8c8d;
    }
  }
}
</style>