<template>
    <section id="we_save">
		<div class="container">
			<div class="row">
				<div class="col-5 d-none d-lg-block">
					<img src="/img/_src/we-save.png" alt="Мы сохраняем жизнь" class="we_save_img">
				</div>
				<div class="col-lg-7 col-12">
					<h2>Мы сохраняем жизнь <br>
						и здоровье людей на работе</h2>
					<p>
						Предназначение Международного центра безопасности труда и здоровья – сохранение жизни и здоровья человека на работе, а также забота об окружающей среде.
					</p>
					<p>
						Наша роль заключается в том, чтобы помочь компаниям достичь высочайших стандартов в области промышленной безопасности, здоровья и экологии. Мы достигаем этого посредством консультаций, обучения, повышения уровня компетенций и развития персонала. Мы помогаем ответственным компаниям внедрить инновации и лучшие мировые практики.
					</p>
					<a href="#" class="more">
						Подробнее
						<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.7929 6.79292L16.5 7.50002L20 4L16.5 0.5L15.7929 1.20711L18.0858 3.50005L8.74227e-08 3.50005L0 4.50005L18.0857 4.50005L15.7929 6.79292Z" fill="#18438B"/>
						</svg>
					</a>
				</div>
			</div>
			<div class="row bottom_items_wrapper">
				<div class="col-lg-3 col-md-6 col-12">
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/protect.svg" alt="Устойчивое развитие">
						</div>
						Устойчивое развитие
					</div>
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/briefcase.svg" alt="Широкий спектр услуг">
						</div>
						Широкий спектр услуг
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/monitor.svg" alt="Удобный формат обучения">
						</div>
						Удобный формат обучения
					</div>
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/internet.svg" alt="Цифровые решения">
						</div>
						Цифровые решения
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/heart.svg" alt="Опыт и команда">
						</div>
						Опыт и команда
					</div>
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/constructor.svg" alt="Масштаб и сфера охвата">
						</div>
						Масштаб и сфера охвата
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/star.svg" alt="Качественное обучение ">
						</div>
						Качественное обучение 
					</div>
					<div class="item">
						<div class="img_wrapper">
							<img src="/img/_src/credit-card.svg" alt="Удобные формы оплаты услуг">
						</div>
						Удобные формы оплаты услуг
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #we_save{
        h2{
            margin-top: 40px;
        }
        .we_save_img{
            max-width: 403px;
        }
        .item{
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 24px;
            font-weight: 600;
            color: #213955;
            margin-bottom: 37px;
            &:last-child{
                width: 265px;
            }
        }
        .img_wrapper{
            background: linear-gradient(4.2deg, #EDF8FF 3.15%, #D7EEFE 87.17%);
            box-shadow: 0px 4px 6px rgba(131, 139, 145, 0.11);
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center
        }
        .bottom_items_wrapper{
            margin-top: 74px;
        }
    }
</style>