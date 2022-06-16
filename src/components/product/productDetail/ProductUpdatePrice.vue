<template>
  <div class="update-price">
    <div class="input-info">
      <div class="branch" @click="isShow = !isShow">
        <p>{{ $t("updatePrice.title") }}</p>

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

      <div class="content" v-if="isShow">
        <p class="selectVariant">{{ $t("updatePrice.select") }}</p>
        <div class="variant">
          <div
            v-for="(v, i) in getVariants"
            :key="v.id"
            class="item"
            @click="handleShowDetailVariant(v, i)"
            :class="{ activeImg: i === indexImg }"
          >
            <img :src="v.image.url || noImageAvaiable" :alt="v.title" />
            <p>{{ v.title }}</p>
            <p class="price">{{ handlFormatPrice(v.price) }}</p>
          </div>
        </div>
        <p class="moreVariant">
          {{ $t("updatePrice.cP") }}:
          <span class="price">{{ handlFormatPrice(variant.price) }}</span> -
          {{ $t("updatePrice.tV") }}:
          <span class="titleVariant">{{ currentTitleVariant }}</span>
        </p>
        <div class="form-group">
          <label for="amount">{{ $t("updatePrice.aM") }}: </label>
          <input
            type="number"
            name="amountNumber"
            id="amount"
            v-model="numberAmount"
            :placeholder="$t('updatePrice.placeholderAmount')"
            @click="percentNumber = ''"
          />
        </div>
        <div class="form-group">
          <label for="percent">{{ $t("updatePrice.pC") }}: </label>
          <input
            type="number"
            id="percent"
            name="percentNumber"
            v-model="percentNumber"
            :placeholder="$t('updatePrice.placeholderPercent')"
            @click="numberAmount = ''"
          />
        </div>

        <div class="operator">
          <span>{{ $t("updatePrice.oP") }}: </span>
          <div>
            <button ref="btnIn" @click="handleIncrement">+</button>
            <button ref="btnDe" @click="handelDecrement">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { handlFormatPrice } from "@/library";

import "@/assets/icons";

export default {
  name: "ProductUpdatePrice",

  data: () => ({
    operator: "",
    numberAmount: "",
    percentNumber: "",
    isShow: false,
    showCurrentPrice: false,
    currentPrice: null,
    indexImg: 0,
    currentTitleVariant: "",
    handlFormatPrice,
  }),
  props: {
    aN: {
      type: String,
    },
    pN: {
      type: String,
    },
    oP: {
      type: String,
    },
    variant: {
      type: Object,
    },
  },

  methods: {
    handleIncrement(e) {
      this.operator = "+";
      e.target.classList.add("active");
      this.$refs.btnDe.classList.remove("active");
    },
    handelDecrement(e) {
      this.operator = "-";
      this.$refs.btnIn.classList.remove("active");
      e.target.classList.add("active");
    },
    handleShowDetailVariant(v, i) {
      this.indexImg = i;
      this.currentPrice = v.price;
      this.currentTitleVariant = v.title;
      this.showCurrentPrice = true;
      this.$emit("transV", v);
    },
  },
  computed: {
    ...mapGetters("product", ["getVariants"]),
    ...mapState("product", ["noImageAvaiable"]),
  },
  watch: {
    numberAmount() {
      this.$emit("changNumber", { numberAmount: this.numberAmount });
    },
    percentNumber() {
      this.$emit("changNumber", { percentNumber: this.percentNumber });
    },
    operator() {
      this.$emit("changNumber", { operator: this.operator });
    },

    aN() {
      this.numberAmount = this.aN;
    },
    pN() {
      this.percentNumber = this.pN;
    },
    oP() {
      this.operator = this.oP;
    },
  },
  created() {
    // this.isShow = true;
  },
};
</script>

<style lang="scss" scoped>
.update-price {
  padding: 10px;
  border-radius: 4px;
  .input-info {
    padding-top: 10px;
    .branch {
      display: flex;
      justify-content: flex-start;
      gap: 0 2px;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      .icon {
        position: relative;
        top: 1px;
      }
      p {
        margin: 0;
        font-weight: 700;
        color: #2c3e50;
      }
      .line-through {
        color: transparent;
        flex: 1;
        border-top: 1px solid #95a5a6;
        position: relative;
      }
    }
    .selectVariant {
      margin: 4px 0 4px 0px;
      font-style: italic;
      font-size: 14px;
    }
    .variant {
      border: 1px solid rgba(149, 165, 166, 0.15);
      border-radius: 5px;
      display: flex;
      justify-content: space-evenly;
      gap: 12px;
      padding: 12px 0;
      margin-bottom: 20px;
      .item {
        border: 1px solid rgba(149, 165, 166, 0.65);
        width: 14%;
        padding: 4px;
        text-align: center;
        p {
          margin: 5px 0;
        }
        p.price {
          font-style: italic;
        }
        img {
          width: 90%;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    .moreVariant {
      text-align: center;
      border-bottom: 1px solid #ff7675;
      padding: 4px 20px;
      width: fit-content;
      margin: 0 auto 14px;
      border-radius: 5px;
      box-shadow: 0px 1px 0px #ff7675;
      font-weight: 600;
      font-size: 15px;
      .titleVariant,
      .price {
        color: #d63031;
      }
    }
    .form-group {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      label {
        padding-right: 12px;
      }
      input {
        border: 1px solid rgba(41, 128, 185, 0.6);
        flex: 1;
        color: #2980b9;
        font-style: italic;
        padding: 3px 12px;
        border-radius: 5px;
        &:focus {
          border: 2px solid;
          outline: none;
          background: rgba(236, 240, 241, 0.4);
        }
      }
    }
    .form-group > label,
    .operator span {
      font-weight: 600;
      font-size: 15px;
    }
  }
  .math {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }
  .operator {
    display: flex;
    align-items: center;
    gap: 0 16px;
    button {
      margin-right: 12px;
      padding: 1px 12px;
      font-weight: 600;
      font-size: 17px;
      border: 1px solid;
      border-radius: 3px;
      color: #2980b9;
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
  .control {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .active {
    background: blue;
    color: #fff !important;
    padding: 2px 13px !important;
  }
  .activeImg {
    border-radius: 4px;
    border: 1px solid #ff7675 !important;
    color: #ff7675;
    box-shadow: 0px 1px 5px #ff7675;
  }
}
</style>