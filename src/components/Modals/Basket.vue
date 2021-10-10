<template>
    <b-modal id="card" hide-footer hide-header>
		<div class="wrapper">
            <h3>Корзина</h3>

            <button class="close" @click="$bvModal.hide('card')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1L1 15M1.00001 1L15 15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <form action="" class="fill" v-if="this.$store.getters.basketCount > 0">
                
                <div class="table_head">
                    <span class="name_th">Название</span>
                    <span class="count_th">Количество</span>
                    <span class="price_th">Цена</span>
                </div>

                <div class="products_wrapper">

                    <div class="product_wrapper" v-for="(product, index) in this.$store.getters.basketItems" :key="index" >
                        <div class="product_top_line">
                            <div class="left_product_part">
                                <div class="photo_preview">
                                    <img :src="product.course_pre_img" :alt="product.course_name">
                                </div>
                                <div class="product_name">{{ product.course_name }}</div>
                            </div>
                            <div class="product_counter">
                                <div class="m_title">Количество</div>
                                <div class="minus count_change" @click="changeCout(index, 'minus')">-</div>
                                <input class="count_input" :value="product.course_count">
                                <div class="plus count_change" @click="changeCout(index, 'plus')">+</div>
                            </div>
                            <div class="right_part">
                                <div class="m_title">Цена</div>
                                <div class="product_price">{{ product.course_price }} грн.</div>
                                <div class="product_remove" @click="removeItemInBasget(index, product.course_price)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66699 0.96582H9.34106V1.41577H10.3068V0.902832C10.3069 0.405029 9.9021 0 9.40454 0H6.60352C6.10596 0 5.70117 0.405029 5.70117 0.902832V1.41577H6.66699V0.96582Z" fill="#BDBDBD"/>
                                        <path d="M12.5381 5.24219H3.47224C3.22382 5.24219 3.02827 5.4541 3.04829 5.70178L3.80622 15.0739C3.84846 15.597 4.28486 16 4.80915 16H11.2011C11.7254 16 12.1618 15.597 12.204 15.0737L12.962 5.70178C12.9821 5.4541 12.7866 5.24219 12.5381 5.24219ZM5.66742 15.0004C5.65729 15.001 5.64716 15.0013 5.63715 15.0013C5.38398 15.0013 5.17145 14.8042 5.15571 14.5481L4.68073 6.85413C4.66437 6.58789 4.86689 6.35876 5.133 6.34241C5.39826 6.32629 5.62836 6.52832 5.64472 6.79468L6.11957 14.4886C6.13605 14.7549 5.93354 14.9839 5.66742 15.0004ZM8.49347 14.5184C8.49347 14.785 8.27729 15.0012 8.01056 15.0012C7.74384 15.0012 7.52765 14.785 7.52765 14.5184V6.82434C7.52765 6.55762 7.74384 6.34143 8.01056 6.34143C8.27716 6.34143 8.49347 6.55762 8.49347 6.82434V14.5184ZM11.3297 6.85278L10.8762 14.5468C10.8611 14.8033 10.6483 15.0012 10.3946 15.0012C10.3851 15.0012 10.3754 15.001 10.3658 15.0005C10.0995 14.9847 9.89642 14.7562 9.91217 14.49L10.3655 6.7959C10.3812 6.52966 10.6089 6.32654 10.8759 6.34229C11.1421 6.35791 11.3453 6.58655 11.3297 6.85278Z" fill="#BDBDBD"/>
                                        <path d="M14.2078 3.75195L13.8906 2.80127C13.807 2.55066 13.5724 2.38159 13.3081 2.38159H2.70152C2.43736 2.38159 2.20262 2.55066 2.11912 2.80127L1.80199 3.75195C1.74083 3.9353 1.82042 4.12231 1.96898 4.21558C2.02952 4.25354 2.10118 4.27637 2.17992 4.27637H13.8298C13.9086 4.27637 13.9803 4.25354 14.0408 4.21545C14.1893 4.12219 14.2689 3.93518 14.2078 3.75195Z" fill="#BDBDBD"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="product_bottom_line">
                            <div class="select_level_wrapper">
                                <label for="product-1-level">Уровень</label>
                                <p>{{ product.course_levels[product.course_level] }}</p>
                            </div>

                            <div class="select_format_wrapper">
                                <label for="product-2-format">Формат</label>
                                <p>{{ product.selected_format }}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="mobile_price">
                    <div class="total_text">
                        Итого: 
                    </div>
                    <div class="total_price">
                       {{ this.$store.getters.totalPrice }} грн.
                    </div>
                </div>

                <div class="card_footer">
                    <div class="left">
                        <button class="continue_shopping"  @click="$bvModal.hide('card')">Продолжить покупки</button>
                    </div>
                    <div class="right">
                        <div class="price_wrapper">
                            <p class="total_text">Итого:</p>
                            <div id="price" class="total_price"><span> {{ this.$store.getters.totalPrice }} </span> грн.</div>
                        </div>
                        <button type="submit" class="checkout">Оформить заказ</button>
                    </div>
                </div>

            </form>

            <div class="text_wrapper" v-else>
                <img src="/img/_src/basket.svg" alt="basket" class="basket">
                <p class="title">Корзина пустая :(</p>
                <p>Но это никогда не поздно исправить</p>
                <a href="#" class="accent_btn btn">Выбрать курсы</a>
            </div>


			</div>
	</b-modal> 
</template>

<script>
// import Select2 from 'v-select2-component';

export default{
    data() {
        return {
            
        }
    },
    methods: {
        removeItemInBasget(itemIndex, itemPrice){
            let removeItem = {
                itemIndex: itemIndex,
                itemPrice: itemPrice
            }
            this.$store.dispatch("removeBasketItem", removeItem)
        },
        changeCout(indexCourse, typeOperation) {

            let coursCount = {
                indexCourse,
                typeOperation
            }

            this.$store.dispatch("changeCourseCount", coursCount)
        }
    }
   
}
</script>

<style lang="scss">
#card{
    min-width: 900px;
    .modal-dialog{
        min-width: 900px;
        display: flex;
		align-items: center;
    }
    .modal-body{
        padding: 0;
    }
	.wrapper{
		padding-bottom: 32px;
	}
    .fill{

        .table_head{
            display: flex;
            justify-content: space-between;
            span{
                font-size: 14px;
                line-height: 54px;
                color: #565656;
                &.name_th{
                    width: 52%;
                    padding-left: 46px;
                }
                &.price_th{
                    min-width: 110px;
                }
            }
        }
        .products_wrapper{
            counter-reset: product_list;
        }

        .product_wrapper{
            position: relative;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            counter-increment: product_list;
            border-bottom: 1px solid #EFEFEF;
            padding-bottom: 29px;
            margin-bottom: 20px;
            &:last-child{
                border-bottom: none;
                margin-bottom: 0;
            }
            &::before{
                content: counter(product_list);
                width: 26px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 14px;
                color: #262626;
                background: #E3F3FE;
                border-radius: 4px;
                margin-right: 20px;
            }
            .product_top_line{
                display: flex;
                justify-content: space-between;
                width: calc(100% - 46px);
                .left_product_part{
                    display: flex;
                    align-items: center;
                    width: 55.5%;
                    .photo_preview{
                        margin-right: 10px;
                    }
                    .product_name{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 140%;
                        color: #262626;
                    }
                }
                .m_title{
                    display: none;
                }
                .product_counter{
                    display: flex;
                    align-items: center;
                    min-width: 130px;
                    .count_input{
                        width: 20px;
                        text-align: center;
                        margin: 0 20px;
                        border: none;
                        pointer-events: none;
                    }
                    .minus, .plus{
                        cursor: pointer;
                        font-size: 16px;
                        color: #565656;
                        &:hover{
                            color: #18438B;
                        }
                    }
                }
                .right_part{
                    display: flex;
                    align-items: center;
                    .product_price{
                        font-weight: 500;
                        font-size: 14px;
                        color: #262626;
                    }
                    .product_remove{
                        margin-left: 24px;
                        cursor: pointer;
                        transition: all .3s;
                        &:hover{
                            svg, path{
                                fill: #DF5C48
                            }
                        }
                    }
                }
            }
            .product_bottom_line{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 15px;
                width: 100%;
                padding-left: 46px;
                label{
                    display: block;
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: 0.01em;
                    margin-bottom: 2px;
                    color: #7E858E;
                }
                .select2-selection__rendered{
                    padding-left: 16px;
                }
                .select_level_wrapper{
                    width: 48%;
                    max-width: 380px;
                    .select2{
                        width: 100%;
                        min-width: 100%;
                    }
                }
                .select_format_wrapper{
                    width: 48%;
                    max-width: 380px;
                    input{
                        width: 100%;
                        &.disabled{
                            background: #F2F2F2;
                            border: 1px solid #D7DFE9;
                            box-shadow: none!important;
                            outline: none!important;
                            box-sizing: border-box;
                            border-radius: 2px;
                            height: 44px;
                            padding-left: 16px;
                            font-size: 14px;
                            line-height: 24px;
                            color: #213955;
                        }
                    }
                    .select2{
                        width: 100%;
                        min-width: 100%;
                    }
                    ::placeholder{
                        color: #213955;
                    }
                }
            }
        }

        .mobile_price{
            display: none;
        }

        .card_footer{
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #EFEFEF;
            padding-top: 27px;
            
            .left{
                display: flex;
                align-items: flex-end;
            }
            .continue_shopping{
                font-weight: 500;
                font-size: 16px;
                text-decoration: none;
                color: #213955;
                line-height: 54px;
                background: transparent;
                border: none;
            }
            .price_wrapper{
                padding-left: 150px;
            }
            .total_text{
                font-size: 12px;
                line-height: 12px;
                color: #565656;
            }
            #price{
                font-size: 16px;
                color: #262626;
                font-weight: bold;
                line-height: 22px;
            }
            .checkout{
                margin-top: 10px;
                background: url("/img/_src/long-right-arrow.svg"), #18438B;
                background-repeat: no-repeat;
                background-position: 90% 50%;
                box-shadow: 0px 4px 10px rgba(188, 201, 210, 0.15);
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding-left: 24px;
                width: 260px;
                height: 54px;
                font-weight: 500;
                font-size: 16px;
                color: #fff;
                border: none;
                cursor: pointer;
                transition: all .3s;
                &:hover{
                    background: url("/img/_src/long-right-arrow.svg"), #1c52ad;
                    background-repeat: no-repeat;
                    background-position: 90% 50%;
                }
            }
        }
    }
	

}

#card{
	.wrapper{
		padding: 16px 30px;
		.text_wrapper{
			text-align: center;
			margin-top: 43px;
		}
		h3{
			font-weight: 600;
			font-size: 20px;
			line-height: 54px;
			color: #262626;
			border-bottom: 1px solid #EFEFEF;
		}
		.close{
			background: transparent;
			border: none;
			cursor: pointer;
			position: absolute;
			top: 25px;
			right: 30px;
			padding: 0;
		}
		p{
			font-size: 14px;
			line-height: 26px;
			color: #565656;
			margin-bottom: 0;
			&.title{
				font-family: InterMedium, sans-serif;
				font-size: 18px;
				line-height: 30px;
				color: #262626;
				margin-bottom: 0;
				width: 100%;
			}
		}
		a.accent_btn{
			width: 260px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			margin: 25px auto 0 auto;
		}
	}
}

</style>
