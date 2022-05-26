<template>
  <div class="pagination">
    <button @click="handleChangePrev">Prev</button>
    <button @click="handleChangeNext">Next</button>
  </div>
</template>

<script>
export default {
  name:'ProductPagination',
  methods: {
    handleChangeNext(){
      const data = {
        next_page_cursor:'after',
        previous_page_cursor: null
      }
      this.$emit('changePagination',data)
    },
    handleChangePrev(){
      const data = {
        next_page_cursor:null,
        previous_page_cursor: 'before'
      }
      this.$emit('changePagination',data)
    },
  }
}
</script>

<style scoped>
.pagination{
  border:1px solid red;
  text-align: right;
}
</style>