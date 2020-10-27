<template>
		<eReload @reload="reload" ref="eReload">
			<view class="grace-wrap grace-margin-top">
				<view class="refreshDmo grace-bg-blue" v-for="(item, index) in refreshDate" :key="index">{{item}}</view>
			</view>
		</eReload>
</template>
<script>
export default {
	components:{
		'eReload': () => import("../../eudesign/components/e-reload.vue"),
	},
	data() {
		return {
			refreshDate: [ "C", 'O', 'D', 'E', 'R', 'D', 'E', 'M', 'O', 'H', 'I', "^_^","(:" ]
		}
	},
	methods:{
		// 下拉刷新函数 ( 请根据项目需要自行编写代码 )
		reload(){
			console.log('刷新函数执行......');
			this.$refs.eReload.reload();
		},

	},
	
}
</script>
<style>
.refreshDmo{border-radius:3px; height:100rpx; line-height:100rpx; text-align:center; width:347rpx; margin:15rpx; font-size:30rpx;}
</style>