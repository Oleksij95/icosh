<template>
    <div>
        <MainMenu></MainMenu>

        <div class="inside_page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top_part">
                            <h1>Цены</h1>
                            <BreadCrumbs></BreadCrumbs>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>Качественное и увлекательное обучение по всем видам наших программам не стоит больших денег / затрат. Все наши пакеты включают одинаковые замечательные функции, прямой доступ к вашему личному менеджеру по работе с клиентами и непревзойденную поддержку клиентов.</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="user_count_tabs tab_head">
                        <div
							class="tab"
							:class="{active_tab: user_count_format === 'one_user'}"
							data-user_count="one"
							@click="changeCountFormat('one_user')"
						>
							Для одного пользователя
						</div>
                        <div
							class="tab"
							:class="{active_tab: user_count_format === 'many_user'}"
							data-user_count="many"
							@click="changeCountFormat('many_user')"
						>
							Для нескольких пользователей
						</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="one_user_count_wrapper" v-if='user_count_format === "one_user"'>
            <div class="course_format_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="pre_title">Выберите формат обучения:</p>
                            <div class="tab_head">
								<div 
									class="tab"
									:class="{active_tab: format.id === formatID}"
									v-for="format  in trainingFormats"
									:key="format.id"
									@click="ChangeformatTraining(format.id)"
								>
								{{ format.name }}
								</div>
                            </div>
                            <div class="mob_icon_scroll"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search_course">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="search_course_wrapper">
                            <label for="search_course_input">
                                    <span class="search_icon">
                                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.15" d="M15.1579 8.05262C15.1579 11.9767 11.9768 15.1579 8.05265 15.1579C4.12852 15.1579 0.947388 11.9767 0.947388 8.05262C0.947388 4.12849 4.12852 0.947357 8.05265 0.947357C11.9768 0.947357 15.1579 4.12849 15.1579 8.05262Z" fill="#18438B"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05264 1.56101C4.46741 1.56101 1.56101 4.46741 1.56101 8.05264C1.56101 11.6379 4.46741 14.5443 8.05264 14.5443C11.6379 14.5443 14.5443 11.6379 14.5443 8.05264C14.5443 4.46741 11.6379 1.56101 8.05264 1.56101ZM0.33374 8.05264C0.33374 3.78961 3.78961 0.33374 8.05264 0.33374C12.3157 0.33374 15.7715 3.78961 15.7715 8.05264C15.7715 9.96326 15.0774 11.7118 13.9275 13.0597L17.4865 16.6187C17.7262 16.8584 17.7262 17.2469 17.4865 17.4865C17.2469 17.7262 16.8584 17.7262 16.6187 17.4865L13.0597 13.9275C11.7118 15.0774 9.96326 15.7715 8.05264 15.7715C3.78961 15.7715 0.33374 12.3157 0.33374 8.05264Z" fill="#18438B"></path>
                                        </svg>
                                    </span>
                                    <input
										type="text"
										placeholder="Введите поисковое слово"
										id="search_course_input"
										class="search_course_input"
										name="search_course"
										v-model="terms"
									>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
            <div class="all_cources_wrapper">
                <div class="container">

					<div class="row" v-show="no_fount_courses">
                        <div class="col-md-12">
                            <div class="no_course_banner">
                                <img src="/img/_src/smile.png" alt="Упс">
                                <p class="title">Таких программ обучения у нас нет</p>
                                <p>Мы не нашли программы обучения по этому запросу. <br>
                                    Пожалуйста, попробуйте еще или свяжитесь с нами!</p>
                                <a href="#" class="accent_btn btn" data-toggle="modal" data-target="#leave_request">Оставить заявку</a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div id="accordion">
								<div v-for="(catogory, index) in formatList" :key="index" >
									<b-card no-body class="faq-content--item"  v-if="catogory.courses_in_category.length > 0">
										<b-card-header header-tag="div" class="header" role="tab">
											<b-button block v-b-toggle="'accordion-' + index" variant="none" tag="h3">{{ catogory.category_name }}</b-button>
										</b-card-header>
										<b-collapse :id="'accordion-'+index"  accordion="my-accordion" role="tabpanel">
											<b-card-body>
												<ul class="course_item_wrapper">
													<li class="item" v-for="course in catogory.courses_in_category" :key="course.course_id">
														<p class="name">{{ course.name }}</p>
														<p class="price">{{ course.price }}</p>
														<a href="#" class="add_to_card">Добавить в корзину</a>
													</li>
												</ul>
											</b-card-body>
										</b-collapse>
									</b-card>
								</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
        <div class="many_user_count_wrapper" v-if='user_count_format === "many_user"'>
            <div class="course_format_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p>Мы предпочитаем комплексный подход в обучении, который бы точно соответствовал вашим потребностям, но вы можете начать работу с одним из наших готовых пакетных решений, представленных ниже, и добавить дополнительные курсы и занятия позже.</p>
                        </div>
                    </div>

                    <div class="row slider_many_user">
                        <div class="col-md-4">
                            <div class="course_item">
                                <div class="course_item_head">
                                    <div class="course_num">1 курс</div>
                                    <div class="course_certificate">5 сертификатов </div>
                                    <div class="price">£99 / год</div>
                                </div>
                                <div class="course_item_body">
                                    <div class="select_wrp">
                                        <div class="label">
                                            Выберите уровень
                                            <div class="tooltip_wrapper info_icon">
                                                <img src="/img/_src/info-icon.svg" alt="info">
                                                <span class="tooltiptext_custom">Курс этого уровня обучения доступен только в таком формате.</span>
                                            </div>
                                        </div>
                                        <p class="input">Начальный</p>
                                    </div>
                                    <ul class="course_item_text">
                                        <li>Доступ к 1 курсу и пакету из 5 сертификатов. </li>
                                        <li>Личный менеджер по работе с клиентами</li>
                                        <li>Бесплатный доступ к нашей системе управления обучением</li>
                                        <li>LMS - идеально подходит для малого бизнеса и стартапов.</li>
                                    </ul>
                                    <a href="#" class="add_to_card">Добавить в корзину</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="course_item">
                                <div class="course_item_head">
                                    <div class="course_num">5 курсов</div>
                                    <div class="course_certificate">100 сертификатов  </div>
                                    <div class="price">£999 / год</div>
                                    <div class="popular">ПОПУЛЯРНЫЙ</div>
                                </div>
                                <div class="course_item_body">
                                    <div class="select_wrp">
                                        <div class="label active_level">
                                            Выберите уровень
                                        </div>

										<Select2 v-model="user_count_format_select_options_default" :options="user_count_format_select_options" :settings="{ placeholder: 'онлайн дистанционное ' }" />

                                    </div>
                                    <ul class="course_item_text">
                                        <li>Доступ к 5 курсам и пакету из 100 сертификатов. </li>
                                        <li>Личный менеджер по работе с клиентами</li>
                                        <li>Бесплатный доступ к нашей системе управления обучением</li>
                                        <li>LMS - идеально подходит для малого бизнеса и стартапов.</li>
                                    </ul>
                                    <a href="#" class="add_to_card">Добавить в корзину</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="course_item">
                                <div class="course_item_head">
                                    <div class="course_num">10 курсов</div>
                                    <div class="course_certificate">500 сертификатов</div>
                                    <div class="price">£2 999 / год</div>
                                </div>
                                <div class="course_item_body">
                                    <div class="select_wrp">
                                        <div class="label">
                                            Выберите уровень
                                            <div class="tooltip_wrapper info_icon">
                                                <img src="/img/_src/info-icon.svg" alt="info">
                                                <span class="tooltiptext_custom">Курс этого уровня обучения доступен только в таком формате.</span>
                                            </div>
                                        </div>
                                        <p class="input">Начальный</p>
                                    </div>
                                    <ul class="course_item_text">
                                        <li>Доступ к 10 курсам и пакету из 500 сертификатов.</li>
                                        <li>Личный менеджер по работе с клиентами</li>
                                        <li>Бесплатный доступ к нашей системе управления обучением</li>
                                        <li>LMS - идеально подходит для малого бизнеса и стартапов.</li>
                                    </ul>
                                    <a href="#" class="add_to_card">Добавить в корзину</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <FreeConsultation></FreeConsultation>


        <FooterMain></FooterMain>

    </div>
</template>

<script>
/* eslint-disable */
import MainMenu from '../components/MainMenu'
import BreadCrumbs from '../components/BreadCrumbs.vue'
import FooterMain from '../components/footers/FooterMain.vue'
import FreeConsultation from '../components/FreeConsultation.vue'
import Select2 from 'v-select2-component';


export default{
    data(){
        return{
            one_courses_list:[
                {
                    category_name: "Здоровье и безопасность труда / Охрана труда",
                    courses_in_category:[
                        {
                            course_id: 1,
                            name: "Построение эффективной СУОТ (Ситстемы управления Здоровьем и Безопасностью труда)",
                            price: "12 400 грн.",
							format: ['online_live', 'in_training_center']
                        },
                        {
                            course_id: 2,
                            name: "Развитие культуры Здоровья и Безопасности",
                            price: "9 200 грн.",
							format: ['online_remote', 'online_live', 'online_mixed', 'in_training_center']
							
                        },
                        {
                            course_id: 3,
                            name: "Развитие персонала и его квалификация",
                            price: "10 000 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 4,
                            name: "Организация обучения персонала",
                            price: "22 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 5,
                            name: "Видимые личные обязательства",
                            price: "1 400 грн.",
							format: ['online_remote']
                        },
                        {
                            course_id: 6,
                            name: "Эффективные коммуникации",
                            price: "2 000 грн.",
							format: ['online_remote', 'online_live']
                        },
                        {
                            course_id: 7,
                            name: "Сообщения о травмах, заболеваниях и опасных происшествиях",
                            price: "999 грн.",
							format: ['in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 8,
                            name: "Расследование несчастных случаев",
                            price: "8 600 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 9,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 10,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_remote', 'online_live']
                        },
                        {
                            course_id: 11,
                            name: "Спотыкания, поскальзывания и падения",
                            price: "12 400 грн.",
							format: ['online_live']
                        },
                        {
                            course_id: 12,
                            name: "Работа в одиночку",
                            price: "7 500 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 13,
                            name: "Контроль за веществами, опасными для здоровья",
                            price: "5 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'online_mixed']
                        },
                        {
                            course_id: 14,
                            name: "Оборудование рабочих станций, экраны и дисплеи",
                            price: "11 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 15,
                            name: "Работы в замкнутых пространствах",
                            price: "7 400 грн.",
							format: ['online_remote', 'online_live', 'online_mixed']
                        },
                    ]
                },
                {
                    category_name: "Пожарная безопасность",
                    courses_in_category:[
                        
                        {
                            course_id: 16,
                            name: "Эффективные коммуникации",
                            price: "2 000 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 17,
                            name: "Сообщения о травмах, заболеваниях и опасных происшествиях",
                            price: "999 грн.",
							format: ['online_remote']
                        },
                        {
                            course_id: 18,
                            name: "Расследование несчастных случаев",
                            price: "8 600 грн.",
							format: ['online_remote', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 19,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'online_mixed']
                        },
                        {
                            course_id: 20,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
                {
                    category_name: "Первая доврачебная помощь",
                    courses_in_category:[
                        {
                            course_id: 21,
                            name: "Эффективные коммуникации",
                            price: "2 000 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 22,
                            name: "Сообщения о травмах, заболеваниях и опасных происшествиях",
                            price: "999 грн.",
							format: ['online_remote', 'online_live', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
                {
                    category_name: "Основы правовых и этических норм",
                    courses_in_category:[
                        {
                            course_id: 23,
                            name: "Расследование несчастных случаев",
                            price: "8 600 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        },
                        {
                            course_id: 24,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises']
                        },
                        {
                            course_id: 25,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
                {
                    category_name: "Устойчивое развитие и социальная ответственность бизнеса",
                    courses_in_category:[
                        {
                            course_id: 27,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_mixed']
                        },
                        {
                            course_id: 28,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
                {
                    category_name: "Навыки личной эффективности",
                    courses_in_category:[
                        {
                            course_id: 29,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'online_mixed']
                        },
                    ]
                },
                {
                    category_name: "Детская безопасность",
                    courses_in_category:[
                        {
                            course_id: 30,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center']
                        }
                    ]
                },
                {
                    category_name: "NEBOSH",
                    courses_in_category:[
                        {
                            course_id: 31,
                            name: "Эффективные коммуникации",
                            price: "2 000 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 32,
                            name: "Сообщения о травмах, заболеваниях и опасных происшествиях",
                            price: "999 грн.",
							format: ['online_remote', 'online_live', 'in_enterprises', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
                {
                    category_name: "IOSH",
                    courses_in_category:[
                        {
                            course_id: 33,
                            name: "Эффективные коммуникации",
                            price: "2 000 грн.",
							format: ['online_remote']
                        },
                        {
                            course_id: 34,
                            name: "Сообщения о травмах, заболеваниях и опасных происшествиях",
                            price: "999 грн.",
							format: ['online_live']
                        },
                        {
                            course_id: 35,
                            name: "Расследование несчастных случаев",
                            price: "8 600 грн.",
							format: ['online_remote', 'online_live', 'in_training_center', 'online_mixed']
                        },
                        {
                            course_id: 36,
                            name: "Работы на высоте",
                            price: "2 400 грн.",
							format: ['online_remote', 'online_live']
                        },
                        {
                            course_id: 37,
                            name: "Безопасность лестниц",
                            price: "5 100 грн.",
							format: ['online_remote', 'online_live', 'in_training_center', 'online_mixed']
                        }
                    ]
                },
            ],
			trainingFormats: this.$store.getters.trainingFormats,
			formatID: "online_remote",
			formatList: [],
			terms: "",
			no_fount_courses: false,
			user_count_format: "one_user",
			user_count_format_select_options: ['онлайн дистанционное ', 'онлайн живое ', 'онлайн смешанное', 'обучение на предприятии' , 'обучение в тренинг центрах'],
			user_count_format_select_options_default: 'онлайн дистанционное'
        }
    },

	watch: {
		terms(){
			let all_course = document.querySelectorAll(".all_cources_wrapper .course_item_wrapper .item .name")
		
			if (this.terms === "" || this.terms.trim() === "" || this.terms.trim().length === 0) {
				this.clearResultTerms();
			} else {
				for(let course of all_course){
					if (!course.innerText.toLowerCase().includes(this.terms.toLowerCase())) {
						course.closest(".item").classList.add("hidden");
						this.hideEmptyCourceTitle()
					} else {
						course.closest(".item").classList.remove("hidden");
						this.hideEmptyCourceTitle()
						course.innerHTML  = this.highlight(course.innerText.toLowerCase(), [this.terms.toLowerCase(), this.terms.toUpperCase()], 'span')
					}
				}
				let count_no_hide_course = document.querySelectorAll(".all_cources_wrapper #accordion .faq-content--item:not(.hide_title)").length;
				if (count_no_hide_course === 0) {
					this.no_fount_courses = true
				} else {
					this.no_fount_courses = false
				}
			}
		}
	},

	methods: {

		changeCountFormat(formtType = 'one_user') {
			this.user_count_format = formtType
		},

		clearResultTerms(){
			let all_courses_wrapper = document.querySelectorAll(".all_cources_wrapper .faq-content--item");
			let highlights = document.querySelectorAll("body .highlight");
			let all_courses = document.querySelectorAll(".all_cources_wrapper .course_item_wrapper .item")
			for (let highlight of highlights){
				highlight.classList.remove("highlight");
			}
			for (let course_wrapper of all_courses_wrapper){
				course_wrapper.classList.remove("hide_title");
			}
			for (let course of all_courses){
				course.classList.remove("hidden");
			}

			this.no_fount_courses = false
		},

		hideEmptyCourceTitle(){
			let course_items = document.querySelectorAll(".all_cources_wrapper .faq-content--item");
			for (let course of course_items) {
				let visible_el_length = course.querySelectorAll(".item:not(.hidden)").length
				if (visible_el_length === 0) {
					course.classList.add("hide_title");
				} else {
					course.classList.remove("hide_title");
				}
			}
		},

		ChangeformatTraining(formatID = this.formatID){
			this.formatID = formatID
			let courses_in_type = [];
			this.one_courses_list.map((cat) => {
				let category = {
					category_name: cat.category_name,
					courses_in_category: []
				}
				cat.courses_in_category.filter((curs_in_cat)=>{
					if (curs_in_cat.format.indexOf(formatID) !== -1) {
						category.courses_in_category.push(curs_in_cat)
					}
				})
				courses_in_type.push(category)
			})
			this.formatList = courses_in_type
		},

		highlight(text, words, tag) {
			// Default tag if no tag is provided
			tag = tag || 'span';
			let i, len = words.length, re;
			for (i = 0; i < len; i++) {
				// Global regex to highlight all matches
				re = new RegExp(words[i], 'g');
				if (re.test(text)) {
					text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
				}
			}
			return text;
		},

		unhighlight(text, tag) {
			// Default tag if no tag is provided
			tag = tag || 'span';
			let re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
			return text.replace(re, '');
		}

	},
	mounted: function () {
		this.ChangeformatTraining()
	},
    components: {
        MainMenu,
        BreadCrumbs,
        FooterMain,
		Select2,
		FreeConsultation
    }
}
</script>

<style lang="scss">

#free_consultation{
	margin-bottom: 120px;
}

.all_cources_wrapper{
	.faq-content--item{
		border-bottom: 1px solid #D2E3EE;
		padding: 9px 0;
		margin-bottom: 0;
        border: none;
        border-bottom: 1px solid #d2e3ee;
		&.hide_title{
			display: none;
		}
		.header{
			padding-left: 0;
			padding-right: 0;
			background: #fff;
			box-shadow: none;
			border-bottom: none;
           
			&::before{
				right: 0;
			}
			&::after{
				right: 9px;
			}
			h3{
				font-weight: 600;
				font-size: 24px;
				line-height: 54px;
                width: 100%;
                text-align: left;
                outline: none;
                padding: 0;
                box-shadow: none;
                &::after{
                    top: 34%;
                    right: 9px;
                }
                &::before{
                    right: 0;
                }
			}
            h3[aria-expanded=true]{
                &:after{
                    display: none;
                }
            }
			~ .body{
				box-shadow: none;
			}
		}
		.card-body{
			padding-left: 0;
			padding-right: 0;
		}
		.course_item_wrapper{
			list-style: decimal;
			padding: 0;
			counter-reset: course_item;
			li.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 11px 35px;
				margin-bottom: 2px;
				position: relative;
				counter-increment: course_item;
				&::before{
					content: counter(course_item);
					margin-right: -30px;
					font-size: 14px;
				}
				&:nth-child(1n){
					background: #F8F8F8;
				}
				&:nth-child(2n){
					background: #F2F2F2;
				}
				p{
					margin: 0;
					font-size: 14px;
					&.name{
						min-width: 700px;
						&::first-letter{
							text-transform: capitalize;
						}
					}
					&.price{
						font-weight: 600;
					}
				}
				.add_to_card{
					font-size: 14px;
					color: #18438B;
					border-bottom: 1px solid;
					text-decoration: none;
				}
			}
		}	
	}

	.no_course_banner{
		background: #F8F8F8;
		border-radius: 6px;
		padding: 32px 15px 29px 15px;
		text-align: center;
		p{
			margin-bottom: 0;
			font-size: 14px;
			line-height: 26px;
			color: #565656;
			&.title{
				font-weight: 600;
				font-size: 18px;
				line-height: 40px;
				color: #262626;
			}
		}
		.accent_btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 260px;
			height: 54px;
			margin: 20px auto 0 auto;
			text-decoration: none;
		}
	}
}

.highlight {
    background: #e5fffa;
}


.one_cource_page{
	min-height: 650px;
	background: transparent;
	background-repeat: no-repeat;
	background-position: 0px -80px;
	background-size: cover;
	height: auto;
	.menu_wrapper{
		background: #fff;
		&.fixed{
			background: #D7EEFF;
		}
		nav{
			margin: 16px 0;
		}
	}
}

.never_show{
	display: none!important;
}

.one_cource_page_body{
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(167, 167, 167, 0.2);
	border-radius: 6px;
	padding: 12px 40px 45px 40px;
	margin-top: -200px;
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

	.card_wrapper{
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(167, 167, 167, 0.2);
		border-radius: 6px;
		padding: 20px 40px 25px 40px;
		.title{
			font-weight: 600;
			font-size: 18px;
			line-height: 46px;
			text-align: center;
			color: #262626;
			margin-bottom: 20px;
		}
		.field_litem{
			margin-bottom: 22px;
			&.last_item{
				margin-bottom: 12px;
			}
			&.no_select{
				.select2-selection__arrow{
					opacity: 0;
				}
			}
		}
		label{
			font-weight: 300;
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 0.01em;
			color: #7E858E; 
			display: block;
			margin-bottom: 2px;
		}
		select{
			width: 100%;
			border: 1px solid #D7DFE9;
			box-sizing: border-box;
			border-radius: 2px;
			height: 44px;
			padding: 0 16px;
		}
		#price{
			font-weight: 500;
			font-size: 19px;
			line-height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #262626;
			span{
				padding-right: 4px;
			}
		}
		.info_icon{
			cursor: pointer;
			vertical-align: 1px;
			margin-left: 1px;
		}
		.count_imput_wrp{
			background: #FFFFFF;
			border: 1px solid #D7DFE9;
			box-sizing: border-box;
			border-radius: 2px;
			height: 44px;
			display: flex;
			align-items: center;
			padding: 0 16px;
			input{
				border: none;
				width: 200px;
				text-align: center;
			}
			span{
				min-width: 20px;
				display: block;
				cursor: pointer;
				color: #213955;
				display: flex;
				align-items: center;
				height: 100%;
				&.can_minus{
					svg, path{
						fill: #213955;
					}
				}
			}
		}

		
		.add_to_card{
			background: url("/img/_src/cart-white.svg"), #18438B;
			background-repeat: no-repeat;
			background-position: 20px 50%;
			box-shadow: 0px 4px 10px rgba(188, 201, 210, 0.15);
			border-radius: 6px;
			height: 54px;
			font-size: 16px;
			line-height: 54px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			border: none;
			cursor: pointer;
			transition: all .4s;
			&:hover{
				background: url("/img/_src/cart-white.svg"), #1c52ad;
				background-position: 20px 50%;
				background-repeat: no-repeat;
			}
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
			width: 230px;
			height: 271px;
			background: #F8F8F8;
			border-radius: 6px;
			margin: 0 13px 38px 13px;
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
		.slick-list.draggable{
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
				p.desk{

				}
			}
		}
	}

	
}


.add_cource_banner_bottom{
	background: #D7EEFF;
	position: fixed;
	width: 100%;
	z-index: 1;
	transition: all .6s;
	bottom: -55px;
	&.activated{
		bottom: 0;
	}
	.flex_wrapper{
		min-height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 119px;
		.cource_name{
			font-weight: 500;
			font-size: 16px;
			color: #213955;
		}
		.add_to_card{
			font-weight: 500;
			font-size: 14px;
			text-decoration: none;
			color: #18438B;
			display: flex;
			align-items: center;
			svg{
				margin-right: 10px;
			}
		}
	}
}


.user_count_tabs{
	display: flex;
	justify-content: space-between;
	background: #E3F3FE;
	border-radius: 100px;
	margin-bottom: 28px;
	.tab{
		border-radius: 100px;
		min-height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		font-size: 16px;
		line-height: 28px;
		color: #565656;
		cursor: pointer;
		padding: 0 10px;
		&.active_tab{
			background: rgba(24, 67, 139, .8);
			color: #FFFFFF;
			cursor: context-menu;
		}
	}
}

.course_format_wrapper{
	margin-bottom: 48px;
	p{
		margin-top: 22px;
		&.pre_title{
			font-size: 14px;
			line-height: 54px;
			margin-bottom: 0;
			margin-top: 0;
		}
	}
	.tab_head{
		display: flex;
		justify-content: space-between;
		.tab{
			min-width: 220px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #728D9F;
			font-size: 14px;
			border: 1px solid #D1D1D1;
			box-sizing: border-box;
			border-radius: 100px;
			cursor: pointer;
			&.active_tab{
				color: #fff;
				background: #18438B;
				cursor: context-menu;
			}
		}
	}
}



.many_user_count_wrapper{
	.course_item{
		position: relative;
		background: #E3F3FE;
		border: 1px dashed #D3E7F5;
		box-sizing: border-box;
		border-radius: 6px;
		.course_item_head{
			background: url("/img/_src/packet-grid.svg"), #D3EDFF;
			background-repeat: no-repeat;
			background-position: 100% 0;
			border-bottom: 1px dashed #D3E7F5;
			padding: 24px 28px 20px 28px;
			.course_num{
				font-weight: 600;
				font-size: 26px;
				line-height: 32px;
				color: #262626;
			}
			.course_certificate{
				line-height: 26px;
			}
			.price{
				font-weight: 600;
				font-size: 20px;
				line-height: 32px;
				margin-top: 7px;
				color: #262626;
			}
			.popular{
				position: absolute;
				font-weight: 600;
				font-size: 12px;
				background: #df5c48;
				border-radius: 10px 0 0 0;
				line-height: 27px;
				color: #fff;
				padding: 0 15px;
				right: 0;
				top: 30px;
			}
		}
		.course_item_body{
			padding: 15px 28px 36px 28px;
			.label{
				margin: 0;
				font-weight: 300;
				font-size: 12px;
				line-height: 16px;
				letter-spacing: 0.01em;
				color: #7E858E;
				&.active_level{
					color: #7E858E;
				}
			}
			.select2{
				min-width: 100%;
			}
			.input{
				display: flex;
				align-items: center;
				padding-left: 16px;
				width: 100%;
				background: #F2F2F2;
				border: 1px solid #D7DFE9;
				box-sizing: border-box;
				border-radius: 2px;
				height: 44px;
				margin: 2px 0 0 0;
				cursor: context-menu;
			}
			.course_item_text{
				margin-top: 24px;
				padding-left: 0;
				list-style: none;
				li{
					position: relative;
					padding-left: 30px;
					font-size: 16px;
					line-height: 26px;
					color: #565656;
					margin-bottom: 10px;
					&::before{
						content: "";
						position: absolute;
						width: 20px;
						height: 20px;
						background-image: url("/img/_src/list-img.svg");
						background-size: cover;
						left: 0;
						top: 4px;
					}
				}
			}
			.add_to_card{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 54px;
				background: url("/img/_src/cart-white.svg"),#18438b;
				background-repeat: no-repeat;
				background-position: 20px 50%;
				box-shadow: 0px 4px 10px rgba(188, 201, 210, 0.15);
				border-radius: 6px;
				font-weight: 500;
				font-size: 16px;
				color: #fff;
				text-decoration: none;
				margin-top: 24px;
				transition: all .3s;
				&:hover{
					background: url("/img/_src/cart-white.svg"),#1c52ad;
					background-position: 20px 50%;
					background-repeat: no-repeat;
				}
			}
		}
	}
}


.search_course{
	.search_course_wrapper{
		position: relative;
		margin-bottom: 15px;
		
		label{
			width: 100%;
			position: relative;
			.search_icon{
				position: absolute;
				top: 15px;
				left: 30px;
				cursor: pointer;
			}
		}
		.search_course_input{
			width: 100%;
			background: #E5F4FF;
			border-radius: 6px;
			height: 54px;
			border: none;
			padding-left: 72px;
			padding-right: 20px;
		}
	}
}

</style>
