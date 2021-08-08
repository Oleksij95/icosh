<template>
  <div id="app">
    <TopLine></TopLine>
    <router-view />

    <LeaveQuestion></LeaveQuestion>
  </div>
</template>

<script>
  import TopLine from './components/TopLine.vue'
  import LeaveQuestion from './components/LeaveQuestion.vue'
  export default{
    components: {
      TopLine,
      LeaveQuestion
    }
  }

</script>



<style lang="scss">
  
</style>
