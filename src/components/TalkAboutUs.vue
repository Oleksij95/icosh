<template>
    <section id="talk_about_us" class="">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>О нас говорят</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="slider_talk slider">
						<VideoReviews></VideoReviews>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import VideoReviews from '../components/sliders/VideoReviews.vue'
export default {
    components: {
        VideoReviews
    }
}
</script>

<style lang="scss">
#talk_about_us{
	margin-top: 95px;
	h2{
		margin-bottom: 35px;
		border-top: 1px dashed #D2E3EE;
		padding-top: 58px;
	}
    .slick-list{
        margin-left: -15px;
        margin-right: -15px;
    }

    .slick-prev, .slick-next{
        top: -74px;
        width: 52px;
    }

    .slick-next {
        right: 0;
    }

    .slick-prev {
        left: auto;
        right: 90px;
    }
	
	* {
		outline: none!important;
	}

}
</style>