<template>
  <div class="productDetail container">
    <div class="productDetail__name">{{ $t("productDetail.title") }}</div>
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
          {{ $t("productDetail.update") }}
          <iconsvg
            class="pen"
            name="pen-solid"
            width="14"
            height="14"
            color="#fff"
          />
        </button>
        <div class="content" v-else>
          <!-- <div v-if="isShowMes" class="showMes">
            <h3>{{ $t("productDetail.confirmTitle") }}</h3>
            <div class="btns">
              <button class="cancle" @click="handleCancleShowMes">
                {{ $t("productDetail.cancelconfirmTitle") }}
              </button>
              <button @click="handleContinueShowMes">
                {{ $t("productDetail.okcancel") }}
              </button>
            </div>
          </div> -->

          <div class="content_loading" v-if="isShowUpdateLoading">
            <div class="iconLoadUpdate"></div>
            <p class="text_loading">{{ $t("productDetail.updating") }}</p>
          </div>

          <div class="content__form" v-else>
            <span
              v-if="timeAfter && isShowTime"
              class="timeRemainDef"
              ref="timeRemain"
              >{{ $t("productDetail.windown") }}
              <strong>{{ timeRemaining }}</strong>
              {{ $t("productDetail.s") }}
            </span>
            <div class="icon-top">
              <iconsvg
                @click="isShowSetting = !isShowSetting"
                name="gear-solid"
                width="15"
                height="15"
                color="#333"
                class="setting"
              />
              <tag-setting
                v-if="isShowSetting"
                v-on:attachSetting="hanldeUpdateSetting"
              />

              <span class="cancel" @click="handleClose"> X </span>
            </div>
            <product-update-title
              :productTitle="productTitle"
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
            <tag-add
              :listTagAdd="listTagAdd"
              v-on:updateTagName="handleUpdateTagName"
            />
            <tag-remove
              :listTagRemove="listTagRemove"
              v-on:removeTag="handleRemoveTag"
            />
            <div class="btns">
              <button @click="handleClose" class="close">
                {{ $t("productDetail.close") }}
              </button>
              <button
                :class="activeBtn ? 'clear' : 'default'"
                @click="handleClear"
              >
                {{ $t("productDetail.clear") }}
              </button>
              <button
                @click="handleUpdate"
                :class="activeBtn ? 'active' : 'default'"
              >
                {{ $t("productDetail.next") }}
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
import TagAdd from "@/components/tags/TagAdd.vue";
import TagRemove from "@/components/tags/TagRemove.vue";
import TagSetting from "@/components/tags/TagSetting.vue";

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
      listTagAdd: [],
      listTagRemove: [],
      time: null,
      timerId: null,
      tagNameAdd: "",
      valueSelect: "auto",
      timeAfter: null,
      isShowTime: false,
      isShowSetting: false,
      showMes: "no-show-mes",
      isShowMes: false,
      isContinue: false,
      timeRemaining: null,
      timerIdSetIn: null,
    };
  },
  components: {
    ProductDetailImage,
    ProductDetailText,
    ProductUpdateTitle,
    ProductUpdatePrice,
    ProductUpdateSupport,
    TagAdd,
    TagRemove,
    TagSetting,
  },

  methods: {
    ...mapActions({
      updateProductTitle: "product/updateProductTitle",
      getProductById: "product/getProductById",
      updatePriceByAmount: "product/updatePriceByAmount",
      updatePriceByPercent: "product/updatePriceByPercent",
      addTag: "tags/addTag",
      removeTag: "tags/removeTag",
    }),

    handleTransVariant(data) {
      this.variant = data;
    },

    handleChangTitle(title) {
      this.productTitle = title;
    },
    handleUpdateTagName({ list, tag }) {
      this.listTagAdd = list;
      this.tagNameAdd = tag;
    },
    handleRemoveTag(info) {
      this.listTagRemove = info;
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
    hanldeUpdateSetting({ valueSelect, time, showMes }) {
      this.valueSelect = valueSelect;
      this.timeAfter = time;
      this.showMes = showMes;
    },

    handleCancleShowMes() {
      this.isContinue = false;
      this.isShowMes = false;
    },
    handleContinueShowMes() {
      this.isContinue = true;
      this.isShowMes = false;
    },

    //  ===== UPDATE ====>
    async handleUpdate() {
      const cd =
        this.listTagAdd.length !== 0 ||
        this.listTagRemove.length !== 0 ||
        this.productTitle ||
        this.amountNumber ||
        this.percentNumber;
      if (!cd) {
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
        this.productTitle = "";
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
      }

      // Add tag
      if (this.listTagAdd.length !== 0) {
        const params = {
          id: this.productItem.id,
          tag: this.listTagAdd,
        };
        await this.addTag(params);
        this.listTagAdd = [];
      }

      //Remove tag
      if (this.listTagRemove.length !== 0) {
        if (this.showMes === "show-mes") {
          this.isShowUpdateLoading = false;
          const valueConfirm = confirm(
            "Are you sure you want to remove the tag"
          );
          if (valueConfirm) {
            this.isShowUpdateLoading = true;
            const params = {
              id: this.productItem.id,
              tag: this.listTagRemove,
            };
            await this.removeTag(params);
            this.listTagRemove = [];
          }
        } else {
          this.isShowUpdateLoading = true;
          const params = {
            id: this.productItem.id,
            tag: this.listTagRemove,
          };
          await this.removeTag(params);
          this.listTagRemove = [];
        }
      }

      if (this.isShowUpdateLoading) {
        this.getProductById({ id: this.productItem.id });
      }
      this.isShowUpdateLoading = false;
      this.isShowSetting = false;

      if (this.isUpdateSuccess && !this.isLoading) {
        this.$notify({
          group: "notifyStatusUpdate",
          title: "Update notification",
          text: "Update change successfully",
          duration: 1000,
        });
      } else {
        this.$notify({
          group: "notifyStatusUpdate",
          title: "Update notification",
          text: "Update change failed",
          type: "warn",
          duration: 2000,
        });
      }

      switch (this.valueSelect) {
        case "auto": {
          return (this.isUpdate = false);
        }
        case "no-auto": {
          return (this.isUpdate = true);
        }
        case "after-t": {
          this.isShowTime = true;
          this.timeRemaining = Number(this.timeAfter);
          const t = parseInt(this.timeAfter) * 1000;
          setTimeout(() => {
            return (this.isUpdate = false);
          }, t);

          this.timerIdSetIn = setInterval(() => {
            this.timeRemaining -= 1;

            const timeEl = this.$refs.timeRemain;
            if (this.timeRemaining <= 4) {
              setInterval(() => {
                timeEl && timeEl.classList.toggle("timeRemainingEl");
              }, 300);
            }
            timeEl && timeEl.classList.toggle("timeRemainingEl");

            if (this.timeRemaining <= 0) {
              this.isUpdate = false;
              clearInterval(this.timerIdSetIn);
              this.isShowTime = false;
            }
          }, 1000);
        }
      }
    },

    handleClose() {
      this.productTitle = "";
      this.listTagAdd = [];
      this.listTagRemove = [];
      this.tagNameAdd = "";
      this.amountNumber = null;
      this.percentNumber = null;
      this.isUpdate = false;
      clearInterval(this.timerIdSetIn);
      this.timeRemaining = 0;
      this.isShowTime = false;
    },
    handleClear() {
      this.productTitle = "";
      this.listTagAdd = [];
      this.listTagRemove = [];
      this.tagNameAdd = "";
      this.amountNumber = null;
      this.percentNumber = null;
    },
  },

  computed: {
    ...mapState("product", ["productItem", "isLoading", "isUpdateSuccess"]),
    activeBtn() {
      if (
        this.listTagAdd.length !== 0 ||
        this.listTagRemove.length !== 0 ||
        this.productTitle ||
        this.amountNumber ||
        this.percentNumber ||
        this.tagNameAdd
      ) {
        return true;
      } else {
        return false;
      }
    },
    ...mapState("tags", ["updateTag"]),
  },

  created() {
    const productId = this.$route.params.id;
    const payload = {
      id: productId,
    };
    this.getProductById(payload);
    const valueLocal = JSON.parse(localStorage.getItem("vS"));
    if (valueLocal.valueSelect) {
      this.valueSelect = valueLocal.valueSelect;
    }
    if (valueLocal.time) {
      this.timeAfter = valueLocal.time;
    }
  },
  beforeDestroy() {
    clearInterval(this.timerIdSetIn);
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
        .showMes {
          border: 1px solid;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: #333;
          z-index: 120;
          opacity: 0.9;
          color: #fff;
          h3 {
            text-align: center;
            margin-top: 80px;
          }
          .btns {
            display: flex;
            justify-content: center;
          }
        }
        .icon-top {
          position: absolute;
          top: 0;
          right: 0;
          .setting {
            position: relative;
            top: 1px;
            &:hover {
              cursor: pointer;
            }
          }
          .cancel {
            color: #000;
            font-weight: 800;
            padding: 4px 10px;
            font-size: 17px;
            &:hover {
              cursor: pointer;
              color: red;
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
  .timeRemainDef {
    font-style: italic;
    color: #2980b9;
  }
  .timeRemainingEl {
    color: red !important;
  }
}
</style>