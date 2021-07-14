<template>
    <VueSlickCarousel class="slider" v-bind="sliderSettings">
        <template #prevArrow="">
            <div class="custom-arrow">
                <div class="sliderArrow prevArrow"><svg width="54" height="18" viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2281 1.8782L10.425 0.0750732L1.5 9.00013L10.425 17.9251L12.2281 16.122L6.38112 10.275H52.5V7.72501H6.38135L12.2281 1.8782Z" fill="#4F4F4F"/></svg></div>
            </div>
        </template>
        

        <div class="slide col-12">
            <div class="video_wrp">
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        data-poster="/video/1-final.png"
                    >
                        <source
                        size="720"
                        src="/video/1-final.mp4"
                        type="video/mp4"
                        />
                        <track
                        default
                        kind="captions"
                        label="English captions"
                        srclang="en"
                        />
                    </video>
                </vue-plyr>
            </div>
        </div>

        <div class="slide col-12">
            <div class="video_wrp">
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        data-poster="/video/1-final.png"
                    >
                        <source
                        size="720"
                        src="/video/1-final.mp4"
                        type="video/mp4"
                        />
                        <track
                        default
                        kind="captions"
                        label="English captions"
                        srclang="en"
                        />
                    </video>
                </vue-plyr>
            </div>
        </div>

        <div class="slide col-12">
            <div class="video_wrp">
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        data-poster="/video/1-final.png"
                    >
                        <source
                        size="720"
                        src="/video/1-final.mp4"
                        type="video/mp4"
                        />
                        <track
                        default
                        kind="captions"
                        label="English captions"
                        srclang="en"
                        />
                    </video>
                </vue-plyr>
            </div>
        </div>

        <div class="slide col-12">
            <div class="video_wrp">
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        data-poster="/video/1-final.png"
                    >
                        <source
                        size="720"
                        src="/video/1-final.mp4"
                        type="video/mp4"
                        />
                        <track
                        default
                        kind="captions"
                        label="English captions"
                        srclang="en"
                        />
                    </video>
                </vue-plyr>
            </div>
        </div>

        <div class="slide col-12">
            <div class="video_wrp">
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        data-poster="/video/1-final.png"
                    >
                        <source
                        size="720"
                        src="/video/1-final.mp4"
                        type="video/mp4"
                        />
                        <track
                        default
                        kind="captions"
                        label="English captions"
                        srclang="en"
                        />
                    </video>
                </vue-plyr>
            </div>
        </div>

        <template #nextArrow="">
            <div class="custom-arrow">
                <div class="sliderArrow nextArrow"><svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7719 16.122L42.575 17.9251L51.5 9.00007L42.575 0.0750732L40.7719 1.8782L46.6189 7.7252L0.5 7.7252L0.5 10.2752L46.6186 10.2752L40.7719 16.122Z" fill="#4F4F4F"/></svg></div>
            </div>
        </template>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default{
    name: "VideoReviews",
    data() {
        return{
            sliderSettings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                touchMove: false,
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
