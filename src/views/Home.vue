<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <WeSave></WeSave>
    <FreeConsultation></FreeConsultation>
    <StudyingPrograms></StudyingPrograms>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/headers/HomeHeader'
import WeSave from '../components/WeSave.vue'
import FreeConsultation from '../components/FreeConsultation.vue'
import StudyingPrograms from '../components/StudyingPrograms.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    WeSave,
    FreeConsultation,
    StudyingPrograms
  }
}
</script>
