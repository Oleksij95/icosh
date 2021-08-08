<template>
    <div id="callback_float" v-click-outside="closeFloat">
        <div @click="showFlaotBodyFn(true)" class="callback_float_title_wrapper">
            <VueSlickCarousel class="callback_float_title_block" v-bind="sliderSettings">
                <div class="">
                    <img src="/img/_src/phone.svg" alt="phone" class="">
                </div>
                <div>
                    <img src="/img/_src/email.svg" alt="email" class="">
                </div>
                <div>
                    <img src="/img/_src/telegram.svg" alt="telegram" class="">
                </div>
                <div>
                    <img src="/img/_src/viber.svg" alt="viber" class="">
                </div>
            </VueSlickCarousel>
        </div>
        <div class="close_callback_body"
            @click="showFlaotBodyFn(false)"
            :class="{hidden: !this.$store.getters.showFlaotBody}"
        >
        </div>
		<div class="callback_body"
            :class="{hidden: !this.$store.getters.showFlaotBody}"
        >
			<div class="item">
				<div class="logo_img">
					<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.399902 7.68448L17.8953 0L17.8953 1.11539e-05L6.00283 9.39812L6.6808 12.0318L6.85731 10.3783L17.8953 1.11539e-05L14.5164 16.3878L9.62544 12.8972L6.61907 15.9072L4.98635 9.56539L0.399902 7.68448Z" fill="white"/>
					</svg>
				</div>
				<div class="link_wrp">
					<p class="tilte">Telegram</p>
					<a href="#">@icosh_support</a>
				</div>
			</div>
			<div class="item">
				<div class="logo_img">
					<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8807 1.26057C9.89289 0.673234 6.86279 0.673234 3.87428 1.26057C2.56717 1.5614 0.922733 3.18972 0.601238 4.49946C0.0665143 7.03368 0.0665143 9.60268 0.601238 12.1369C0.922733 13.4466 2.56717 15.075 3.87428 15.3758L3.87527 15.376C3.93349 15.3878 3.97594 15.4399 3.97594 15.5012V19.2137C3.97594 19.3992 4.19511 19.4906 4.31988 19.3562L6.02638 17.5465L7.63075 15.8446C7.65464 15.8193 7.68765 15.8055 7.72185 15.8065C9.44478 15.8558 11.1696 15.712 12.8807 15.3759C14.1878 15.075 15.8329 13.4467 16.1538 12.137C16.6892 9.60275 16.6892 7.03374 16.1538 4.49953C15.8329 3.18972 14.1885 1.5614 12.8807 1.26057ZM12.9263 12.326C12.6649 12.8995 12.2845 13.3767 11.7358 13.6813C11.6299 13.7401 11.5098 13.7717 11.3886 13.8035L11.3885 13.8035C11.3326 13.8183 11.2764 13.833 11.2212 13.8506C11.1564 13.8303 11.0926 13.8121 11.03 13.7943L11.0299 13.7942C10.8982 13.7567 10.7714 13.7206 10.6509 13.6689C8.80798 12.8789 7.11191 11.8596 5.76844 10.2971C5.00444 9.40859 4.40641 8.40547 3.901 7.3439C3.68607 6.89249 3.50144 6.42524 3.31715 5.95881L3.25339 5.79758C3.06557 5.32362 3.34218 4.83396 3.63337 4.47686C3.90661 4.14171 4.25821 3.88522 4.63898 3.69619C4.93618 3.54864 5.22936 3.63371 5.44641 3.89402C5.91565 4.4568 6.34667 5.04837 6.69569 5.70072C6.9103 6.10196 6.85142 6.59243 6.46246 6.8655C6.38649 6.91884 6.31594 6.97962 6.24545 7.04034L6.19371 7.08475C6.11647 7.15044 6.04379 7.21681 5.99084 7.30576C5.89406 7.46846 5.88944 7.66049 5.95176 7.83744C6.43143 9.19957 7.23992 10.2588 8.56669 10.8292L8.62365 10.854C8.8174 10.9384 9.01408 11.0242 9.23682 10.9973C9.50186 10.9653 9.65094 10.7597 9.80091 10.5527C9.88272 10.4399 9.96479 10.3266 10.0661 10.241C10.3467 10.004 10.7052 10.0008 11.0074 10.1985C11.3097 10.3961 11.6027 10.6084 11.894 10.8228L11.9529 10.8662L11.9529 10.8662L11.9529 10.8662L11.9529 10.8662C12.2189 11.0618 12.4827 11.2558 12.7283 11.4793C12.9817 11.71 13.0691 12.0127 12.9263 12.326ZM10.5209 7.88578C10.4774 7.88708 10.4324 7.8894 10.5468 7.88728C10.5666 7.88592 10.5679 7.8853 10.5608 7.88517C10.648 7.87336 10.7343 7.80842 10.7623 7.68366C10.779 7.60937 10.7721 7.52761 10.7655 7.44969L10.7655 7.44967L10.7649 7.44197C10.6695 6.30502 10.0016 5.80574 9.06701 5.73603C8.91749 5.72484 8.78434 5.83521 8.76143 5.97662C8.73628 6.13202 8.82494 6.2662 8.98522 6.30672C9.05439 6.32424 9.12487 6.33088 9.19547 6.33753C9.27554 6.34508 9.35577 6.35264 9.43439 6.3761C9.55084 6.41075 9.66201 6.46464 9.76011 6.53852C9.96786 6.69494 10.0992 6.93151 10.1598 7.18677C10.1862 7.29833 10.1984 7.41387 10.2105 7.52884V7.52885L10.2164 7.58461C10.2362 7.76695 10.3365 7.8791 10.5209 7.88578ZM9.9657 5.28699C9.67893 5.14189 9.36879 5.05171 9.05443 4.99795C8.96889 4.98335 8.8828 4.9723 8.79668 4.96126L8.79656 4.96125C8.7444 4.95456 8.69223 4.94787 8.64018 4.94038C8.4729 4.91637 8.38364 4.8062 8.3915 4.63587C8.39889 4.47624 8.51178 4.36143 8.68012 4.37126C9.23333 4.40373 9.76765 4.52727 10.2595 4.79638C11.2596 5.34367 11.8309 6.20756 11.9977 7.36109C12.0003 7.37954 12.0036 7.39794 12.0068 7.41633C12.0127 7.45 12.0187 7.48365 12.0212 7.51757C12.0278 7.60827 12.0327 7.69906 12.0383 7.804L12.0462 7.94747C12.0452 7.95535 12.0443 7.96592 12.0432 7.97843L12.0432 7.97847C12.0401 8.01537 12.0356 8.06917 12.0225 8.1206C11.9586 8.37068 11.5917 8.40199 11.5072 8.14959C11.4821 8.07469 11.4784 7.98949 11.4782 7.90886C11.4774 7.38128 11.3664 6.85424 11.109 6.39522C10.8443 5.92358 10.4399 5.52697 9.9657 5.28699ZM12.7633 8.50822C12.7758 8.68729 12.8628 8.85435 13.056 8.85196C13.2431 8.84964 13.3412 8.67944 13.3278 8.50038C13.3238 8.44793 13.32 8.39543 13.3161 8.34291C13.2886 7.96898 13.261 7.59382 13.1976 7.2259C12.7754 4.77544 10.8128 3.12667 8.41828 3.04175C8.70703 3.05084 10.5957 3.10455 8.3829 3.04045C8.36922 3.04039 8.35554 3.04016 8.34186 3.03993C8.30886 3.03938 8.27587 3.03882 8.24301 3.04065C8.0721 3.05014 7.92059 3.19782 7.95261 3.3833C7.98865 3.59229 8.19195 3.61347 8.35953 3.63093C8.36935 3.63195 8.37904 3.63296 8.38857 3.634C8.47332 3.64319 8.55836 3.65078 8.6434 3.65837C8.83168 3.67518 9.01998 3.69199 9.20525 3.72616C10.9925 4.05557 12.4244 5.5907 12.674 7.44624C12.7117 7.72639 12.7302 8.0094 12.7488 8.2922C12.7535 8.36424 12.7582 8.43626 12.7633 8.50822Z" fill="white"/>
					</svg>
				</div>
				<div class="link_wrp">
					<p class="tilte">Viber</p>
					<a href="#">+380939232097</a>
				</div>
			</div>
			<div class="item">
				<div class="logo_img">
					<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.3503 7.59507L5.53168 5.9502L0.332031 10.5561C0.521033 10.7373 0.776186 10.8501 1.05759 10.8501H13.643C13.9234 10.8501 14.1775 10.7373 14.3654 10.5561L9.16892 5.9502L7.3503 7.59507Z" fill="white"/>
						<path d="M14.3684 0.294038C14.1794 0.111756 13.9253 0 13.6429 0H1.05744C0.777089 0 0.522986 0.112841 0.333984 0.296208L7.35015 6.51006L14.3684 0.294038Z" fill="white"/>
						<path d="M0 0.952637V9.96691L5.0747 5.51077L0 0.952637Z" fill="white"/>
						<path d="M9.62549 5.5106L14.7002 9.96674V0.949219L9.62549 5.5106Z" fill="white"/>
					</svg>
				</div>
				<div class="link_wrp">
					<p class="tilte">Email</p>
					<a href="#">support@icosh.com</a>
				</div>
			</div>
			<div class="item">
				<div class="logo_img">
					<svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2285 17.1093C11.2285 18.8001 9.5946 18.8001 9.5946 18.8001H2.24226C2.24226 18.8001 0.608398 18.8001 0.608398 17.1093V1.89081C0.608398 0.199951 2.24226 0.199951 2.24226 0.199951H9.5946C9.5946 0.199951 11.2285 0.199951 11.2285 1.89081V17.1093ZM5.1015 17.2519C5.1015 17.7179 5.46748 18.0961 5.91842 18.0961C6.36938 18.0961 6.73536 17.7179 6.73536 17.2519C6.73536 16.786 6.36936 16.4078 5.91842 16.4078C5.46748 16.4078 5.1015 16.7859 5.1015 17.2519ZM3.8761 1.23069C3.8761 1.12602 3.95699 1.04413 4.05665 1.04413H7.77941C7.87907 1.04413 7.96075 1.12771 7.96075 1.23069V1.28051C7.96075 1.38602 7.87987 1.46707 7.78023 1.46707H4.05665C3.9578 1.46707 3.8761 1.38349 3.8761 1.28051V1.23069ZM10.4115 2.31038H1.42532V15.8169H10.4115V2.31038Z" fill="white"/>
					</svg>
				</div>
				<div class="link_wrp">
					<p class="tilte">Телефон</p>
					<a href="#">+380939232097</a>
				</div>
			</div>
		</div>
	</div>
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
                    dots: false,
                    arrows: false,
                    autoplay: true
                },
                showFlaotBody: false
            }
        },

        methods: {
            showFlaotBodyFn(isShow) {
                this.$store.dispatch('showFlaotBody', isShow);
            },
            closeFloat() {
                this.$store.dispatch('showFlaotBody', false);
            }
        },
        components: {
            VueSlickCarousel
        }
    }
</script>


<style lang="scss">
#callback_float{
	.slick-slide {
		text-align: center;
		outline: none;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 54px!important;
		height: 54px;
        min-height: 54px;
        min-width: 54px;
        padding-top: 5px;
        text-align: center;
	}

	.callback_float_title_block{
		width: 54px;
		height: 54px;
		background: #18438B;
		background-repeat: no-repeat;
		background-position: center;
		box-shadow: 0px 4px 10px rgba(24, 67, 139, 0.25);
		border-radius: 50%;
		position: fixed;
		right: 20px;
		bottom: 15px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		&.active{
			background: url("/img/_src/float-btn-close.svg"), #18438B;
			background-repeat: no-repeat;
			background-position: center;
			.slick-track{
				opacity: 0!important;
			}
			&:hover{
				background: url("/img/_src/float-btn-close.svg"), #2458AF;
				box-shadow: 0px 4px 10px rgba(24, 67, 139, 0.25);
				background-repeat: no-repeat;
				background-position: center;
			}
		}
		&:hover{
			background: #2458AF;
			box-shadow: 0px 4px 10px rgba(24, 67, 139, 0.25);
		}
	}
	.callback_body{
		position: fixed;
		right: 10px;
		bottom: 95px;
		background: #fff;
		box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);
		border-radius: 20px;
		min-width: 283px;
		padding: 28px 30px;
		z-index: 10;
		&::before{
			content: "";
			position: absolute;
			bottom: -18px;
            right: 31px;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: #FFFFFF;
			box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);
		}
		.item{
			margin-bottom: 20px;
			display: flex;
			align-items: center;
			&:last-child{
				margin-bottom: 0;
			}
		}
		p.tilte{
			font-weight: normal;
			font-size: 10px;
			line-height: 12px;
			color: #9E9E9E;
			margin-bottom: -5px;
		}
		a{
			font-weight: normal;
			font-size: 14px;
			line-height: 17px;
			color: #333640;
			border-bottom: 1px solid transparent;
			text-decoration: none;
			&:hover{
				color: #18438B;
				border-bottom: 1px solid #18438B;
			}
		}
		.logo_img{
			width: 30px;
			height: 30px;
			background: #18438B;
			border-radius: 50%;
			margin-right: 10px;
			margin-top: -5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
    .close_callback_body{
        background: url(/img/_src/float-btn-close.svg),#18438b;
        background-repeat: no-repeat;
        background-position: center;
        width: 54px;
        height: 54px;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0 4px 10px rgba(24, 67, 139, .25);
        border-radius: 50%;
        position: fixed;
        right: 20px;
        bottom: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }
}
</style>