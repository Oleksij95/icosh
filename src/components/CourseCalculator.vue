<template>
    <div class="card_wrapper" >
        <p class="title">Закажите курс сейчас:</p>
        <form action="" id="add_cource_form">
            <div class="field_litem no_select">
                <label for="teaching_method">
                    Выберите формат обучения
                    <div class="tooltip_wrapper info_icon" v-if="this.$store.getters.course.formats_to_level && this.$store.getters.course.formats_to_level[selectedCourseFormat].length === 1">
                        <img src="/img/_src/info-icon.svg" alt="info">
                        <span class="tooltiptext_custom">Курс этого уровня обучения доступен только в таком формате.</span>
                    </div>
                </label>

				<div v-if="this.$store.getters.course.formats_to_level">
					<select name="course_format" id="course_format" @change="changeFormat">
						<option value="" v-for="(item, index) in this.$store.getters.course.formats_to_level[selectedCourseFormat]" :key="index">
							{{ item }}
						</option>
					</select>
				</div>

            </div>

            <div class="field_litem last_item">
                <label for="people_count">Выберите количество ученников</label>
                <div class="count_imput_wrp">
                    <span class="minus" @click="changeQuantity('minus')">
                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2.1H13.1V2V1V0.9H13H1H0.9V1V2V2.1H1H13Z" fill="#B5B5B5" stroke="#B5B5B5" stroke-width="0.2"/>
                        </svg>
                    </span>
                    <input type="text" :value="quantity" class="people_count" name="people_count" id="people_count">
                    <span class="plus" @click="changeQuantity('plus')">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.57142 0.9H6.47142V1V6.47143H1H0.9V6.57143V7.42857V7.52857H1H6.47142V13V13.1H6.57142H7.42856H7.52856V13V7.52857H13H13.1V7.42857V6.57143V6.47143H13H7.52856V1V0.9H7.42856H6.57142Z" fill="#213955" stroke="#213955" stroke-width="0.2"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div id="price"><span>{{ recountPrice }}</span> грн.</div>
            <button type="submit" class="add_to_card" @click.prevent="addBasketItem">Добавить в корзину</button>
        </form>
    </div>
</template>

<script>
export default {
	props: ["price", "selectedCourseFormat"],
    data() {
        return{
			selected_format: "",
            quantity: 1,
			formats_to_level: {},
			placeholderSelect: ""
        }
    }, 
	methods: {
		changeQuantity(action) {
			if (action === 'plus') {
				this.quantity++
			}
			if (action === 'minus' && this.quantity > 1) {
				this.quantity--
			}
		},
		changeFormat(e) {
			this.selected_format = e.target.options[e.target.selectedIndex].text
			this.$store.dispatch('setSelectedFormat', this.selected_format)
		},
		addBasketItem() {
			this.$emit('addBasketItem', {
				price: this.recountPrice,
				courseCount: this.quantity,
				selected_format: this.$store.getters.selectedFormat,
				formats_to_level: this.formats_to_level,
			})
		}
	},
	computed: {
		recountPrice(){
			return this.quantity * this.price
		},
		
	},
	watch: {
	
	},
}
</script>

<style lang="scss" scoped>
.card_wrapper{
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(167, 167, 167, 0.2);
	border-radius: 6px;
	padding: 20px 40px 25px 40px;
	.title{
		font-weight: 600;
		font-size: 18px;
		line-height: 46px;
		text-align: center;
		color: #262626;
		margin-bottom: 20px;
	}
	.field_litem{
		margin-bottom: 22px;
		&.last_item{
			margin-bottom: 12px;
		}
		&.no_select{
			.select2-selection__arrow{
				opacity: 0;
			}
		}
	}
	label{
		font-weight: 300;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.01em;
		color: #7E858E; 
		display: block;
		margin-bottom: 2px;
	}
	select{
		width: 100%;
		border: 1px solid #D7DFE9;
		box-sizing: border-box;
		border-radius: 2px;
		height: 44px;
		padding: 0 16px;
	}
	#price{
		font-weight: 500;
		font-size: 19px;
		line-height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #262626;
		span{
			padding-right: 4px;
		}
	}
	.info_icon{
		cursor: pointer;
		vertical-align: 1px;
		margin-left: 1px;
	}
	.count_imput_wrp{
		background: #FFFFFF;
		border: 1px solid #D7DFE9;
		box-sizing: border-box;
		border-radius: 2px;
		height: 44px;
		display: flex;
		align-items: center;
		padding: 0 16px;
		input{
			border: none;
			width: 200px;
			text-align: center;
		}
		span{
			min-width: 20px;
			display: block;
			cursor: pointer;
			color: #213955;
			display: flex;
			align-items: center;
			height: 100%;
			&.can_minus{
				svg, path{
					fill: #213955;
				}
			}
		}
	}

		
	.add_to_card{
		background: url("/img/_src/cart-white.svg"), #18438B;
		background-repeat: no-repeat;
		background-position: 20px 50%;
		box-shadow: 0px 4px 10px rgba(188, 201, 210, 0.15);
		border-radius: 6px;
		height: 54px;
		font-size: 16px;
		line-height: 54px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border: none;
		cursor: pointer;
		transition: all .4s;
		&:hover{
			background: url("/img/_src/cart-white.svg"), #1c52ad;
			background-position: 20px 50%;
			background-repeat: no-repeat;
		}
	}
}
</style>