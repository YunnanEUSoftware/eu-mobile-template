<template>
	<view>
		<eEmpty marginTop="100rpx" :isShow="isEmpty"></eEmpty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmpty: true, // 是否显示
			};
		},
		
		onLoad() {
			
		},
		
		methods:{

		}
	}
</script>

<style lang="scss">

</style>
