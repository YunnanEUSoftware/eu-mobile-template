<template>
	<view v-if="show">
		<u-empty :mode="mode" :margin-top="marginTop" :color="color" :icon-color="color" :icon-size="size" :text="text" :src="src"></u-empty>
	</view>
</template>
<script>
export default {
	data() {
		return {}
	},
	props:{
		show: {   // 是否显示
			type: Boolean,
			default: false,
		},
		mode:{  // 内置图标
			type: String,
			default: 'search',
		},
		text:{  // 提示文本
			type: String,
			default: '',
		},
		src:{ 	// 提示图片
			type: String,
			default: "",
		},
		top:{ // 距上边距
			type: String,
			default: '500',
		},
		color:{ // 颜色
			type: String,
			default: '#c0c4cc',
		},
		size:{ // 大小
			type: String,
			default: '120',
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