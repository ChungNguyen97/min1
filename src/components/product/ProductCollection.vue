<template>
  <div class="collection">
    <h3>Filter by Collections</h3>
    <select name="collection" @change="handleChangeSelect">
      <option value="">---- Select collection ----</option>
      <option 
          v-for="(option,index) in this['collection/getCollections']"
          :key="index"
          :value="option.title" 

      >
        {{option.title}}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name:'product-collection',
  data: () => ({
    title:''
  }),
  methods: {
    ...mapActions(['collection/getCollectionData']),
    handleChangeSelect(e){
      console.log(e.target.value);
    }
  },
  computed: {
    ...mapGetters(['collection/getCollections'])
  },
  created(){
    this.$store.dispatch('collection/getCollectionData')
  }
}
</script>

<style>

</style>