<template>
  <div class="productDetail container">
    <div class="productDetail__name">Product detail page</div>
    <div class="productDetail__content">
      <div class="productDetail__img">
        <div>
          <img class="image_default" :src="urlImageBefore" />
          <p>Variant:</p>
          <div class="variant-img">
            <img
              v-for="item in productItem.variants"
              :key="item.id"
              :src="item.image.url || noImageAvaiable"
              :alt="item.title"
              @click="handleShowVariant(item, $event)"
              class="imgvariant test2"
            />
          </div>
        </div>
      </div>
      <div class="productDetail__text">
        <h3>Title: {{ productItem.title }}</h3>

        <div class="tag">
          <p>Variant name: {{ variant.title }}</p>
          <p>Variant price:{{ newPrice || variant.price }}</p>
          <span>Tags: </span>
          <span v-for="(tag, index) in productItem.tags" :key="index">
            {{ tag }}
          </span>
        </div>
        <hr />

        <input
          type="text"
          name="productTitle"
          v-model="productTitle"
          @keyup.enter="handleUpdateTitle"
          ref="inputTitle"
        />
        <button @click="handleUpdateTitle">Update TITLE</button> <br />

        <input
          type="number"
          name="number"
          id="number"
          v-model="numberMount"
          placeholder="Change mount (number)..."
        />
        <p><strong>Oparator: </strong></p>
        <button @click="operator = '+'">+</button>
        <button @click="operator = '-'">-</button>
        <button @click="hanldeUpdatePrice">Update Price</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import noImageAvaiable from "@/assets/image/no_image_avaiable.png";

export default {
  name: "ProductDetail",
  data() {
    return {
      noImageAvaiable,
      title: "",
      productTitle: "",
      urlImageBefore: "",
      numberMount: "",
      variant: "",
      operator: "",
      newPrice: "",
      isActive: false,
    };
  },

  methods: {
    ...mapActions("product", [
      "getProductById",
      "updateProductTitle",
      "updatePriceByAmount",
    ]),
    handleUpdateTitle() {
      const x = this.productItem.variants;
      let price = {};
      x.forEach((item) => {
        price = { ...price, [item.id]: item.price };
      });
      // console.log("price: ", price);

      const payload = {
        id: this.productItem.id,
        productTitle: this.productTitle,
        price,
      };

      this.updateProductTitle(payload);
    },
    handleShowVariant(item, event) {
      this.variant = item;
      console.log("event: ", event.target.classList);
      event.target.classList.toggle("active");
      // if (event.target.classList.contain("active")) {
      //   event.target.classList.remove("active");
      // } else {
      //   event.target.classList.add("active");
      // }
    },

    async hanldeUpdatePrice() {
      const payload = {
        id: this.variant.id,
        value: Number(this.variant.price),
        amount: Number(this.numberMount),
        operator: this.operator,
      };
      await this.updatePriceByAmount(payload);
      this.newPrice = this.priceByAmount.price;
    },
  },
  computed: {
    ...mapState("product", ["productItem", "priceByAmount"]),
  },
  created() {
    // console.log(this.$route.params);
    this.urlImageBefore = this.$route.params.url;
    const productId = this.$route.params.id;
    this.getProductById(productId);
  },
  watch: {
    numberMount() {
      // console.log(this.numberMount);
    },
  },
  mounted() {
    // var msg = new SpeechSynthesisUtterance();
    // msg.text = "Hello World";
    // window.speechSynthesis.speak(msg);
    // console.log(msg);
  },
};
</script>

<style lang="scss" scoped>
.productDetail {
  .active {
    border: 1px solid red;
  }
  &__name {
  }
  &__content {
    background: #fff;
    display: flex;
    justify-content: space-around;
    .productDetail__img {
      width: 50%;
      .image_default {
        width: 50%;
      }
      .variant-img {
        display: flex;
        flex-wrap: wrap;
        gap: 12px 6px;
        justify-content: space-evenly;
        img {
          width: 16%;
        }
      }
    }

    .productDetail__text {
      flex: 1;
      background: #ccc;
    }
  }
}
</style>