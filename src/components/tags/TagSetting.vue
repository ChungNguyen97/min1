<template>
  <section class="tagControl" v-if="isShow">
    <h3>{{ $t("tagSetting.title") }}:</h3>
    <div class="f-group">
      <input
        type="radio"
        value="auto"
        v-model="valueSelect"
        id="auto"
        name="isClose"
      />
      <label for="auto">{{ $t("tagSetting.auto") }}</label>
    </div>
    <div class="f-group">
      <input
        type="radio"
        value="no-auto"
        v-model="valueSelect"
        id="no-auto"
        name="isClose"
      />
      <label for="no-auto">{{ $t("tagSetting.noAuto") }}</label>
    </div>

    <div class="f-group">
      <input
        type="radio"
        value="after-t"
        v-model="valueSelect"
        id="after-t"
        name="isClose"
      />
      <label for="after-t">
        {{ $t("tagSetting.autoAfter") }}
        <input class="inputTime" type="number" id="after-t" v-model="time" />
        {{ $t("tagSetting.second") }}
      </label>
    </div>

    <!-- reconfirm -->
    <aside class="showMes">
      <h3 class="title">{{ $t("tagSetting.msg") }}:</h3>
      <div class="f-group">
        <input
          type="radio"
          value="show-mes"
          v-model="showMes"
          id="show-mes"
          name="mes"
        />
        <label for="show-mes">{{ $t("tagSetting.showMsg") }}</label>
      </div>
      <div class="f-group">
        <input
          type="radio"
          value="not-show-mes"
          v-model="showMes"
          id="not-show-mes"
          name="mes"
        />
        <label for="not-show-mes">{{ $t("tagSetting.noShowMsg") }}</label>
      </div>
    </aside>

    <aside>
      <button class="cancle" @click="handleCancel">
        {{ $t("tagSetting.cancle") }}
      </button>
      <button class="save" @click="handleSave">
        {{ $t("tagSetting.save") }}
      </button>
    </aside>
  </section>
</template>

<script>
export default {
  name: "TagSetting",
  data() {
    return {
      valueSelect: "auto",
      time: null,
      isShow: true,
      showMes: "show-mes",
    };
  },
  methods: {
    handleCancel() {
      this.isShow = false;
    },
    handleSave() {
      this.$emit("attachSetting", {
        valueSelect: this.valueSelect,
        time: this.time,
        showMes: this.showMes,
      });
      this.isShow = false;
      const value = {
        valueSelect: this.valueSelect,
        time: this.time,
        showMes: this.showMes,
      };
      localStorage.setItem("vS", JSON.stringify(value));
    },
  },
  created() {
    const valueLocal = JSON.parse(localStorage.getItem("vS"));
    const { valueSelect, time, showMes } = valueLocal;
    if (valueSelect) {
      this.valueSelect = valueSelect;
    }
    if (time) {
      this.time = time;
    }
    if (showMes)
      this.$emit("attachSetting", {
        valueSelect: this.valueSelect,
        time: this.time,
        showMes: this.showMes,
      });
  },
};
</script>

<style lang="scss" scoped>
.tagControl {
  background: #fff;
  opacity: 1;
  position: fixed;
  top: 25px;
  left: 0;
  bottom: 0;
  z-index: 10;
  padding: 10px;
  right: 0;
  h3 {
    margin: 0 0 7px 0;
  }
  .f-group {
    color: #333;
    margin-bottom: 8px;
    &:hover {
      cursor: pointer;
    }
    label {
      padding-left: 4px;
    }
    input {
      max-width: 80px;
      border: none;
      border-bottom: 1px solid;
    }
  }

  aside {
    text-align: right;
    margin: 16px 0px 20px 0 0;
    button {
      border: none;
      padding: 4px 12px;
      color: #fff;
      cursor: pointer;
      border-radius: 3px;
      &:hover {
        opacity: 0.87;
      }
    }
    .cancle {
      background: #e74c3c;
      margin-right: 12px;
    }
    .save {
      background: #2980b9;
    }
  }
  .showMes {
    text-align: left;
    .title {
      margin: 10px 0 5px 0;
    }
  }
}
</style>