<template>
  <div class="control__numberProduct">
    <label for="selectNumber">Chọn số lượng sản phẩm muốn xem: </label>
    <input
      type="number"
      name="selectNumber"
      id="selectNumber"
      v-model="params.limit"
    />
    <!-- @keyup.enter="callData() && (searchText = '')" -->
    <!-- v-on:click="callData() && (searchText = '')" -->
    <button class="btn btn-primary">Xem</button>
  </div>
</template>

<script>
export default {
  name: "ControlResult",
  data() {
    return {};
  },
  props: {},
};
</script>