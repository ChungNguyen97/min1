<template>
  <footer class="footer">
    <div class="container">
      <h3>{{ title }}</h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-comp",
  data() {
    return {
      title: "Mini Project Vue2",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  h3 {
    margin: 4px 0;
    padding: 12px 0;
  }
}
</style>