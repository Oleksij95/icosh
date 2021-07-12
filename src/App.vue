<template>
  <div id="app">
    <TopLine></TopLine>
    <router-view />
  </div>
</template>

<script>
  import TopLine from './components/TopLine.vue'
  export default{
    components: {
      TopLine
    }
  }

</script>



<style lang="scss">
  
</style>
