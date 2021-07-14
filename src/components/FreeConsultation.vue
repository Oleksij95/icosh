<template>
    <section id="free_consultation">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="wrapper">
						<h2>Бесплатная консультация!</h2>
						<p>Есть вопросы? Оставьте заявку, и мы свяжемся с Вами <br> в ближайшее время удобным для вас способом</p>
						<a href="#" class="accent_btn btn" data-toggle="modal" data-target="#leave_request">Оставить заявку</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

</script>

<style lang="scss" scoped>
#free_consultation{
	.wrapper{
		background: #E3F3FE;
		border-radius: 6px;
		position: relative;
		padding: 43px 85px;
		&::after{
			content: "";
			width: 379px;
			height: 349px;
			position: absolute;
			right: 100px;
			bottom: 0;
			background-image: url("/img/_src/free-consultation-man.png");
			background-size: cover;
		}
		h2{
			font-weight: 600;
			font-size: 32px;
			line-height: 52px;
			color: #213955;
			margin-bottom: 0;
		}
		p{
			font-size: 16px;
			line-height: 26px;
			margin-bottom: 30px;
		}
		.btn{
			width: 260px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			font-weight: 500;
		}
	}
}
</style>
