<template>
    <section id="faq">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Частые вопросы</h2>

					<div id="accordion">

                        <b-card no-body class="faq-content--item" v-for="(faq, index) in faqs" :key="index">
                            <b-card-header header-tag="div" class="header" role="tab">
                                <b-button block v-b-toggle="'accordion-' + index" variant="none" tag="h3">{{ faq.title }}</b-button>
                            </b-card-header>
                            <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text v-html=faq.text>
                                       
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

					</div>

					<div class="more_item flex_wrapper align_center">
						<a href="#">Посмотреть весь список</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default{
    data() {
        return{
            faqs: [
                {
                    title: "Какие курсы, квалификации и программы обучения вы предлагаете?",
                    text: "Мы предлагаем широкий диапазон обучений с различной квалификацией и глубиной знаний в области: охраны труда (безопасность труда и здоровья), пожарной безопасности, экологии (охраны окружающей среды) и устойчивого развития, первой доврачебной помощи, навыков личной эффективности, а также детской безопасности.<br>Посмотреть полный ассортимент наших обучений <a href='#'>link</a>",
                },
                {
                    title: "Вы разрабатываете индивидуальные курсы?",
                    text: "Да, мы разрабатываем индивидуальные курсы, отвечающие конкретным потребностям наших клиентов. <br> Свяжитесь с нами, чтобы обсудить Ваши требования <a href='#'>link</a>"
                },
                {
                    title: "Где проходят очные занятия?",
                    text: "Мы проводим очные занятия в Киеве в нашем учебном центре. Так же мы можем провести обучение на вашем предприятии. Более детально о всех доступных форматах обучения, узнайте <a href='#'>здесь</a>"
                },
                {
                    title: "Проводится ли обучение дистанционно?",
                    text: "Да, мы проводим обучение в дистанционном и смешанном формате. <br> Все виды дистанционного обучения, а также полный перечень доступных программ <a href='#'>здесь</a>"
                },
                {
                    title: "Предлагаете ли вы электронное обучение?",
                    text: "Да - мы предлагаем ряд курсов в виде электронного обучения, с помощью нашей цифровой платформы. А также варианты смешанного обучения в дистанционном формате и электронного. <br> Просмотреть полный ассортимент онлайн-продуктов можно <a href='#'>здесь</a>"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#faq{
	margin-top: 80px;
	h2{
		margin-bottom: 27px;
		border-top: 1px dashed #D2E3EE;
		padding-top: 50px;
	}
	.more_item{
		justify-content: center;
		a{
			font-size: 14px;
			margin-top: 20px;
			color: #18438B;
			text-decoration: none;
			border-bottom: 1px solid #18438B;
			transition: all .4s;
			&:hover{
				color: #346CCA;
				border-bottom: 1px solid #346CCA;
			}
		}
	}
}
.card{
    border: none;
}
.card-header {
    .btn{
        outline: none;
        width: 100%;
        text-align: left;
        box-shadow: none;
    }
    .btn[aria-expanded="true"]{
        &::after{
            display: none!important;
        }
    }
}

.card-body{
    -webkit-box-shadow: 0 4px 20px rgba(206, 206, 206, .25);
    box-shadow: 0 4px 20px rgba(206, 206, 206, .25);
}

</style>