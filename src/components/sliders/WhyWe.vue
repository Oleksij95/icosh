<template>
     <VueSlickCarousel class="slider" v-bind="sliderSettings">
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Устойчивое развитие</p>
                <p>Мы помогаем сделать бизнес более устойчивым, улучшаем репутацию и бренд компании, экономим средства, делаем работу безопасной для здоровья и окружающей среды</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-1.svg" alt="Устойчивое развитие">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Удобный формат</p>
                <p>Мы понимаем, что все люди разные, поэтому предлагаем различные форматы обучения. Вы можете пройти курсы у нас в учебном центре, мы можем провести курс на вашем предприятии или вы можете обучаться дистанционно, онлайн с помощью видеоконференций, с помощью нашей цифровой платформы или в смешанном формате. Выбирайте любой вариант обучения, который подходит именно Вам</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-2.svg" alt="Удобный формат">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Опыт и команда</p>
                <p>Мы - это интернациональная команда, имеющая огромный практический опыт и доказанный уровень профессионализма. <br>
                Мы не останавливаемся на достигнутом развивая свою компетентность и профессионализм, считаем, что постоянное совершенствование ключ к успеху</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-3.svg" alt="Опыт и команда">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Качественное обучение</p>
                <p>Мы проводим обучение по самым эффективным программам от всемирно известных и общепризнанных лидеров, а также по собственным авторским программам, основанным на практическом опыте. Всё для профессионального роста и развития персонала до любого уровня экспертности</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-4.svg" alt="Качественное обучение">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Широкий спектр услуг</p>
                <p>Мы предоставляем полный замкнутый спектр услуг в области безопасности труда и здоровья, начиная от анализа состояния системы управления, оценки рисков, разработки стратегии действий и планов мероприятий, оказываем поддержку внедрения, оценку эффективности систем, а также последующее сопровождение проектов</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-5.svg" alt="Широкий спектр услуг">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Цифровые решения</p>
                <p>Мы предлагаем инновационные цифровые решения в области управления обучением, процессами управления функцией безопасности труда и здоровья, а также экологии</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-6.svg" alt="Цифровые решения">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Масштаб и сфера охвата</p>
                <p>Мы помогаем не только крупным компаниям, но также малому и среднему бизнесу, государственным предприятиям, частным лицам, профессионалам в области охраны труда и экологии, руководителям среднего звена и топ менеджерам, а также просто работникам.  К сферам нашей компетентности входят такие отрасли как: горнодобывающая, металлургическая, лесная, пищевая, химическая, строительная, автотранспорт, машиностроение, образование, торговля и многие другие</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-7.svg" alt="Масштаб и сфера охвата">
            </div>
        </div>
        <div class="slide">
            <div class="text_wrp">
                <p class="title">Удобные формы оплаты услуг</p>
                <p>Мы предлагаем удобные формы сотрудничества и оплаты услуг, привлекательные цены.</p>
            </div>
            <div class="img_wrapper">
                <img src="/img/_src/about-slider-8.svg" alt="Удобные формы оплаты услуг">
            </div>
        </div>
    </VueSlickCarousel>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default{
    data() {
        return{
            sliderSettings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000
            }
        }
    },
    components: {
        VueSlickCarousel
  }
}
</script>

<style>

</style>