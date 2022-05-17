<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h3>Xem Product tại: 
      <router-link to="/product">Product page</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return {
      title: 'Đây là Trang chủ Mini Project Vue 2 js'
    }
  },
  props: {
    msg: {
      type:String,
      default:'This is messager'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
