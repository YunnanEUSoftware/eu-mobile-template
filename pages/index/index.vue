<template>
	<view>
		
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
			
			// 接口请求示例
			request(){
				this.$e.requestAPI(this.$API.apiUrl.LOGIN_OPENIDLOGIN, {} , function (res) {
				
				}, function (res) { })
			}
		}
	}
</script>

<style lang="scss">

</style>
