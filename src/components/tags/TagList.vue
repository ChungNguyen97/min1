<template>
  <div class="tag-list">
    <div class="load" v-if="isLoad">
      <div class="information">
        <div class="iconLoading"></div>
        <h3>Loading...</h3>
      </div>
    </div>
    <p class="tag" v-for="tag in listTag" :key="tag.id">
      {{ tag.title }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TagList",
  computed: {
    ...mapState("tags", ["listTag", "isLoad"]),
  },
  methods: {
    ...mapActions("tags", ["getListTag"]),
  },
  created() {
    this.getListTag();
  },
};
</script>

<style lang="scss" scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding: 28px 12px 12px 12px;
  position: relative;

  .load {
    position: absolute;
    background: #2c3e50;
    opacity: 0.8;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    .information {
      padding-top: 4%;
      h3 {
        font-size: 32px;
        color: #fff;
      }
      .iconLoading {
        width: 48px;
        height: 48px;
        border: 8px solid #fff;
        border-radius: 100rem;
        border-top-color: transparent;
        border-bottom-color: transparent;
        margin: auto;
        animation: loadtime 1s linear infinite;
        @keyframes loadtime {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }

  .tag {
    color: blue;
    border: 1px solid #2980b9;
    margin: 0;
    width: 22%;
    text-align: center;
    padding: 36px 0;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
    &:hover {
      background: rgba(52, 152, 219, 0.7);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>