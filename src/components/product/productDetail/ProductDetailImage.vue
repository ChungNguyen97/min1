<template>
  <div class="detail-image">
    <div>
      <img class="image_default" :src="imageBefore" />
      <p class="variant">Variant:</p>
      <div class="variant-img">
        <img
          :class="{ active: index === indexVariant }"
          v-for="(item, index) in productItem.variants"
          ref="imgs"
          :key="item.id"
          :src="item.image.url || noImageAvaiable"
          :alt="item.title"
          @click="handleShowVariant(item, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import noImageAvaiable from "@/assets/image/no_image_avaiable.png";
import { mapState } from "vuex";
export default {
  name: "ProductDetailImage",
  data() {
    return {
      noImageAvaiable,
      imageBefore: "",
      indexVariant: 0,
    };
  },

  methods: {
    handleShowVariant(item, index) {
      this.$emit("transVariant", item);
      this.indexVariant = index;
    },
  },
  computed: {
    ...mapState("product", ["productItem"]),
  },
  created() {
    const image = this.$route.query.url;
    this.imageBefore = image;
  },
  mounted() {
    setTimeout(() => {
      this.$refs.imgs && this.$refs.imgs[0].click();
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
  
.detail-image {
  .image_default {
    width: 40%;
    display: block;
    margin: 12px auto;
    border-radius: 4px;
    box-shadow: 0px 1px 5px #bbb;
  }
  .variant {
    color: #0984e3;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 1px;
    padding-left: 12px;
  }
  .variant-img {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 6px;
    justify-content: space-evenly;
    img {
      width: 10%;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .active {
    border: 1px solid #d63031;
    border-radius: 3px;
    padding: 3px;
  }
}
</style>