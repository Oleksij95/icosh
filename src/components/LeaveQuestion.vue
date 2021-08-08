<template>
    <b-modal id="leave_request" hide-footer hide-header>
		<div class="wrapper">
            <div class="top_part">
                <h3>Оставьте заявку</h3>
                <button class="close" block @click="$bvModal.hide('leave_request')">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1L1 15M1.00001 1L15 15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <form action="" id="send_request" @submit.prevent="sendForm">
                <div class="field_block">
                    <label for="name">Имя</label>
                    <input type="text" name="name" id="name" placeholder="Введите ваше имя" v-model="name">
                    <p class="error_text" v-if="name_error">Пожалуйста, заполните поле</p>
                </div>
                <div class="field_block">
                    <label for="phone">Телефон</label>
                    <input type="text" name="phone" id="phone" placeholder="Введите номер телефона" v-model="phone">
                    <p class="error_text"  v-if="phone_error">Пожалуйста, заполните поле</p>
                </div>
                <div class="field_block">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" placeholder="Введите ваш E-mail" v-model="email">
                    <p class="error_text"  v-if="email_error">Пожалуйста, введите корректные данные</p>
                </div>
                <div class="field_block">
                    <label for="question">Ваш вопрос</label>
                    <textarea type="text" name="question" id="question" placeholder="Опишите ваш вопрос" v-model="question"></textarea>
                    <p class="error_text"  v-if="question_error">Пожалуйста, заполните поле</p>
                </div>
                <button type="submit" class="accent_btn btn">Отправить</button>
            </form>
        </div>	
	</b-modal> 
</template>

<script>
/* eslint-disable */
export default{
    data() {
        return{
            name: "",
            phone: "",
            email: "",
            question: "",
            validForm: true,
            name_error: false,
            phone_error: false,
            email_error: false,
            question_error: false
        }
    },
    methods: {

        sendForm() {
            this.validForm = true
            this.name_error = false,
            this.phone_error = false,
            this.email_error = false,
            this.question_error = false

            if (this.validateForm()) {
                console.log("Form is valid. Send...")
                // send request code here
            }
            
        },

        validateForm(){

            if (this.name.trim() === "") {
                this.name_error = true
                this.validForm = false
            }

            if (this.phone.trim() === "") {
                this.phone_error = true
                this.validForm = false
            }

            if (this.question.trim() === "" || this.question.trim().length < 6) {
                this.question_error = true
                this.validForm = false
            }

            if (!this.validateEmail(this.email)) {
                this.email_error = true
                this.validForm = false
            }

            return this.validForm;
        },

        validateEmail(email){
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style lang="scss">
#leave_request{
	.modal-dialog, .modal-content{
		width: 400px;
	}
    .modal-body{
        padding: 0;
    }
	.modal-dialog{
		height: 85vh;
		display: flex;
		align-items: center;
	}
	form{
		padding-top: 16px;
		.field_block{
			margin-bottom: 22px;
			position: relative;
		}
		label{
			font-weight: 300;
			font-size: 12px;
			line-height: 16px;
			display: block;
			color: #7E858E;
			margin-bottom: 2px;
		}
		input{
			background: #F9FDFF;
			border: 1px solid #D7DFE9;
			box-sizing: border-box;
			border-radius: 2px;
			height: 44px;
			width: 100%;
			padding: 0 16px;
			&.error{
				border: 1px solid #DF5C48;
			}
		}
		textarea{
			background: #F9FDFF;
			border: 1px solid #D7DFE9;
			box-sizing: border-box;
			border-radius: 2px;
			height: 100px;
			width: 100%;
			padding: 8px 16px;
			resize: none;
		}
		p.error_text{
			font-size: 12px;
			line-height: 24px;
			position: absolute;
			color: #DF5C48;
			bottom: -21px;
			margin: 0;
		}
		.btn{
			border: none;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			box-shadow: 0px 4px 10px rgba(188, 201, 210, 0.15);
			border-radius: 6px;
			cursor: pointer;
			margin-top: 35px;
		}
	}
	.wrapper{
		padding: 4px 33px 40px 33px;
		h3{
			font-weight: 600;
			font-size: 18px;
			line-height: 54px;
			color: #262626;
			margin-bottom: 0;
		}
		.top_part{
			border-bottom: 1px solid #EFEFEF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.close{
				background: transparent;
				border: none;
				cursor: pointer;
				padding: 0;
			}
		}
	}
}
</style>
