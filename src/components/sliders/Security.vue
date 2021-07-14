<template>
    <VueSlickCarousel class="slider" v-bind="sliderSettings">
        <div class="slide">
            <a href="#">
                <img src="/img/_src/slider/2.png" alt="Развитие персонала и его квалификация">
                <div class="text_wrapper">
                    <p class="title">Развитие персонала и его квалификация  </p>
                    <span class="link">Подробнее</span>
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7929 6.79292L16.5 7.50002L20 4L16.5 0.5L15.7929 1.20711L18.0858 3.50005L8.74227e-08 3.50005L0 4.50005L18.0857 4.50005L15.7929 6.79292Z" fill="#18438B"></path>
                    </svg>
                </div>
            </a>
        </div>
        <div class="slide">
            <a href="#">
                <img src="/img/_src/slider/2.png" alt="Развитие персонала и его квалификация">
                <div class="text_wrapper">
                    <p class="title">Развитие персонала и его квалификация  </p>
                    <span class="link">Подробнее</span>
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7929 6.79292L16.5 7.50002L20 4L16.5 0.5L15.7929 1.20711L18.0858 3.50005L8.74227e-08 3.50005L0 4.50005L18.0857 4.50005L15.7929 6.79292Z" fill="#18438B"></path>
                    </svg>
                </div>
            </a>
        </div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default{
    name: "Security",
    data() {
        return{
            sliderSettings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            infinite: true
                        }
                    }
                ]
            }
        }
    },
    methods: {
        
    },
    components: {
        VueSlickCarousel
    }
}
</script>

<style lang="scss">

</style>