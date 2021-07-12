<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <WeSave></WeSave>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/headers/HomeHeader'
import WeSave from '../components/WeSave.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    WeSave
  }
}
</script>
