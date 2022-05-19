<template>
  <div class="homepage">
    <h1>{{ label }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return {
      label:"This is Home Page"
    }
  }
}
</script>

<style scoped lang="scss">
.homepage{
  h1{
    text-align: center;
    margin:48px auto
  }
}
</style>
