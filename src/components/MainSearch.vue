<template>
    <div id="main_search_wrapper" >
	
		<div class="search_block" :class="{search_block_active: this.$store.getters.showSearch}" ref="search_block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="search_form_wrapper">
							<form action="">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.15" d="M20.2106 10.7368C20.2106 15.969 15.969 20.2105 10.7369 20.2105C5.5047 20.2105 1.26318 15.969 1.26318 10.7368C1.26318 5.50464 5.5047 1.26312 10.7369 1.26312C15.969 1.26312 20.2106 5.50464 20.2106 10.7368Z" fill="#18438B"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7367 2.08134C5.95639 2.08134 2.08119 5.95654 2.08119 10.7368C2.08119 15.5171 5.95639 19.3923 10.7367 19.3923C15.517 19.3923 19.3922 15.5171 19.3922 10.7368C19.3922 5.95654 15.517 2.08134 10.7367 2.08134ZM0.444824 10.7368C0.444824 5.0528 5.05265 0.444977 10.7367 0.444977C16.4207 0.444977 21.0286 5.0528 21.0286 10.7368C21.0286 13.2843 20.103 15.6157 18.5698 17.4129L23.3152 22.1583C23.6348 22.4778 23.6348 22.9959 23.3152 23.3154C22.9957 23.6349 22.4777 23.6349 22.1581 23.3154L17.4127 18.5699C15.6155 20.1031 13.2842 21.0287 10.7367 21.0287C5.05265 21.0287 0.444824 16.4209 0.444824 10.7368Z" fill="#18438B"/>
								</svg>
								<input type="text" name="search" id="search_term" placeholder="Введите поисковое слово">
							</form>
							<div class="close" @click="closeSearch">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.75 1.25L1.25 18.75M1.25002 1.25L18.75 18.75" stroke="#828282" fill="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="search_result">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="search_result_body">
							<p class="title">Найдено <span id="result_count">3</span>результатов, соответствующих вашему запросу</p>
							<ul>
								<li>
									<a href="#">Развитие позитивной культуры безопасности</a>
								</li>
								<li>
									<a href="#">Организация и проведение мероприятий посвященных охране труда (Дни / Месячники Здоровья и Безопасности)</a>
								</li>
								<li>
									<a href="#">Организация и проведение мероприятий посвященных охране труда (Дни / Месячники Здоровья и Безопасности)</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default{
    methods: {
        closeSearch() {
            this.$store.dispatch('showSearch', false)
            document.querySelector('#main_search_wrapper .search_block').classList.remove("search_block_active");
            document.querySelector("#app").classList.remove("search_popup");
        }
    }
}
</script>

<style lang="scss" >
.search_block{
	z-index: 101;
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 54px;
	background: #E5F4FF;
	transition: all .4s;
	top: -100px;
	&.search_block_active{
		top: 0;
	}
	.search_form_wrapper{
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 54px;
		form{
			width: 90%;
		}
		svg{
			margin-right: 18px;
			vertical-align: -6px;
		}
		input{
			background: transparent;
			border: none;
			padding: 0;
			margin: 0;
			height: 40px;
			width: 80%;
		}
	}
	.close{
		cursor: pointer; 
		&:hover{
			path{
				fill: #18438B;
				stroke: #18438B;
			}
		}
		svg{
			margin-right: 0;
		}
	}
}

.search_result{
	position: fixed;
	width: 100%;
	top: -1500px;
	z-index: 101;
	&.search_result_open{
		top: 54px;
	}
	.search_result_body{
		background: #fff;
		padding: 10px 57px 35px 57px;
		border-bottom: 4px solid #CBE9FF;
		min-height: 122px;
		.title{
			font-size: 14px;
			line-height: 54px;
			color: #565656;
			margin-bottom: 0;
			margin-bottom: 23px;
		}
		ul{
			list-style: decimal;
			margin: 0;
			padding-left: 15px;
			li{
				margin-bottom: 20px;
			}
			a{
				font-size: 16px;
				line-height: 22px;
				color: #262626;
				&:hover{
					color: #18438B
				}
			}
		}
	}
}
</style>
