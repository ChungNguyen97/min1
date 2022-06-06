<template>
  <div class="update-price">
    <div class="input-info">
      <p>Update Price:</p>
      <div class="form-group">
        <label for="amount">Amount: </label>
        <input
          type="number"
          name="amountNumber"
          id="amount"
          v-model="amountNumber"
          placeholder="Enter amount number..."
        />
      </div>
      <div class="form-group">
        <label for="percent">Percent: </label>
        <input
          type="number"
          id="percent"
          name="percentNumber"
          v-model="percentNumber"
          placeholder="Enter percent number..."
        />
      </div>

      <div class="operator">
        <p><strong>Oparator: </strong></p>
        <div>
          <button ref="btnIn" @click="handleIncrement">+</button>
          <button ref="btnDe" @click="handelDecrement">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductUpdatePrice",

  data: () => ({
    operator: "",
    amountNumber: "",
    percentNumber: "",
  }),

  props: {
    variant: { type: Object },
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
  },
  watch: {
    amountNumber() {
      this.percentNumber = "";
      this.$emit("changNumber", { amountNumber: this.amountNumber });
    },
    percentNumber() {
      this.amountNumber = "";
      this.$emit("changNumber", { percentNumber: this.percentNumber });
    },
    operator() {
      this.$emit("changNumber", { operator: this.operator });
    },
  },
  mounted() {
    this.$refs.btnIn.classList.add("active");
  },
};
</script>

<style lang="scss" scoped>
.update-price {
  padding: 10px;
  border-radius: 4px;
  .input-info {
    p {
      margin: 8px 0 6px 0;
      font-weight: 700;
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
        padding: 3px 12px;
        flex: 1;
      }
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
      padding: 3px 12px;
    }
  }
  .control {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .active {
    background: blue;
    color: #fff;
    border: none;
    padding: 6px 12px !important;
    border-radius: 3px;
    font-weight: 700;
  }
}
</style>