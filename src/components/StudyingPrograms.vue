<template>
    <section id="studying_programs">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Программы обучения</h2>
				</div>
			</div>
	
			<div class="row">
				<div class="col-12">
					<ul class="nav nav-tabs" id="sliderTab" role="tablist">
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link active" id="Popular" data-toggle="tab" href="#Popular" role="tab" aria-controls="popular" aria-selected="true">популярные</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link" id="Security" data-toggle="tab" href="#Security" role="tab" aria-controls="security" aria-selected="false">охрана труда</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link" id="Development" data-toggle="tab" href="#Development" role="tab" aria-controls="development" aria-selected="false">устойчивое развитие</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link" id="FirstAid" data-toggle="tab" href="#FirstAid" role="tab" aria-controls="first_aid" aria-selected="false">первая помощь</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link" id="LegalFramework" data-toggle="tab" href="#LegalFramework" role="tab" aria-controls="legal_framework" aria-selected="false">основы правовых норм</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="changeTab($event)" class="nav-link" id="PersonalEffectiveness" data-toggle="tab" href="#PersonalEffectiveness" role="tab" aria-controls="personal_effectiveness" aria-selected="false">личная эффективность</a>
                        </li>
					</ul>

					<select name="" id="tab_select">
						<option value="Popular">Популярные</option>
						<option value="Security">Охрана труда</option>
						<option value="Development">Устойчивое развитие</option>
						<option value="FirstAid">Первая помощь</option>
						<option value="LegalFramework">Основы правовых норм</option>
						<option value="PersonalEffectiveness">Личная эффективность</option>
					</select>

                    <div class="tab-content" id="myTabContent">
                        <div class="row">
                            <div class="col-md-12 slider_col">
                                <keep-alive>
                                    <component v-bind:is="SliderType"></component>
                                </keep-alive>
                            </div>
						</div>
                    </div>

				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="more_item flex_wrapper align_center">
						<a href="#">Посмотреть весь список</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

import Popular from '../components/sliders/Popular.vue'
import Security from '../components/sliders/Security.vue'
import Development from '../components/sliders/Development.vue'
import FirstAid from '../components/sliders/FirstAid.vue'
import LegalFramework from '../components/sliders/LegalFramework.vue'
import PersonalEffectiveness from '../components/sliders/PersonalEffectiveness.vue'


export default{
    data() {
        return{
            SliderType: "Popular"
        }
    },
    methods: {
        changeTab(e){
            let sliderTabs = document.querySelectorAll("#sliderTab .nav-item a")
            if(e.target.classList.contains("nav-link")){
                let setTab = e.target.getAttribute("id")
                if (setTab !== null) {
                    this.SliderType = setTab
                    for (let i = 0; i < sliderTabs.length; i++){
                        sliderTabs[i].classList.remove("active");
                        e.target.classList.add("active");
                    }
                }
            }
        }
    },
    components: {
        Popular,
        Security,
        Development,
        FirstAid,
        LegalFramework,
        PersonalEffectiveness
    }
}
</script>

<style lang="scss">
#studying_programs{
	margin-top: 100px;
	h2{
		margin-bottom: 22px;
		border-top: 1px dashed #D2E3EE;
		padding-top: 48px;
	}

    .slider_col{
        padding: 0;
    }
    .slick-prev, .slick-next{
        top: -137px;
        width: 52px;
    }
    .slick-dots{
        position: static;
        margin-top: 20px;
    }
    .slick-next{
        right: 15px;
    }
    .slick-prev {
        left: auto;
        right: 95px;
    }
	.more_item{
		display: flex;
		justify-content: center;
		a{
			font-size: 14px;
			margin-top: 20px;
			color: #18438b;
			text-decoration: none;
			border-bottom: 1px solid #18438b;
			transition: all .4s;
			&:hover{
				color: #346CCA;
				border-bottom: 1px solid #346CCA;
			}
		}
	}
	
	.nav-tabs{
		border-bottom: none;
		align-items: center;
		justify-content: space-between;
	}
	#tab_select{
		display: none;
		width: 100%;
		height: 44px;
		border: 1px solid #D7DFE9;
		box-sizing: border-box;
		border-radius: 2px;
		padding: 0 16px;
		color: #213955;
		appearance:none;
		background: url("/img/_src/chevron.svg");
		background-repeat: no-repeat;
		background-position: 95% 50%;
	}
	.nav-item{
		padding: 0;
		a{
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			text-align: center;
			color: #728D9F;
			padding: 0;
			border: none;
			height: 34px;
			min-width: 182px;
			border: 1px solid #D1D1D1;
			box-sizing: border-box;
			border-radius: 100px;
			display: block;
			line-height: 31px;
			font-weight: 500;
			&:hover{
				background: #EDF7FE;
			}
			&.active{
				background: #18438B;
				color: #fff;
				border: 1px solid #18438B;
			}
		}
	}
	.tab-content{
		padding-top: 44px;
	}
	.slider{
		.sliderArrow {
			&.slick-disabled{
				svg, path{
					fill: #BDBDBD;
				}
			}
			&:not(.slick-disabled){
				&:hover{
					path{
						fill: #18438B;
					}
				}
			}
			
		}
		.slide{
			outline: none;
			margin: 0 15px;
			max-width: 350px;
			display: block;
			> a{
				text-decoration: none;
				&:hover{
					.text_wrapper{
						background: #EAF6FF;
						span.link{
							border-bottom: 1px solid #18438B;
						}
					}
					
				}
			}
			img{
				max-width: 100%;
				width: 100%;
			}
			.text_wrapper{
				background: #F8F8F8;
				padding: 22px 27px;
				margin-top: 4px;
				p.title{
					font-weight: 500;
					font-size: 16px;
					line-height: 26px;
					color: #262626;
					min-height: 83px;
				}
				span.link{
					font-weight: normal;
					font-size: 14px;
					line-height: 30px;
					color: #18438B;
					border-bottom: 1px solid transparent;
				}
				svg{
					margin-left: 10px;
				}
			}
		}
	}
}
</style>