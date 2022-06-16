<template>
  <div class="loadingPage">
    <div class="loadingPage__content">
      <div
        class="iconLoading"
        :style="{
          width: width + 'px',
          height: height + 'px',
          borderColor: borderColor,
          borderWidth: borderWidth + 'px',
        }"
      ></div>
      <h3 :style="{ color: textColor }">Loading...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
  props: {
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
    borderColor: {
      type: String,
      default: "blue",
    },
    textColor: {
      type: String,
      default: "#fff",
    },
    borderWidth: {
      type: [String, Number],
      default: 5,
    },
  },
};
</script>

<style scoped lang="scss">
.loadingPage {
  z-index: 11111;
  text-align: center;
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: #333;
  opacity: 0.5;
  &__content {
    margin: auto;
  }
  .iconLoading {
    margin: auto;
    border-radius: 100rem;
    border-style: solid;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
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
  h3 {
    text-align: center;
    letter-spacing: 3px;
    font-style: italic;
  }
}
</style>