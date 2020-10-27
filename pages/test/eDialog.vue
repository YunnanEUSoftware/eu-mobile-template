<template>
	<view class="">
		<view class="grace-list-items" @tap="showDialog">
			<view class="grace-list-body grace-border-b">
				<view class="grace-list-title">
					<text class="grace-list-title-text">图片形式的对话框</text>
					<text class="grace-list-title-desc">点击测试</text>
				</view>
			</view>
		</view>
		
		<eDialog type='image' title="业务入口" ref="eDialog" ></eDialog>
	</view>
</template>
<script>
export default {
	components:{
		'eDialog': () => import("../../eudesign/components/e-dialog.vue")
	},
	data() {
		return {
			list: [
			]
		}
	},
	methods:{
		showDialog  : function(){this.$refs.eDialog.show();},
		closeDialog : function(){this.$refs.eDialog.close();},
	},
	
}
</script>
<style>
</style>