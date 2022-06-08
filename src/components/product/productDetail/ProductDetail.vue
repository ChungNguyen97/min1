<template>
  <div class="productDetail container">
    <div class="productDetail__name">Product detail page</div>
    <div class="productDetail__content">
      <div class="img">
        <product-detail-image v-on:transVariant="handleTransVariant" />
      </div>
      <div class="text">
        <product-detail-text :variant="variant" />
        <button
          v-if="!isUpdate"
          @click="isUpdate = !isUpdate"
          class="updateInfo"
        >
          Update Infomation
          <iconsvg
            class="pen"
            name="pen-solid"
            width="14"
            height="14"
            color="#fff"
          />
        </button>
        <div class="content" v-else>
          <div class="content_loading" v-if="isShowUpdateLoading">
            <div class="iconLoadUpdate"></div>
            <p class="text_loading">Updating changes...</p>
          </div>
          <div class="content__form" v-else>
            <span class="cancel" @click="handleCancel">
              <iconsvg name="cancel-1" class="svg-icon-cancel" />
            </span>
            <product-update-title
              :title="productTitle"
              v-on:changTitle="handleChangTitle"
              v-on:attachUpdate="handleUpdate"
            />
            <product-update-price
              :aN="amountNumber"
              :pN="percentNumber"
              :oP="operator"
              :variant="variant"
              v-on:changNumber="handleChangeNumber"
              v-on:transV="handleTransVariant"
            />

            <div class="btns">
              <button @click="isUpdate = false" class="close">CLOSE</button>
              <button
                :class="activeBtn ? 'clear' : 'default'"
                @click="handleClear"
              >
                CLEAR
              </button>
              <button
                @click="handleUpdate"
                :class="activeBtn ? 'active' : 'default'"
              >
                UPDATE
              </button>
            </div>
            <product-update-support />
          </div>
        </div>
        <div v-if="isUpdate" class="update-form"></div>
      </div>
    </div>
    <notifications
      group="notifyStatusUpdate"
      width="50%"
      position="top center"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductDetailImage from "./ProductDetailImage.vue";
import ProductDetailText from "./ProductDetailText.vue";
import ProductUpdateTitle from "./ProductUpdateTitle.vue";
import ProductUpdatePrice from "./ProductUpdatePrice.vue";
import ProductUpdateSupport from "./ProductUpdateSupport.vue";
import "@/assets/icons";

export default {
  name: "ProductDetail",
  data() {
    return {
      variant: {},
      isUpdate: false,
      productTitle: "",
      amountNumber: "",
      percentNumber: "",
      operator: "",
      isShowUpdateLoading: false,
    };
  },
  components: {
    ProductDetailImage,
    ProductDetailText,
    ProductUpdateTitle,
    ProductUpdatePrice,
    ProductUpdateSupport,
  },

  methods: {
    ...mapActions("product", [
      "getProductById",
      "updateProductTitle",
      "updatePriceByAmount",
      "updatePriceByPercent",
    ]),
    handleCancel() {
      this.isUpdate = false;
    },

    handleTransVariant(data) {
      this.variant = data;
    },
    handleChangTitle(title) {
      this.productTitle = title;
    },
    handleChangeNumber(data) {
      if (data.numberAmount || data.numberAmount === "") {
        this.amountNumber = data.numberAmount;
      } else if (data.percentNumber || data.percentNumber === "") {
        this.percentNumber = data.percentNumber;
      } else {
        this.operator = data.operator;
      }
    },
    async handleUpdate() {
      if (!(this.productTitle || this.amountNumber || this.percentNumber)) {
        alert("Ban can nhap thong tin");
        return;
      }
      this.isShowUpdateLoading = true;

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
        await this.updateProductTitle(payload);
        this.isShowUpdateLoading = false;
      }

      // Update price by Amount
      if (this.amountNumber) {
        const payload = {
          id: this.variant.id,
          value: this.variant.price,
          amount: this.amountNumber,
          operator: this.operator,
        };
        await this.updatePriceByAmount(payload);
        this.isShowUpdateLoading = false;
      }

      // Update price by Percent
      if (this.percentNumber) {
        const payload = {
          id: this.variant.id,
          value: this.variant.price,
          percent: this.percentNumber,
          operator: this.operator,
        };
        await this.updatePriceByPercent(payload);
        this.isShowUpdateLoading = false;
      }

      if (this.isUpdateSuccess && !this.isLoading) {
        this.$notify({
          group: "notifyStatusUpdate",
          title: "Update notification",
          text: "Update change successfully",
          duration: 1000,
        });
        // setTimeout(() => {
        //   this.isUpdate = false;
        // }, 2000);
      } else {
        this.$notify({
          group: "notifyStatusUpdate",
          title: "Update notification",
          text: "Update change failed",
          duration: 2000,
        });
      }
    },
    handleClear() {
      this.productTitle = "";
      (this.amountNumber = ""), (this.percentNumber = "");
      this.operator = "";
    },
  },

  computed: {
    ...mapState("product", ["productItem", "isLoading", "isUpdateSuccess"]),
    activeBtn() {
      if (this.productTitle || this.amountNumber || this.percentNumber) {
        return true;
      } else {
        return false;
      }
    },
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
    padding: 10px 10px 20px 10px;
    .img {
      width: 50%;
    }
    button {
      margin: 40px auto;
      display: block;
      padding: 5px 14px;
      background: blue;
      color: #fff;
      border-radius: 5px;
      border: 1px solid;
      &:hover {
        cursor: pointer;
      }
    }
    .text {
      flex: 1;
      border-left: 2px solid rgba(30, 55, 153, 0.2);
      padding: 40px 0 0 24px;
      .updateInfo {
        text-transform: uppercase;
        padding: 7px 20px;
        &:hover {
          cursor: pointer;
          opacity: 0.86;
        }
        .pen {
          margin-left: 3px;
        }
      }
      .update-form {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background: #333;
        right: 0;
        opacity: 0.5;
      }
      .content {
        max-height: 600px;
        overflow-y: auto;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 1px 5px #ccc;
        background: #fff;
        z-index: 1000;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &__form {
          min-width: 600px;
        }
        .cancel {
          color: #000;
          position: absolute;
          font-weight: 600;
          padding: 4px 10px;
          top: 0;
          right: 0;
          font-size: 17px;
          &:hover {
            cursor: pointer;
            background: red;
            .svg-icon-cancel {
              color: #fff;
            }
          }
        }
      }
      .content_loading {
        margin-top: 21px;
        min-width: 370px;
        min-height: 100px;
        .text_loading {
          text-align: center;
          font-weight: 600;
          font-size: 20px;
          font-style: italic;
          text-shadow: 0px 1px 5px #95a5a6;
          letter-spacing: 3px;
          color: #2980b9;
          margin: 10px 0 30px 0;
        }
        .iconLoadUpdate {
          width: 30px;
          height: 30px;
          border: 5px solid #2980b9;
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
      .btns {
        margin: 16px 10px 0;
        display: flex;
        gap: 0 24px;
        justify-content: flex-end;
        border-top: 1px solid rgba(149, 165, 166, 0.7);
        padding-top: 8px;
        button {
          margin: 0;
          &:hover {
            opacity: 0.85;
            cursor: pointer;
          }
        }
        .close {
          background: #d63031;
        }
        .clear {
          background: #f39c12;
        }
        .default {
          background: #ccc;
          &:hover {
            cursor: default;
            opacity: 1;
          }
        }
        .active {
          background: blue;
        }
      }
    }
  }
}
</style>