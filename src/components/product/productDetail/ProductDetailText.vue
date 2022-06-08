<template>
  <div class="detail-text">
    <h3 class="title">{{ productItem.title }}</h3>
    <div class="info">
      <p>
        <strong>Type:</strong> <span class="type">{{ variant.title }}</span>
      </p>
      <p>
        <strong>Price:</strong
        ><span class="price">{{ handlFormatPrice(variant.price) }}</span>
      </p>
    </div>
    <div class="tag">
      <p><strong>Tags:</strong></p>
      <span v-for="(tag, index) in productItem.tags" :key="index">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { handlFormatPrice } from "@/library";
export default {
  name: "ProductDetailText",
  data() {
    return {
      handlFormatPrice,
    };
  },
  props: {
    variant: {
      type: Object,
    },
  },
  computed: {
    ...mapState("product", ["productItem"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.detail-text {
  .title {
    font-style: italic;
    font-size: 28px;
    color: #2c3e50;
    font-weight: 700;
    margin: 10px 0 32px 0;
  }
  .info {
    p {
      margin: 12px 0;
    }
    span {
      font-style: italic;
      color: #6c5ce7;
      padding-left: 12px;
      font-weight: 700;
    }
  }
  .tag {
    p {
      margin: 0 0 8px 0;
    }
    span {
      padding: 5px 16px;
      background: #0984e3;
      border-radius: 4px;
      color: #fff;
      margin: 0 8px 6px 0;
      display: inline-block;
    }
  }
}
</style>