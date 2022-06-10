<template>
  <div class="support container">
    <h3 class="wellcome">Welcome to our support page.</h3>
    <img class="icon" :src="question_answer" alt="Question and Answer" />
    <p class="freqently">Frequently asked Questions:</p>

    <div class="list">
      <ul>
        <li>How do I sign in.</li>
        <li>Can I sign in with my Google or social media account?</li>
        <li>How to register an account?</li>
        <li>I forgot my password, what should I do?</li>
        <li>Can I change my password?</li>
        <li>
          <product-update-support />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductUpdateSupport from "@/components/product/productDetail/ProductUpdateSupport.vue";
import question_answer from "@/assets/image/question_answer.png";
export default {
  name: "SupportPage",
  data() {
    return {
      question_answer,
    };
  },
  components: {
    ProductUpdateSupport,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.support {
  background: #fff;
  padding: 20px;
  margin: 40px auto;
  .wellcome {
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    margin: 0 0 12px 0;
  }
  .icon {
    display: block;
    margin: 10px auto;
    width: 10%;
  }
  .freqently {
    margin-bottom: 0;
    font-weight: 700;
  }
  .list {
    ul {
      padding-left: 20px;
      li:not(:last-child) {
        margin: 10px 0 0 0;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 600;
        font-style: italic;
        color: #2c3e50;
      }
    }
  }
}
</style>