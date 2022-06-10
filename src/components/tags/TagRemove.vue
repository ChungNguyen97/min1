<template>
  <section class="tagRemove">
    <div class="tagRemove__control">
      <p class="tagRemove__title" @click="isShow = !isShow">Remove tag:</p>
      <iconsvg
        class="icon"
        width="15px"
        height="15px"
        name="down-1"
        v-if="!isShow"
      />
      <iconsvg
        width="15px"
        height="15px"
        class="icon"
        name="angle-up-solid"
        v-else
      />
      <span class="line-through"></span>
    </div>
    <aside class="tagRemove__btn" v-if="isShow">
      <span ref="selectAll" @click="handleSelectAll($event)">Select all</span>
      <span :class="{ activeBtn: listTags.length }" @click="handleResetTag()"
        >Reset Select tag</span
      >
    </aside>
    <div class="tagRemove__list" v-if="isShow">
      <span
        v-for="(p, i) in productItem.tags"
        :key="i"
        @click="handleRemove(p, i, $event)"
        class="default"
        ref="tag"
      >
        {{ p }}
      </span>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import "@/assets/icons";
export default {
  name: "TagRemove",
  data() {
    return {
      listTags: [],
      isShow: false,
    };
  },


  computed: {
    ...mapState("product", ["productItem"]),
  },
  methods: {
    handleSelectAll($event) {
      $event.target.classList.toggle("activeBtn");
      this.listTags = this.productItem.tags;
      for (let t of this.$refs.tag) {
        t.classList.add("active");
      }
    },
    handleResetTag() {
      console.log(this.$refs);
      this.$refs.selectAll.classList.remove("activeBtn");
      this.listTags = [];
      for (let t of this.$refs.tag) {
        t.classList.remove("active");
      }
    },
    handleRemove(p, i, $event) {
      $event.target.classList.toggle("active");

      const lt = this.listTags;
      const isDupli = lt.some((t) => t === p);
      if (isDupli) {
        // lt.splice(i, 1);
      } else {
        lt.push(p);
      }
    },
  },
  watch: {
    listTags() {
      this.$emit("removeTag", this.listTags);
    },
    
  },
};
</script>

<style lang="scss" scoped>
.tagRemove {
  margin-top: 14px;
  &__title {
    color: #2c3e50;
    font-weight: 600;
    margin: 6px 0 2px 0;
  }
  &__control {
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    .icon {
      position: relative;
      top: 1px;
    }
    .line-through {
      color: transparent;
      flex: 1;
      border-top: 1px solid #95a5a6;
      position: relative;
    }
  }
  &__btn {
    text-align: right;
    margin-bottom: 14px;
    span {
      margin-left: 12px;
      background: rgba(162, 155, 254, 0.4);
      color: #636e72;
      padding: 4px 12px;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #1abc9c;
        color: #fff;
      }
    }
    .activeBtn {
      background: #1abc9c;
      color: #fff;
    }
  }
  &__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    span {
      color: #2980b9;
      padding: 4px 12px;
      border-radius: 10px;
      background: rgba(189, 195, 199, 0.3);
      &:hover {
        cursor: pointer;
        color: #fff;
        background: #3498db;
      }
    }
    .active {
      color: #fff;
      background: #3498db;
    }
  }
}
</style>