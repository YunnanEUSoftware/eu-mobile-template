<template>
	<view>
		<eEmpty marginTop="100rpx" :isShow="isEmpty"></eEmpty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		onLoad() {
			
		},
		
		methods:{
			request(){
				this.$e.requestAPI(this.$API.apiUrl.LOGIN_OPENIDLOGIN, {} , function (res) {
				
				}, function (res) { })
			}
		}
	}
</script>

<style lang="scss">

</style>
