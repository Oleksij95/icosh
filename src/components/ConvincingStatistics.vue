<template>
    <section id="statistics">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2><span>Убедительная</span> статистика </h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-12 order-2 order-md-1">
					<p class="title">Эти цифры возникаю вследствие:</p>
					<ul class="custom_list">
						<li>Отсутствия или не качественно проведенной оценки рисков</li>
						<li>Низкого уровня культуры безопасности и отсутствия <br>	лидерства в вопросах охраны труда</li>
						<li>Некомпетентного и не обученного персонала </li>
					</ul>
					<div class="submit_btn_rapper hide_tablet">
						<p>Не хотите становиться частью этой статистики? <br>
							Давайте сделаем работу безопаснее вместе!</p>
							<a href="#" class="accent_btn btn" data-toggle="modal" data-target="#leave_request">Оставить заявку</a>
					</div>
				</div>
				<div class="col-lg-6 col-12 order-1 order-md-2">
					<div class="row">
						<div 
                            v-for="(item, index) in digital_block"
                            :key="index"
                            class="col-md-6 col-12">
							<div class="item_block">
								<p class="item_title">{{ item.value }}</p>
								<p class="item_text">{{ item.title }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 order-3">
					<div class="submit_btn_rapper only_tablet">
						<p>Не хотите становиться частью этой статистики? <br>
							Давайте сделаем работу безопаснее вместе!</p>
							<a href="#" class="accent_btn btn" data-toggle="modal" data-target="#leave_request">Оставить заявку</a>
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
                digital_block: [
                    {
                        title: "рабочих получили профессиональные заболевания",
                        value: "1.4 млн."
                    },
                    {
                        title: "рабочих дней были потеряны из-за профессиональных заболеваний и травм",
                        value: "28.2 млн."
                    },
                    {
                        title: "потерь, связанных с новыми случаями профессиональных заболеваний и травм",
                        value: "£9.8 млрд."
                    },
                    {
                        title: "рабочих умирают ежегодно вследствие полученных травм",
                        value: "5.8 млн."
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
#statistics{
	margin-top: 80px;
	margin-bottom: 100px;
	.only_tablet{
		display: none;
	}
	h2{
		margin-bottom: 27px;
		border-top: 1px dashed #D2E3EE;
		padding-top: 50px;
	}
	p.title{
		font-weight: normal;
		font-size: 20px;
		line-height: 26px;
		color: #262626;
		margin-bottom: 22px;
		margin-top: 28px;
	}
	ul.custom_list{
		list-style: none;
		margin: 0;
		padding: 0;
		li{
			position: relative;
			padding-left: 30px;
			margin-bottom: 24px;
			font-size: 16px;
			line-height: 20px;
			&::before{
				content: "";
				width: 20px;
				height: 20px;
				background: url("/img/_src/list-img.svg");
				position: absolute;
				left: 0;
				top: 0px;
			}
		}
	}
	.submit_btn_rapper{
		margin-top: 56px;
		padding-left: 78px;
		position: relative;
		&::before{
			content: "";
            width: 1px;
            height: 74px;
            background: #18438B;
            position: absolute;
            left: 1px;
            top: 26px;
		}
		p{
			position: relative;
			&::before{
				content: "";
				width: 60px;
				height: 1px;
				background: #18438B;
				position: absolute;
				left: -77px;
				top: 49%;
			}
		}
		.accent_btn{
			width: 260px;
			height: 54px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			margin-top: 20px;
			position: relative;
			&::before{
				content: "";
				width: 60px;
				height: 1px;
				background: #18438B;
				position: absolute;
				left: -77px;
				top: 50%;
			}
		}
	}
	.item_block{
		background: #E3F3FE;
		border: 1px dashed #D3E7F5;
		border-radius: 6px;
		padding: 28px 18px 20px 18px;
		margin-bottom: 30px;
		min-height: 178px;
		.item_title{
			font-weight: 500;
			font-size: 28px;
			line-height: 28px;
			text-align: center;
			color: #18438B;
			position: relative;
			&::before{
				content: "";
				position: absolute;
				border-bottom: 1px dashed #A5C6DD;
				bottom: -16px;
				width: 158px;
				left: 0;
				right: 0;
				margin: auto;
			}
		}
		.item_text{
			font-size: 14px;
			line-height: 24px;
			text-align: center;
			margin-top: 28px;
			margin-bottom: 0;
		}
	}
}
</style>
