<template>
	<view v-if="isShow">
		<u-empty mode="search" :margin-top="marginTop" :text="text" :src="src"></u-empty>
	</view>
</template>
<script>
export default {
	data() {
		return {}
	},
  name: 'e-empty',
	props:{
		isShow: {   // 是否显示
			type: Boolean,
			default: false,
		},
		text:{  // 提示文本
			type: String,
			default: '',
		},
		src:{ 	// 提示图片
			type: String,
			default: "",
		},
		marginTop:{ // 距上边距
			type: String,
			default: '500',
		},
	},
	onLoad:function(){},
	methods:{},
}
</script>
<style>
.empty-view{width:280rpx; height:280rpx; border-radius:280rpx; background-color:#F6F7F8; }
.empty-img{width:220rpx; height:200rpx; margin:40rpx; border-radius:200rpx;}
.grace-text-small{margin-top:10px;}
</style>