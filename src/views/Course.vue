<template>
    <div class="one_cource_page">
        <MainMenu></MainMenu>

        <header class="one_cource_page" :style="{ backgroundImage: `url('${this.$store.getters.course.course_bg}')` }">
            <div class="extra_menu">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ExtraMenus :extra_menu=this.$store.getters.course.extra_menu v-if="this.$store.getters.course.extra_menu && this.$store.getters.course.extra_menu.length > 0"></ExtraMenus>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    

        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 one_cource_page_body">
                    <BreadCrumbs></BreadCrumbs>
                    <div class="row">
                        <div class="col-md-12">
                            <h1>{{ this.$store.getters.course.course_name }}</h1>
                            <div class="levels_select_wrapper">
                                <div class="top_part">
                                    <p>Выберите уровень обучения:</p>
                                    <p class="hint_text" v-b-modal.professional_training_levels_modal>Как определить уровень?</p>
                                </div>
                                <div class="tab_list">
                                    <div
										class="tab"
										:class="{active: selectedCourseFormat === 'elementary'}"
										@click="changeCourseLevel('elementary')"
										>
										Начальный
									</div>
                                    <div
										class="tab"
										:class="{active: selectedCourseFormat === 'base'}"
										@click="changeCourseLevel('base')"
										>
										Основной
									</div>
                                    <div
										class="tab"
										:class="{active: selectedCourseFormat === 'advanced'}"
										@click="changeCourseLevel('advanced')"
										>
										Продвинутый
									</div>
                                    <div
										class="tab"
										:class="{active: selectedCourseFormat === 'expert'}"
										@click="changeCourseLevel('expert')"
									>
										Экспертный
									</div>
                                </div>

                                <p class="hint_text hint_text_mobile" v-b-modal.professional_training_levels_modal>Как определить уровень?</p>

                                <div class="mob_icon_scroll"></div>

                            </div>

                            <div class="no_level_cource" v-if="courseFormatNotAvailable">
                                <img src="/img/_src/smile.png" alt="Упс">
                                <p class="title">Упс</p>
                                <p>Мы как раз находимся в разработке этого уровня обучения…</p>
                                <a class="accent_btn btn" v-b-modal.leave_request>Оставить заявку</a>
                            </div>

                        </div>
                    </div>

                    <div class="row" v-if="!courseFormatNotAvailable">
                        <div class="col-lg-7" v-html="this.$store.getters.course.pre_text"></div>
                        <div class="col-lg-5">
                            <CourseCalculator 
								:price=default_course_price 
								:selectedCourseFormat=selectedCourseFormat
								@addBasketItem='addBasketItem'
							>
							</CourseCalculator>
                        </div>
                    </div>

                    <div class="row" v-if="!courseFormatNotAvailable">
                        <div class="col-md-12">

                            <div id="course_for" class="divider_block extra_menu_item">
                                <h3>Курс предназначен для:</h3>
								<div v-html="this.$store.getters.course.course_for_content"></div>
                            </div>


                            <div id="additional_benefits" class="divider_block extra_menu_item">
                                <h3>Зачем мне этот курс? Основные выгоды.</h3>
                                <div v-html="this.$store.getters.course.additional_benefits_content"></div>
                            </div>

                            <div id="course_description" class="divider_block extra_menu_item">
                                <h3>Описание курса</h3>
                                <div v-html="this.$store.getters.course.course_description"></div>

                                <div class="cource_cta_banner">
                                    <p>Попробуйте курс ICOSH <span>Работы на высоте</span>
                                        с помощью нашей цифровой платформы</p>
                                    <a class="accent_btn btn" v-b-modal.leave_request>Оставить заявку</a>
                                </div>
                            </div>

                            <div id="assessment_of_knowledge" class="divider_block extra_menu_item">
                                <h3>Оценка полученных знаний</h3>
								<div v-html="this.$store.getters.course.assessment_of_knowledge_content"></div>
                            </div>

                            <div id="what_will_i_learn" class="divider_block extra_menu_item">
                                <h3>Чему я научусь?</h3>
                                <div v-html="this.$store.getters.course.what_will_i_learn_content"></div>
                                <div class="btn_block">
                                    <p>Если у Вас остались --вопросы о том, что это за обучение смотрите:</p>
                                    <div class="btn_wrp">
                                        <a href="#" class="accent_btn btn">Часто задаваемые вопросы</a>
                                        <a href="#" class="white_btn">Больше про курсы ICOSH</a>
                                    </div>
                                </div>
                            </div>

                            <div class="divider_block extra_menu_item">
                                <h3>Дополнительные выгоды</h3>
                                <div class="benefits_slider" v-if="this.$store.getters.course.benefits_content && this.$store.getters.course.benefits_content.length > 0">
									<VueSlickCarousel v-bind="sliderSettings">

										<template #prevArrow="">
											<div class="custom-arrow">
												<div class="sliderArrow prevArrow"><svg width="54" height="18" viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2281 1.8782L10.425 0.0750732L1.5 9.00013L10.425 17.9251L12.2281 16.122L6.38112 10.275H52.5V7.72501H6.38135L12.2281 1.8782Z" fill="#4F4F4F"/></svg></div>
											</div>
										</template>

										<div class="benefit_slide" v-for="(benefits, index) in this.$store.getters.course.benefits_content" :key="index">
											<p>{{ benefits }}</p>
										</div>

										<template #nextArrow="">
											<div class="custom-arrow">
												<div class="sliderArrow nextArrow"><svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7719 16.122L42.575 17.9251L51.5 9.00007L42.575 0.0750732L40.7719 1.8782L46.6189 7.7252L0.5 7.7252L0.5 10.2752L46.6186 10.2752L40.7719 16.122Z" fill="#4F4F4F"/></svg></div>
											</div>
										</template>

									</VueSlickCarousel>
                                </div>
                            </div>

                            <div id="training_options" class="divider_block extra_menu_item">
                                <h3>Доступные варианты обучения для этого курса</h3>

								<b-card no-body class="faq-content--item" v-for="(variable, index) in this.$store.getters.course.training_options_content" :key="index">
									<b-card-header header-tag="div" class="no_style_header" role="tab">
										<b-button block v-b-toggle="'accordion-' + index" variant="none" tag="p" class="accordion_title">{{ variable.option_name }}</b-button>
									</b-card-header>
									<b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
										<b-card-body>
											<b-card-text class="" v-html="variable.option_text">
											
											</b-card-text>
										</b-card-body>
									</b-collapse>
								</b-card>


                                <div id="teachers" class="teachers extra_menu_item">
                                    <h3>Кто преподаёт курс. Наши эксперты и тренеры</h3>

                                    <div class="teachers_wrapper" v-for="(teacher, index) in this.$store.getters.course.teachers_content" :key="index">
                                        <div class="teacher">
                                            <div class="tex_info_wrapper">
                                                <p class="name">{{ teacher.teacher_name }}</p>
                                                <p class="desk">{{ teacher.teacher_text }}</p>
                                            </div>
                                            <div class="photo_wrapper">
                                                <img :src="'/img/_src/' + teacher.teachet_photo" :alt="teacher.teacher_name">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <FooterMain></FooterMain>

		<Levels></Levels>
    </div>
</template>

<script>

import MainMenu from '../components/MainMenu'
import BreadCrumbs from '../components/BreadCrumbs.vue'
import FooterMain from '../components/footers/FooterMain.vue'
import Levels from '../components/Modals/Levels.vue'
import CourseCalculator from '../components/CourseCalculator.vue'
import ExtraMenus from '../components/ExtraMenu.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



export default{
	data() {
		return{
			course_id: null,
			course_name: "",
			course_level: [],
			course_format: [],
			course_prices: [],
			formats_to_level: null,
			default_course_price: 0,
			pre_img: "",
			sliderSettings: {
				dots: true,
				arrows: true,
				slidesToScroll: 1,
				slidesToShow: 3,
				infinite: true,
				centerMode: true,
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
            },
			selectedCourseFormat: "",
			courseFormatNotAvailable: false
		}
	},
	async created() {
		await fetch('/courses.json', {
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {
			return response.json();
		}).then((data) => {
			let course_property = {}
			for(let key in data){
				course_property[key] = data[key]
			}
			this.$store.dispatch("setCourse", course_property);
			this.$store.dispatch('setSelectedFormat', this.$store.getters.course.formats_to_level[Object.keys(this.$store.getters.course.formats_to_level)[0]][0])
		})
	},
	methods: {
		changeCourseLevel(format = 'elementary'){
			this.selectedCourseFormat = format
			let course_level_price = this.$store.getters.course.course_price.find(course_price => course_price.level_course === format)
			if (course_level_price) {
				this.default_course_price = course_level_price.price
			}
			if (this.$store.getters.course.course_level.indexOf(format) === -1) {
				this.courseFormatNotAvailable = true
			} else {
				this.courseFormatNotAvailable = false
			}

			if (this.$store.getters.course.formats_to_level[format][0]) {
				this.$store.dispatch('setSelectedFormat', this.$store.getters.course.formats_to_level[format][0])
			} else {
				this.$store.dispatch('setSelectedFormat', this.$store.getters.course.formats_to_level[Object.keys(this.$store.getters.course.formats_to_level)[0]][0])
			}

			// console.log("course: ", 	this.selectedCourseFormat)
		},
		addBasketItem(data) {
			let basketItem = {
				course_id: this.$store.getters.course.course_id,
				course_name: this.$store.getters.course.course_name,
				course_price: data.price,
				course_default_prices: this.$store.getters.course.course_price,
				course_levels: this.$store.getters.course.course_levels,
				course_level: this.selectedCourseFormat,
				course_format: this.course_format,
				selected_format: data.selected_format,
				course_count: data.courseCount,
				course_pre_img: this.$store.getters.course.pre_img,
				formats_to_level: this.$store.getters.course.formats_to_level
			}
			this.$store.dispatch('setBasketItem', basketItem);
		}
	},
	computed: {
		selectedCourseLevel: function(){
			return this.$store.getters.course.course_level;
		},

		defaultCoursePrice: function() {
			return this.$store.getters.course.course_price;
		},
		
		defaultCourseFormat: function() {
			return this.$store.getters.course.selectedFormat;
		}
	},
	watch: {
		selectedCourseLevel() {
			this.selectedCourseFormat = this.selectedCourseLevel[0]
		},

		defaultCoursePrice() {
			this.default_course_price = this.defaultCoursePrice[0].price
		}
	},
    components: {
        MainMenu,
        BreadCrumbs,
        FooterMain,
		Levels,
		CourseCalculator,
		VueSlickCarousel,
		ExtraMenus
    }
}
</script>

<style lang='scss'>
.card{
	border: none;
	outline: none;
	border: none;
	border-bottom: 1px solid #d2e3ee;
	.card-body{
		padding-left: 0;
	}
}
.no_style_header{
	background: none;
	border: none;
	padding: 0;
	outline: none;
	min-height: 68px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;

	box-shadow: none;
	p{
		min-height: 68px;
		position: relative;
		width: 100%;
		text-align: left;
		margin-bottom: 0;
		font-weight: 500;
		font-size: 18px;
		line-height: 20px;
		padding-left: 0;
		color: #213955;
		outline: none;
		box-shadow: none!important;
		padding: 0;
		display: flex;
		align-items: center;
		&.not-collapsed{
			&::after{
				display: none;
			}
		}
		&::before{
			content: "";
			width: 20px;
			height: 2px;
			position: absolute;
			background: #18438b;
			right: 30px;
		}
		&::after{
			content: "";
			height: 20px;
			width: 2px;
			position: absolute;
			background: #18438b;
			right: 39px;
		}
	}
}

.one_cource_page .menu_wrapper{
    background: #fff;
}

.one_cource_page .menu_wrapper nav {
    margin: 16px 0;
}

.extra_menu{
	position: fixed;
	width: 100%;
	background: #F8F8F8;
	border-bottom: 1px solid #E4E3E3;
	border-top: 1px solid #E4E3E3;
	transition: top .6s;
	padding: 11px 0;
	top: 0;
	z-index: -1;
	&.active_extra_menu{
		top: 79px;
		z-index: 2;
	}
	.wrapper{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		a{
			font-style: normal;
			font-weight: normal;
			font-size: 11px;
			line-height: 13px;
			text-align: center;
			text-decoration: none;
			color: #213955;
			opacity: 0.6;
			transition: all .25s;
			&:hover{
				opacity: 1;
			}
			&.active_menu{
				opacity: 1;
			}
		}
	}
}


.one_cource_page {
    min-height: 650px;
    background: 0 0;
    background-repeat: no-repeat;
    background-position: 0 -80px;
    background-size: cover;
    height: auto;
	.menu_wrapper{
		&.fixed{
			background: #d7eeff;
		}
	}
}

.one_cource_page_body{
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(167, 167, 167, 0.2);
	border-radius: 6px;
	padding: 12px 40px 45px 40px;
	margin-top: -200px;
	.slick-prev,
	.slick-next{
		top: 0;
		right: 0px;
	}
	
	.slick-prev{
		left: auto;
	}
	
	.bread_crumbs{
		line-height: 54px;
	}
	h1{
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 40px;
		color: #262626;
		margin-top: 7px;
		margin-bottom: 14px;
	}

	.levels_select_wrapper{
		margin-bottom: 38px;
		.top_part{
			display: flex;
			justify-content: space-between;
			p{
				padding-bottom: 8px;
				font-size: 14px;
				padding-bottom: 0;
				margin-bottom: 0;
				color: #262626;
				&.hint_text{
					font-size: 14px;
					text-decoration-line: underline;
					color: #18438B;
					cursor: pointer;
				}
			}
		}

		.hint_text_mobile{
			display: none;
			font-size: 14px;
			text-decoration-line: underline;
			color: #18438B;
		}

		.tab_list{
			margin-top: 8px;
			display: flex;
			justify-content: space-between;
			.tab{
				min-width: 206px;
				height: 50px;
				cursor: pointer;
				font-size: 14px;
				border: 1px solid #D1D1D1;
				box-sizing: border-box;
				border-radius: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #728D9F;
				&.active{
					background: #18438B;
					color: #fff;
					border: 1px solid #18438B;
				}
			}
		}

		.mob_icon_scroll{
			position: absolute;
			width: 36px;
			height: 36px;
			background-image: url(/img/_src/hand-scroll.svg);
			background-repeat: no-repeat;
			display: none;
			right: 0;
			top: -18px;
		}
	}
	
	.no_level_cource{
		background: #F8F8F8;
		border-radius: 6px;
		padding: 30px 50px 50px 50px;
		text-align: center;
		p{
			font-size: 14px;
			line-height: 26px;
			margin-bottom: 0;
			&.title{
				font-weight: 500;
				font-size: 18px;
				line-height: 44px;
				color: #262626;
			}
		}
		.accent_btn{
			width: 260px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			margin: 22px auto 0 auto;
		}
	}

	
	.divider_block{
		padding-top: 46px;
		margin-top: 46px;
		border-top: 1px dashed #D2E3EE;
		h3{
			font-weight: 600;
			font-size: 26px;
			line-height: 40px;
			margin-bottom: 23px;
			color: #262626;
		}
		p.title{
			font-weight: 500;
			font-size: 18px;
			line-height: 28px;
			color: #262626;
		}
		ul{
			list-style: none;
			padding-left: 0;
			li{
				position: relative;
			}
			&.arrow_list{
				li{
					padding-left: 30px;
					margin-bottom: 18px;
					font-size: 16px;
					line-height: 22px;
					color: #565656;
					&::before{
						content: "";
						position: absolute;
						width: 23px;
						height: 23px;
						background-image: url(/img/_src/list-img.svg);
						background-size: cover;
						left: 0;
						top: 0;
					}
				}
			}
			&.circle_list{
				counter-reset: digital_list;
				li{
					padding-left: 45px;
					margin-bottom: 25px;
					font-size: 16px;
					line-height: 22px;
					color: #565656;
					counter-increment: digital_list;
					&:last-child{
						&::after{
							display: none;
						}
					}
					&::before{
						content: counter(digital_list);
						position: absolute;
						width: 36px;
						height: 36px;
						border-radius: 50%;
						background: #DCE3EE;
						border: 1px solid #18438B;
						left: 0;
						top: -8px;
						color: #18438B;
						font-size: 16px;
						line-height: 26px;
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 1;
					}
					&::after{
						content: "";
						width: 1px;
						height: 30px;
						position: absolute;
						top: 19px;
						left: 18px;
						border-right: 1px dashed #18438B;
					}
				}
			}
		}
	}
	.cource_cta_banner{
		background: #E3F3FE;
		border-radius: 6px;
		padding: 25px 40px 33px 40px;
		margin-top: 43px;
		position: relative;
		&::after{
			content: "";
			width: 253px;
			height: 234px;
			background-image: url("/img/_src/cource-cta-banner.svg");
			background-repeat: no-repeat;
			position: absolute;
			top: 0;
			right: 32px;
		}
		p{
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 28px;
			margin-bottom: 0;
			color: #213955;
			max-width: 380px;
			span{
				font-weight: bold;
			}
		}
		.accent_btn{
			width: 260px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			font-size: 16px;
			line-height: 54px;
			margin-top: 12px;
		}
	}
	.btn_block{
		margin-top: 55px;
		p{
			font-size: 16px;
			line-height: 22px;
			color: #565656;
		}
		.btn_wrp{
			display: flex;
			align-items: center;
			a{
				width: 260px;
				height: 54px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-decoration: none;
				&.white_btn{
					background: #FFFFFF;
					border: 1px solid #E4E4E4;
					box-sizing: border-box;
					border-radius: 6px;
					font-size: 16px;
					color: #213955;
					margin-left: 22px;
				}
			}
		}
	}

	.benefits_slider{
		width: calc(100% + 40px);
		.benefit_slide{
			max-width: 245px!important;
			height: 271px;
			background: #F8F8F8;
			border-radius: 6px;
			margin: 0 13px 18px 13px;
			padding: 20px;
			position: relative;
			&::before{
				content: "";
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background: url("/img/_src/blue-check.svg"), #E3F3FE;
				background-repeat: no-repeat;
				background-position: center;
				display: block;
				margin-bottom: 11px;
			}
			p{
				font-weight: normal;
				font-size: 16px;
				line-height: 26px;
				color: #213955;
			}
		}
		.slick-list{
			margin-left: -13px;
			padding-left: 0!important;
			padding-right: 140px!important;
		}
		.sliderArrow{
			position: absolute;
			top: -50px;
			right: 40px;
			cursor: pointer;
			&.prevArrow{
				right: 120px;
			}
		}
		.slick-dots{
			display: flex;
			justify-content: center;
			li{
				width: 40px;
				height: 2px;
				background: #d0d0d0;
				margin: 0;
				&.slick-active{
					background: #262626;
				}
				button{
					display: none;
				}
			}
		}
	}

	.accordion{
		border-bottom: 1px solid #D2E3EE;
		.header{
			min-height: 68px;
			display: flex;
			align-items: center;
			cursor: pointer;
			&::before{
				content: "";
				width: 20px;
				height: 2px;
				position: absolute;
				background: #18438b;
				right: 30px;
			}
			&::after{
				content: "";
				height: 20px;
				width: 2px;
				position: absolute;
				background: #18438b;
				right: 39px;
			}
		}
		.header[aria-expanded="true"]{
			&::after{
				display: none;
			}
		}
		.accordion_title{
			margin-bottom: 0;
			font-weight: 500;
			font-size: 18px;
			line-height: 20px;
			color: #213955;
		}
	}

	.teachers{
		margin-top: 53px;
		h3{
			margin-bottom: 28px;
		}
		.teachers_wrapper{
			display: flex;
			justify-content: space-between;
			.teacher{
				background: #E3F3FE;
				border-radius: 6px;
				padding: 55px 40px 0 40px;
				width: 100%;
				display: flex;
				.tex_info_wrapper{
					padding-right: 55px;
				}
				.photo_wrapper{
					margin-top: -102px;
					background: url("/img/_src/grid-teacher.svg");
					background-repeat: no-repeat;
					background-position: 0 94%;
				}
				p.name{
					font-style: normal;
					font-weight: 600;
					font-size: 20px;
					line-height: 28px;
					color: #213955;
					margin-bottom: 9px;
				}
			}
		}
	}

	
}

</style>
