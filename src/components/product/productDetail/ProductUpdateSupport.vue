<template>
  <div class="updateSupport">
    <p class="updateSupport__title" @click="isShowSupport = !isShowSupport">
      {{ $t("supportPage.title") }}
    </p>
    <div class="updateSupport__content" v-if="isShowSupport">
      <p class="intro">
        You can update information about the product title, the price, or both.
      </p>
      <div class="detail">
        <p class="title">1. Update information about product title:</p>
        <ul>
          <li>
            First you enter the new product title you want to edit (We have
            taken the old names and you just have to edit them, of course you
            can delete and type completely different content if you want, to do
            this please click the Clear button)
          </li>
          <li>Next, to update, click the Update button</li>
          <li>
            You can cancel, click the X in the top corner or stick to the Close
            button
          </li>
          <li>
            Note: You can only hit update if new header content is imported.
          </li>
        </ul>
        <p class="price">2. Updating information on product prices</p>
        <ul>
          <li>
            Before entering new content, please click the Clear button to clear
            the pre-filled data
          </li>
          <li>
            Next, select the Variant for which you want to update the price
          </li>
          <li>Note, you can only update 1 variant at a time</li>
          <li>
            If you want to update the price by Amount, enter text in the box
            Amount, at a time you can only update by amount or in percent
          </li>
          <li>
            If you want to update the price in Percent, enter text in the box
            Percent
          </li>
          <li>
            Choose operator + if you want to increment, - if you want to
            decrease
          </li>
          <li>
            Finally, to update press the Update button, to cancel the update
            press Close button or X
          </li>
        </ul>

        <p class="both">3. Update both price and product title</p>
        <ul>
          <li>You can update the product title and price at the same time</li>
          <li>
            Just enter a new title and follow the steps to update the price,
            then Click the Update button to update
          </li>
        </ul>
      </div>
      <router-link :to="{ name: 'supportPage' }"
        >See more information here</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductUpdateSupport",
  data() {
    return {
      isShowSupport: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.updateSupport {
  &__title {
    margin: 10px 0 0 0;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    color: #2c3e50;
    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
  &__content {
    border: 1px solid rgba(149, 165, 166, 0.2);
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(236, 240, 241, 0.3);

    p.title,
    .price,
    .both {
      font-weight: 600;
      margin: 0px 0 4px 0;
      &:hover {
        cursor: pointer;
        color: #2980b9;
      }
    }
    .price,
    .both {
      margin: 28px 0 4px 0;
    }
    p.intro {
      margin: 0 0 16px 0;
      font-weight: 600;
    }
    ul {
      margin-top: 0;
      li {
        padding: 3px 0px;
      }
    }
  }
}
</style>