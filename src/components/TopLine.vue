<template>
    <div class="top_line">
		<b-container>
			<b-row>
				<b-col>
					<div class="flex_wrapper flex_between align_center">
						<span>Сделаем работу безопаснее вместе!</span>
						<div class="dropdown lang_drop_wrp">
                            <b-dropdown text="РУС" id="dropdownMenuButton" class="" variant="primary">
                                <b-dropdown-item class="dropdown-item" href="#">РУС</b-dropdown-item>
                                <b-dropdown-item class="dropdown-item" href="#">ENG</b-dropdown-item>
                                <b-dropdown-item class="dropdown-item" href="#">УКР</b-dropdown-item>
                            </b-dropdown>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss">
    .top_line{
        background-color: #EDF8FF;
        .btn-primary{
            background: transparent!important;
            border: none!important;
            color: #213955!important;
            cursor: pointer;
            font-size: 13px;
            box-shadow: none!important;
            font-weight: 600;
            line-height: 16px;
        }
        .flex_wrapper{
            min-height: 40px;
        }
        .lang_drop_wrp, ul.dropdown-menu{
            font-size: 13px;
        }
        span{
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            color: #213955;
        }
        .dropdown-toggle::after {
            background: url(/img/_src/drop-down.svg);
            width: 10px;
            height: 6px;
            border: none;
            vertical-align: 1px;
        }

        .lang_drop_wrp{
            .dropdown-toggle[aria-expanded='true']{
                &::after{
                    transform: rotate(180deg);
                }
            }
        }

        ul.dropdown-menu {
            border: none;
            width: 100%;
            border-radius: 0;
            min-width: calc(100% + 9px);
            left: -11px!important;
            .dropdown-item{
                padding: 2px 0;
                text-align: center;
                font-weight: 500;
                &:hover{
                    background: none;
                    color: #18438B;
                    text-decoration: underline;
                }
            }
        }
    }
</style>
