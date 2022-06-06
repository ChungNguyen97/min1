<template>
  <div class="productDetail container">
    <div class="productDetail__name">Product detail page</div>
    <div class="productDetail__content">
      <div class="img">
        <product-detail-image v-on:transVariant="handleTransVariant" />
      </div>
      <div class="text">
        <product-detail-text :variant="variant" />
        <button v-if="!isUpdate" @click="isUpdate = !isUpdate">
          Update Infomation
        </button>
        <div class="form-update" v-else>
          <product-update-title v-on:changTitle="handleChangTitle" />
          <product-update-price v-on:changNumber="handleChangeNumber" />

          <div class="btns">
            <button @click="isUpdate = false" class="close">CLOSE</button>
            <button @click="handleUpdate">UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductDetailImage from "./ProductDetailImage.vue";
import ProductDetailText from "./ProductDetailText.vue";
import ProductUpdateTitle from "./ProductUpdateTitle.vue";
import ProductUpdatePrice from "./ProductUpdatePrice.vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      variant: {},
      isUpdate: false,
      productTitle: "",
      amountNumber: "",
      percentNumber: "",
      operator: "+",
    };
  },
  components: {
    ProductDetailImage,
    ProductDetailText,
    ProductUpdateTitle,
    ProductUpdatePrice,
  },

  methods: {
    ...mapActions("product", [
      "getProductById",
      "updateProductTitle",
      "updatePriceByAmount",
      "updatePriceByPercent",
    ]),

    handleTransVariant(data) {
      this.variant = data;
    },
    handleChangTitle(title) {
      this.productTitle = title;
    },
    handleChangeNumber({ amountNumber, operator, percentNumber }) {
      if (amountNumber || amountNumber == "") this.amountNumber = amountNumber;
      if (operator) this.operator = operator;
      if (percentNumber || percentNumber == "")
        this.percentNumber = percentNumber;
    },
    handleUpdate() {
      // Update Title
      if (this.productTitle) {
        let price = {};
        this.productItem.variants.forEach((variant) => {
          price = { ...price, [variant.id]: variant.price };
        });
        const payload = {
          id: this.productItem.id,
          productTitle: this.productTitle,
          price,
        };
        this.updateProductTitle(payload);
      }

      // Update price by Amount
      if (this.amountNumber) {
        const payload = {
          id: this.variant.id,
          value: this.variant.price,
          amount: this.amountNumber,
          operator: this.operator,
        };
        this.updatePriceByAmount(payload);
      }

      // Update price by Percent
      if (this.percentNumber) {
        const payload = {
          id: this.variant.id,
          value: this.variant.price,
          percent: this.percentNumber,
          operator: this.operator,
        };
        this.updatePriceByPercent(payload);
      }
    },
  },
  computed: {
    ...mapState("product", ["productItem"]),
  },
  created() {
    const productId = this.$route.params.id;
    const payload = {
      id: productId,
    };
    this.getProductById(payload);
  },
};
</script>

<style lang="scss" scoped>
.productDetail {
  &__name {
    padding: 14px 0;
    font-weight: 700;
    font-size: 24px;
    color: #6c5ce7;
  }
  &__content {
    background: #fff;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    .img {
      width: 50%;
    }
    .text {
      flex: 1;
      .form-update {
        border: 1px solid #6c5ce7;
        margin: 12px auto;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 1px 5px;
        background: #dfe6e9;
      }
      .btns {
        margin: 12px 0;
        display: flex;
        gap: 0 24px;
        justify-content: center;
        button {
          margin: 0;
        }
        .close {
          background: #d63031;
        }
      }
    }
    button {
      margin: 58px auto;
      display: block;
      padding: 8px 20px;
      background: blue;
      color: #fff;
      border-radius: 5px;
      border: 1px solid;
    }
  }
}
</style>