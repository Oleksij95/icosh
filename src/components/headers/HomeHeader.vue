<template>
    <header class="home_page">
        <MainMenu></MainMenu>
		<div class="container">
			<div class="row">
				<div class="col-lg-7 col-md-10 col-12">
					<div class="title_wrapper">
						<h1>Международный центр безопасности труда и здоровья </h1>
						<p>Мы формируем безопасное мышление, развиваем культуру <br> безопасности и распространяем лидерство в области безопасности <br> труда и здоровья.</p>
						<div class="wrapper flex_wrapper">
							<a href="#" class="accent_btn btn">Обучение</a>
							<a href="#" class="silver_btn btn">Наши услуги</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<VueSlickCarousel v-bind="sliderSettings" class="header_bottom_menu flex_wrapper flex_between align_center">
			<span>охрана труда</span>
			<span>опыт</span>
			<span>тренинги</span>
			<span>культура безопасности</span>
			<span>обучения</span>
			<span>решения</span>
			<span>квалификация</span>
			<span>мировые практики</span>
			<span>устойчивое развитие</span>
			<span>цифровые решения</span>
		</VueSlickCarousel>
	</header>
</template>

<script>
import MainMenu from '/src/components/MainMenu.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default{
    data() {
        return{
            sliderSettings: {
                autoplay: true,
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 9,
                slidesToScroll: 1,
                speed: 10000,
                autoplaySpeed: 0,
                cssEase: 'linear',
                pauseOnHover: false,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            }
        }
    },
    components: {
        MainMenu,
        VueSlickCarousel
    }
}
</script>

<style lang="scss">
    header{
        background: linear-gradient(4.2deg, #EDF8FF 3.15%, #D7EEFE 87.17%);;
        background-repeat: no-repeat;
        background-position: 80% 100%;
        height: 700px;
        position: relative;
        &.home_page{
            &::before{
                content: "";
                background: url('/img/_src/header-image.png');
                background-size: cover;
                position: absolute;
                bottom: 0;
                right: 15%;
                width: 509px;
                height: 590px;
            }
        }
        .title_wrapper{
            margin-top: 190px;
            h1{
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 44px;
                color: #213955;
                margin-bottom: 9px;
            }
            p{
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 26px;
                color: #556982;
                margin-bottom: 25px;
            }
            .flex_wrapper{
                .accent_btn,
                .silver_btn{
                    font-weight: 500;
                    width: 260px;
                    height: 54px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                }
                .accent_btn{
                    margin-right: 22px;
                }
            }
        }
        .header_bottom_menu{
            margin-top: 175px;
            position: relative;
            span{
                font-weight: normal;
                font-size: 14px;
                line-height: 54px;
                text-align: center;
                text-decoration: none;
                color: #728D9F;
                width: 202px;
                min-width: 202px;
                max-width: 202px;
                margin: 0 10px;
                height: 34px;
                background: #F8FCFF;
                border-radius: 100px;
                display: flex!important;
                align-items: center;
                justify-content: center;
                outline: none;
                font-weight: 500;
            }
        }
    }
    nav{
        margin-top: 28px;
        font-family: Inter, sans-serif;
    }
</style>
