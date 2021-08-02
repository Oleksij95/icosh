<template>
    <div id="to_top" @click="scrollTop" :class="{hidden: this.$store.getters.showFlaotBody}">
		<svg width="10" height="23" viewBox="0 0 10 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.95659 6.79331L9.95832 5.79157L4.99996 0.833238L0.0416252 5.79157L1.04336 6.7933L4.29169 3.54497L4.29169 22.5L5.70836 22.5L5.70836 3.5451L8.95659 6.79331Z" fill="#18438B"/>
		</svg>
	</div>
</template>


<script>
export default {
    methods:{
        scrollTop() {
            document.querySelector("body").scrollIntoView();
        }
    }    
}
</script>

<style lang="scss" scoped>
#to_top{
	width: 36px;
	height: 36px;
	position: fixed;
	right: 30px;
    bottom: 85px;
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}
</style>