<template>
  <div class="detail-text">
    <h3 class="title">{{ productItem.title }}</h3>
    <div class="info">
      <p>
        <strong>Type:</strong> <span class="type">{{ variant.title }}</span>
      </p>
      <p>
        <strong>Price:</strong><span class="price">{{ variant.price }}</span>
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
export default {
  name: "ProductDetailText",
  props: {
    variant: {
      type: Object,
    },
  },
  computed: {
    ...mapState("product", ["productItem"]),
  },
};
</script>

<style lang="scss" scoped>
.detail-text {
  .title {
    font-style: italic;
    font-size: 28px;
    color: #00b894;
    font-weight: 700;
    margin: 0 0 18px 0;
  }
  .info {
    p {
      margin: 8px 0;
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
      margin-bottom: 4px;
    }
    span {
      padding: 2px 8px;
      background: #0984e3;
      border-radius: 4px;
      color: #fff;
      margin: 0 10px 5px 0;
      display: inline-block;
    }
  }
}
</style>