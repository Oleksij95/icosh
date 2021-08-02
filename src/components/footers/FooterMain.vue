<template>
    <div>
        <div class="partners">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <PartnersBottomList></PartnersBottomList>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-10 col-12 tablet_flex">
                        <div>
                            <a href="/">
                                <img src="/img/_src/logo.svg" alt="logo">
                            </a>
                            <p class="reserved">© 2021 ICOSH International Centre of Occupational <br> Safety and Health. All rights reserved.</p>
                            <FooterSocialList></FooterSocialList>
                        </div>

                        <ul class="footer_menu only_tablet">
                            <li class="title">Информация</li>
                            <li v-for="(link, index) in footerMenuInfo" :key="index">
                                <a :href="link.link">{{ link.anchor }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-9  col-md-11 col-12">
                        <div class="footer_menu_wrapper wrapper flex_wrapper flex_between">
                            <ul class="footer_menu hide_tablet">
                                <li class="title">Информация</li>
                                    <li v-for="(link, index) in footerMenuInfo" :key="index">
                                    <a :href="link.link">{{ link.anchor }}</a>
                                </li>
                            </ul>

                            <ul class="footer_menu">
                                <li class="title">Программы обучения</li>
                                <li v-for="(link, index) in footerMenuProgramms" :key="index">
                                    <a :href="link.link">{{ link.anchor }}</a>
                                </li>
                            </ul>

                            <ul class="footer_menu">
                                <li class="title">Услуги</li>
                                <li v-for="(link, index) in footerMenuServices" :key="index">
                                    <a :href="link.link">{{ link.anchor }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="final_info">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            International Centre of Occupational Safety and Health. A company limited by guarantee, registered in England and Wales No 4618713 at 70 Chancellors Road, London W6 9RS. Registered Charity No. 1097271 and OSCR No. SC037998.
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <MoveTop></MoveTop>
        <CallbackFloat></CallbackFloat>
    </div>
</template>

<script>
    import PartnersBottomList from "../PartnersBottomList.vue"
    import FooterSocialList from "../FooterSocialList"
    import CallbackFloat from "../CallbackFloat.vue"
    import MoveTop from "../MoveTop.vue"

    export default{
        data() {
            return{
                footerMenuInfo: [
                    {
                        anchor: "О нас",
                        link: "#"
                    },
                    {
                        anchor: "Цены",
                        link: "#"
                    },
                    {
                        anchor: "Политифка конфединциальности",
                        link: "#"
                    },
                    {
                        anchor: "Условия использованиия",
                        link: "#"
                    }
                ],
                footerMenuProgramms: [
                    {
                        anchor: "Развитие компетентности персонала",
                        link: "#"
                    },
                    {
                        anchor: "Доступные форматы обучения",
                        link: "#"
                    },
                    {
                        anchor: "Программы обучения",
                        link: "#"
                    },
                    {
                        anchor: "Цифровая система управления обучением",
                        link: "#"
                    }
                ],
                footerMenuServices: [
                    {
                        anchor: "Консультации и аудиты",
                        link: "#"
                    },
                    {
                        anchor: "Анализ системы управления ",
                        link: "#"
                    },
                    {
                        anchor: "Разработка политик, правил, стандартов ",
                        link: "#"
                    },
                    {
                        anchor: "IT-услуги",
                        link: "#"
                    }
                ]
            }
        },
        components: {
            PartnersBottomList,
            FooterSocialList,
            CallbackFloat,
            MoveTop
        }
    }
</script>

<style lang="scss" scoped>
footer{
	margin-top: 30px;
	background: #E3F3FE;
	padding-top: 45px;
	.only_tablet{
		display: none;
	}
	p.reserved{
		font-size: 10px;
		line-height: 20px;
		margin-top: 10px;
	}
	.social_lisk_wrp{
		display: flex;
		.link{
			width: 24px;
			height: 24px;
			border-radius: 50%;
			margin-right: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.footer_menu{
		padding: 0;
		list-style: none;
		margin: 0;
		li.title{
			font-weight: 500;
			font-size: 14px;
			line-height: 54px;
			color: #213955;
		}
		li{
			a{
				font-weight: normal;
				font-size: 12px;
				line-height: 30px;
				color: #565656;
				text-decoration: none;
				transition: all .4s;
				border-bottom: 1px solid transparent;
				&:hover{
					color: #18438B;
					border-bottom: 1px solid #18438B;
				}
			}
		}
	}
	.final_info{
		background: #D6EBF9;
		font-size: 10px;
		line-height: 20px;
		min-height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 49px;
		text-align: center;
	}
}
</style>
