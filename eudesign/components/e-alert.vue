<template>
	<!-- 消息提示 -->
	<!-- <view slot="gBody" class="grace-body">
		<graceHeaderAlert ref="successAlert" :background="successColor">
			<text class="grace-icons icon-right grace-white grace-h5" style="margin-right:20rpx;"></text>
			<text class="grace-h5 grace-white">{{ message }}</text>
		</graceHeaderAlert>
		<graceHeaderAlert ref="failAlert" :background="failColor">
			<text class="grace-h5 grace-white">{{ message }}</text>
		</graceHeaderAlert>
	</view> -->
</template>

<script>
	import graceHeaderAlert from '../graceUI/components/graceHeaderAlert.vue';
	
	export default {
		components: {
			graceHeaderAlert
		},
		data() {
			return {
				message: '',
			}
		},
		props:{
			// 公共
			
			successColor: { // 成功提示颜色
				type: String,
				default: '#1890ff',
			},
			failColor: { 	// 失败成功颜色
				type: String,
				default: '#f5222d',
			},
		},
		methods:{
			// showSuccess : function(e){this.message = e; this.$refs.successAlert.open();	},
			// showFail : function(e){this.message = e; this.$refs.failAlert.open();},
			showSuccess(e){
				uni.showToast({
					title: e,
					icon:'none',
					duration: 2000
				});
			},
			showFail(e){
				uni.showToast({
					title: e,
					icon:'none',
					duration: 2000
				});
			}
		}
	}	
</script>


<style>
	.uni-toast {
		font-size: 20rpx;
	
	}
	input { font-size: 20rpx; }
</style>
