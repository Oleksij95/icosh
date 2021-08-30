<template>
    <b-modal id="professional_training_levels_modal" hide-footer hide-header>
		<div class="wrapper">
            <div class="top_part">
                <h3>Уровни профессиональной подготовки</h3>
                <button class="close" block @click="$bvModal.hide('professional_training_levels_modal')" >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1L1 15M1.00001 1L15 15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div class="body_part">
                <p>Наши программы обучения формируются, учитывая конкретные требуемые от персонала и руководителей компетенции в той или иной области здоровья и безопасности труда, экологии, а также уровень профессиональной подготовки, квалификации. Наша система построена следующим образом:</p>
                <div class="tabs_wrapper">
                    <div class="tab_name_wrapper">
                        <div
                            class="tab"
                            :class="{active: level_type === 'elementary_tab'}"
                            @click="changeLevelInfo('elementary_tab')"
                        >
                            Начальный
                        </div>

                        <div
                            class="tab"
                            :class="{active: level_type === 'basic_tab'}"
                            @click="changeLevelInfo('basic_tab')"
                        >
                            Основной
                        </div>

                        <div
                            class="tab"
                            :class="{active: level_type === 'advanced_tab'}"
                            @click="changeLevelInfo('advanced_tab')"
                        >
                            Продвинутый
                        </div>

                        <div
                            class="tab"
                            :class="{active: level_type === 'expert_tab'}"
                            @click="changeLevelInfo('expert_tab')"
                            >
                            Экспертный
                        </div>

                    </div>
                    <div class="tab_content_wrapper">
                        <div id="elementary_tab" class="tab_body" v-if="level_type === 'elementary_tab' ">
                            <p class="title">Начальный</p>
                            Вводный курс, дающий общую осведомленность о направлении, основных принципах управления специфическими для данного направления рисками. Дает возможность принять решение о необходимости дальнейшего углубления знаний по данному направлению и выбрать требуемый уровень квалификации. <br>
                            Онлайн дистанционное обучение. Тест знаний. Сертификат о прохождении.
                        </div>

                        <div id="basic_tab" class="tab_body" v-if="level_type === 'basic_tab' ">
                            <p class="title">Основной</p>
                            Фундаментальный курс, дающий полное понимание об основах управления специфическими рисками в отдельном направлении здоровья и безопасности труда, экологии, детально раскрывает иерархию мер управления и системные принципы обеспечения безопасности. После успешного прохождения курса студенты демонстрируют глубокий уровень знаний и понимания предмета, дающие возможность перейти на следующий продвинутый уровень квалификации по направлению.
                            <br>
                            Все виды онлайн и очного обучения. Тест знаний с открытыми вопросами. Сертификат о прохождении.
                        </div>
                        <div id="advanced_tab" class="tab_body" v-if="level_type === 'advanced_tab' ">
                            <p class="title">Продвинутый</p>
                            Продвинутый курс обучения по углублению знаний и расширению профессиональных навыков в отдельном направлении здоровья и безопасности труда, экологии. Помимо теоретической, содержит обязательную практическую часть, дающую необходимый уровень навыков для самостоятельного безопасного выполнения работ, а также их организации. Поможет заложить основы для построения системы безопасности по отдельному направлению в своей организации.
                            <br>
                            Очное обучение по теоретической и практической части курса. Возможно смешанное обучение с онлайн форматом только для теоретической части курса. Экзамен по теоретической и практической частям курса. Сертификат о прохождении.
                        </div>
                        <div id="expert_tab" class="tab_body" v-if="level_type === 'expert_tab' ">
                            <p class="title">Экспертный</p>
                            Курс обучения, предназначенный для руководителей и специалистов, являющихся лидерами внедрения программ по данному направлению здоровья и безопасности труда, экологии на своих предприятиях, организациях. В результате обучения студенты получают огромный совокупный опыт знаний и навыков, чтобы стать образцом для подражания в выбранном направлении для других внутри своих организаций. Демонстрируют умение диагностировать, решать и предвидеть сложные ситуации и нестандартные проблемы применительно к направлению курса. Самостоятельно умеют выстраивать системы управления, разрабатывать программы обучения и убедительно выступать в роли спикера.
                            <br>
                            Только очный формат обучения. Возможно прохождение обучения в онлайн формате только некоторых блоков теоретической части курса. Курсовая работа и экзамен по теоретической и практической частям курса. Сертификат о прохождении.
                        </div>
                    </div>
                </div>
                <div class="help_banner">
                    <div class="wrapper">
                        <div class="text_part">
                            <p class="title">Нужна помощь?</p>
                            <p>Оставьте заявку и мы поможем с выбором!</p>
                        </div>
                        <div class="link_part">
                            <a class="accent_btn btn" v-b-modal.leave_request>Оставить заявку</a>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</b-modal> 
</template>

<script>
export default{
    data() {
        return{
            level_type: "elementary_tab"
        }
    },
    methods: {
        changeLevelInfo(level_type = 'elementary_tab') {
            this.level_type = level_type
        }
    }
}
</script>

<style lang="scss">
#professional_training_levels_modal{
	.modal-dialog,
	.modal-content{
		min-width: 800px;
	}
    .modal-body{
        padding: 0;
    }
	.modal-content{
		background: #FFFFFF;
		border-radius: 6px;
		padding: 2px 30px 38px 30px;
		font-size: 14px;
		line-height: 22px;
		color: #565656;
	}

	.top_part{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EFEFEF;
		margin-bottom: 15px;
		h3{
			font-weight: 600;
			font-size: 18px;
			line-height: 54px;
			color: #262626;
			margin-bottom: 0;
		}
		.close{
			background: transparent;
			border: none;
			cursor: pointer;
			opacity: 1;
		}
	}
	.tabs_wrapper{
		.tab_name_wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30px;
			.tab{
				height: 50px;
				min-width: 177px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #D1D1D1;
				box-sizing: border-box;
				border-radius: 100px;
				cursor: pointer;
				font-size: 14px;
				color: #728D9F;
				&.active{
					background: #18438B;
					color: #fff;
				}
			}
		}
		.tab_body{
			.title{
				font-weight: 600;
				font-size: 20px;
				line-height: 28px;
				margin-bottom: 8px;
				color: #213955;
				text-transform: uppercase;
			}
		}
	}
	.help_banner{
		background: #E3F3FE;
		border-radius: 6px;
		padding: 9px 24px;
		margin-top: 28px;
		.wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				font-size: 18px;
				margin-bottom: 0;
				&.title{
					font-size: 18px;
					line-height: 28px;
					color: #213955;
					font-style: normal;
					font-weight: 600;
					margin-bottom: 0;
				}
			}
			.accent_btn {
				width: 260px;
				height: 54px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-decoration: none;
				font-size: 16px;
			}
		}
	}
}

</style>
