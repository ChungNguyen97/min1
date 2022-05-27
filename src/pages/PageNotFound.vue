<template>
  <div class="pageNotFound">
    <h3>Trang này không tồn tại, xem lại đường dẫn của bạn</h3>
    <p>Quay về 
        <router-link to="/"><i>Trang chủ</i></router-link>
    </p>
  </div>
</template>

<script>
export default {
  name:'PageNotFound'
}
</script>

<style>
  .pageNotFound{
    text-align: center;
    margin:80px auto;
  }
</style>