<template>
    <header class="one_cource_page" style="background-image: url('/img/_src/one-coursec-bg-min.jpg');">
		<div class="extra_menu">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="wrapper">
							<a href="#course_for" class="extra_menu_lik">Для кого курс</a>
							<a href="#additional_benefits" class="extra_menu_lik">Основные выгоды</a>
							<a href="#course_description" class="extra_menu_lik">Описание курса</a>
							<a href="#assessment_of_knowledge" class="extra_menu_lik">Оценка знаний</a>
							<a href="#what_will_i_learn" class="extra_menu_lik">Чему я научусь?</a>
							<a href="#training_options" class="extra_menu_lik">Варианты обучения</a>
							<a href="#teachers" class="extra_menu_lik">Преподаватели</a>
						</div>
					</div>
				</div>
			</div>
		</div>

        <MainMenu></MainMenu>
		
	</header>
</template>

<script>
import MainMenu from '../MainMenu.vue'
export default{
    components: {
        MainMenu
    }
}
</script>
