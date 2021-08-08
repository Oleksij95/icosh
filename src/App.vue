<template>
  <div id="app" @click="checkSearchBLock($event)">
  
    <TopLine></TopLine>
    <router-view />

    <LeaveQuestion></LeaveQuestion>
  </div>
</template>

<script>
  import TopLine from './components/TopLine.vue'
  import LeaveQuestion from './components/LeaveQuestion.vue'
 
  export default{
    methods: {
      checkSearchBLock(event){
        if (event.target.classList.contains("search_popup")){
          this.$store.dispatch('showSearch', false)
          document.querySelector('#main_search_wrapper .search_block').classList.remove("search_block_active");
          document.querySelector("#app").classList.remove("search_popup");
        }
      }
    },
    components: {
      TopLine,
      LeaveQuestion
    }
  }

</script>



<style lang="scss">
  
</style>
