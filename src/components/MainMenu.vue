<template>
    <div class="menu_wrapper">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div>
							<nav class="flex_wrapper flex_between align_center">
								<a href="/" class="logo">
									<img src="/img/_src/logo.svg" alt="Logo">
								</a>
								<ul class="main_menu flex_wrapper flex_between align_center">
									<li class="dropdown">
                                        <b-dropdown text="Услуги" class="" variant="primary">
                                            <b-dropdown-item class="dropdown-item" href="#">Консультации</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Развитие позитивной культуры безопасности</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Аудиты предприятий</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Развитие компетентности персонала и лидерства в вопросах охраны труда</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Анализ системы управления охраной труда</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Разработка стратегии развития системы управления охраной труда</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Организация и проведение мероприятий посвященных охране труда (Дни / Месячники Здоровья и Безопасности)</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Разработка политик, правил, стандартов и помощь их внедрения</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Инновационные цифровые решения в охране труда (IT-услуги)</b-dropdown-item>
                                        </b-dropdown>
									</li>

									<li class="dropdown">
                                        <b-dropdown text="Обучение" class="" variant="primary">
                                            <b-dropdown-item class="dropdown-item" href="#">Some Link 1</b-dropdown-item>
                                            <b-dropdown-item class="dropdown-item" href="#">Some Link 2</b-dropdown-item>
                                        </b-dropdown>
									</li>


									<li>
										<a href="#" class="border_link">Цены</a>
									</li>
									<li>
										<a href="#" class="border_link">О нас</a>
									</li>
									<li>
										<a href="#" class="border_link">Полезно знать</a>
									</li>
									<li>
										<a href="/faq.html" class="border_link">Вопросы-ответы</a>
									</li>
									<li>
										<a href="#" class="submit_application" data-toggle="modal" data-target="#leave_request">Оставить заявку</a>
									</li>
									<li class="color_wrapper">
										<div class="search">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path opacity="0.15" d="M15.1579 8.05262C15.1579 11.9767 11.9768 15.1579 8.05265 15.1579C4.12852 15.1579 0.947388 11.9767 0.947388 8.05262C0.947388 4.12849 4.12852 0.947357 8.05265 0.947357C11.9768 0.947357 15.1579 4.12849 15.1579 8.05262Z" fill="#18438B"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05264 1.56101C4.46741 1.56101 1.56101 4.46741 1.56101 8.05264C1.56101 11.6379 4.46741 14.5443 8.05264 14.5443C11.6379 14.5443 14.5443 11.6379 14.5443 8.05264C14.5443 4.46741 11.6379 1.56101 8.05264 1.56101ZM0.33374 8.05264C0.33374 3.78961 3.78961 0.33374 8.05264 0.33374C12.3157 0.33374 15.7715 3.78961 15.7715 8.05264C15.7715 9.96326 15.0774 11.7118 13.9275 13.0597L17.4865 16.6187C17.7262 16.8584 17.7262 17.2469 17.4865 17.4865C17.2469 17.7262 16.8584 17.7262 16.6187 17.4865L13.0597 13.9275C11.7118 15.0774 9.96326 15.7715 8.05264 15.7715C3.78961 15.7715 0.33374 12.3157 0.33374 8.05264Z" fill="#18438B"/>
											</svg>
										</div>
									</li>
									<li class="color_wrapper card_wrapper">
										<a class="card" data-toggle="modal" data-target="#card">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path opacity="0.15" d="M1.97043 7.90172C2.06819 6.86324 2.93031 6.07016 3.96142 6.07016H14.0386C15.0697 6.07016 15.9318 6.86324 16.0296 7.90172L16.7915 15.9953C16.9033 17.1832 15.98 18.2105 14.8005 18.2105H3.19952C2.02004 18.2105 1.0967 17.1832 1.20853 15.9953L1.97043 7.90172Z" fill="#18438B"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99997 1.6325C7.12974 1.6325 5.61361 3.16636 5.61361 5.05847V5.44935H12.3863V5.05847C12.3863 3.16636 10.8702 1.6325 8.99997 1.6325ZM13.6136 5.44935V5.05847C13.6136 2.48062 11.548 0.390869 8.99997 0.390869C6.45193 0.390869 4.38634 2.48062 4.38634 5.05847V5.44935H3.96141C2.61392 5.44935 1.4873 6.48576 1.35954 7.84286L0.597638 15.9364C0.451502 17.4888 1.65813 18.8313 3.1995 18.8313H14.8004C16.3418 18.8313 17.5484 17.4888 17.4023 15.9364L16.6404 7.84286C16.5127 6.48576 15.386 5.44935 14.0385 5.44935H13.6136ZM3.96141 6.69098C3.24666 6.69098 2.64905 7.24073 2.58129 7.96058L1.81938 16.0541C1.74187 16.8776 2.38191 17.5897 3.1995 17.5897H14.8004C15.618 17.5897 16.2581 16.8776 16.1806 16.0541L15.4187 7.96058C15.3509 7.24072 14.7533 6.69098 14.0385 6.69098H3.96141ZM4.99997 8.48445C5.33888 8.48445 5.61361 8.7624 5.61361 9.10527V9.11538C5.61361 9.45824 5.33888 9.73619 4.99997 9.73619C4.66107 9.73619 4.38634 9.45824 4.38634 9.11538V9.10527C4.38634 8.7624 4.66107 8.48445 4.99997 8.48445ZM13 8.48445C13.3389 8.48445 13.6136 8.7624 13.6136 9.10527V9.11538C13.6136 9.45824 13.3389 9.73619 13 9.73619C12.6611 9.73619 12.3863 9.45824 12.3863 9.11538V9.10527C12.3863 8.7624 12.6611 8.48445 13 8.48445Z" fill="#18438B"/>
											</svg>
											<span class="card_counter">0</span>
										</a>
									</li>
								</ul>
								
								<div class="mob_menu_btn">
									<div class="search"></div>
									<div class="card_wrapper" data-toggle="modal" data-target="#card">
										<a class="card">
											<span class="card_counter">0</span>
										</a>
									</div>
									<div class="hamburder_wrapper">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>

</script>

<style lang="scss">
.menu_wrapper{
	position: fixed;
    width: 100%;
	transition: all .5s;
	z-index: 11;
    .btn-primary{
        background: transparent!important;
        border: none!important;
        color: #213955!important;
        cursor: pointer;
        font-size: 13px;
        box-shadow: none!important;
        font-weight: 600;
        line-height: 16px;
        padding: 0!important;
    }
    .btn-group, .btn-group-vertical{
        position: unset;
    }
    .dropdown-toggle::after {
        background: url(/img/_src/drop-down.svg);
        width: 10px;
        height: 6px;
        border: none;
        vertical-align: 1px;
    }
	.mob_menu_btn{
		display: none;
		.search{
			background: url("/img/_src/search.svg"), #E6F4FF;
			background-repeat: no-repeat;
			background-position: center;
			width: 44px;
			height: 44px;
			cursor: pointer;
			border-radius: 6px;
		}
		.card_wrapper{
			background: url("/img/_src/card.svg"), #e6f4ff;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 6px;
			width: 44px;
			height: 44px;
			position: relative;
			margin-left: 10px;
			.card_counter{
				position: absolute;
				background: #DF5C48;
				width: 16px;
				height: 16px;
				border-radius: 50%;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 500;
				font-size: 10px;
				right: 5px;
				top: 5px;
			}
		}
	}
}

.menu_wrapper.fixed{
	position: fixed;
    width: 100%;
    background: #D7EEFF;
    top: 0;
    z-index: 1;
	nav{
		margin: 16px 0;
	}
	.submit_application{
        background: #E6F4FF;
        border-radius: 6px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        transition: all .4s; 
        &:hover{
            background: #18438B;
            color: #fff;
        }
	}
}

nav{
	margin-top: 28px;
	font-family: Inter, sans-serif;
    font-weight: 500;
}

.main_menu{
	padding: 0;
	margin: 0;
	list-style: none;
	li{
		margin: 0 15px;
		a{
			color: #213955;
			text-decoration: none;
			font-size: 13px;
			line-height: 16px;
			font-style: normal;
			font-weight: normal;
			position: relative;
            font-weight: 600;
			&.border_link{
				&::before{
					content: "";
					width: 50%;
					height: 1px;
					background: #18438B;
					position: absolute;
					bottom: -30px;
					left: 0;
					right: 0;
					margin: auto;
					opacity: 0;
				}
			}
			&:hover{
				color: #18438B;
				&::before{
					opacity: 1;
				}
			}
		}
		&.color_wrapper{
			background: #E6F4FF;
			border-radius: 6px;
			width: 44px;
			height: 44px;
			transition: all .4s;
			&:hover{
				background: #18438B;
				.search, .card{
					path{
						fill: #fff;
					}
				}
			}
			.search{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
				height: 44px;
				cursor: pointer;
			}
			.card{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
				height: 44px;
				cursor: pointer;
				position: relative;
                background-color: transparent;
                border: none;
				.card_counter{
					position: absolute;
					background: #DF5C48;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 500;
					font-size: 10px;
					right: 5px;
					top: 5px;
				}
			}
			&.card_wrapper{
				margin: 0;
			}
		}
		&.dropdown{
			position: unset;
		}
	}
	.dropdown-menu{
		width: calc(100% - 24px)!important;
		left: 12px!important;
		top: 79px!important;
		transform: none!important;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);
		border: none;
		border-bottom: 4px solid #CBE9FF;
		border-radius: 0;
		padding: 25px 66px 46px 66px;
		&.show{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
            .dropdown-item{
                white-space: break-spaces;
            }
            li.dropdown-item{
                width: auto;
                padding: 0;
                margin: 0;
                width: 49%;
                a{
                    margin-bottom: 10px;
                    font-size: 14px;
                    line-height: 22px;
                    padding: 0;
                    margin-bottom: 10px;
                    width: 100%;
                    margin-right: 20px;
                    display: block;
                    overflow-wrap: break-word;
                }
                &:hover{
                    background: transparent;
                }
            }
		}
		a{
			font-size: 14px;
			line-height: 22px;
			padding: 0;
			margin-bottom: 10px;
			width: 45%;
			margin-right: 20px;
			display: block;
			overflow-wrap: break-word;
			&:hover{
				background: none;
			}
		}
		
	}
	.dropdown-toggle::after{
		vertical-align: 1px;
	}
	.dropdown.show .dropdown-toggle::after{
		transform: rotate(180deg);
	}
	.dropdown.show .dropdown-toggle:before{
		content: "";
		width: 85%;
		position: absolute;
		bottom: -30px;
		left: 0;
		height: 1px;
		background: #18438B;
	}
}


</style>
