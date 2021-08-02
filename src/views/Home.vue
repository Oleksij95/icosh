<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <WeSave></WeSave>
    <FreeConsultation></FreeConsultation>
    <StudyingPrograms></StudyingPrograms>
    <OurServices></OurServices>
    <TalkAboutUs></TalkAboutUs>
    <HomeFaq></HomeFaq>
    <ConvincingStatistics></ConvincingStatistics>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/headers/HomeHeader'
import WeSave from '../components/WeSave.vue'
import FreeConsultation from '../components/FreeConsultation.vue'
import StudyingPrograms from '../components/StudyingPrograms.vue'
import OurServices from '../components/OurServices'
import TalkAboutUs from '../components/TalkAboutUs'
import HomeFaq from '../components/HomeFaq.vue'
import ConvincingStatistics from "../components/ConvincingStatistics.vue"

export default {
  name: 'Home',
  components: {
    HomeHeader,
    WeSave,
    FreeConsultation,
    StudyingPrograms,
    OurServices,
    TalkAboutUs,
    HomeFaq,
    ConvincingStatistics
  }
}
</script>
