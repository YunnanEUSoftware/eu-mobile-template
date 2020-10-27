<template>
			<eBoxBanner background="#F8F8F8" :items="items" @taped="taped"></eBoxBanner>

</template>
<script>
export default {
	data() {
		return {
			items: [
				[80, '', '动态'],
				[100, '', '好友'],
				[50, '', '私信'],
				['￥199', '', '余额']
			],
			image: require("../../images/BUDGET.png")
		}
	},
	methods:{},
	components:{
		'eBoxBanner': () => import("../../eudesign/components/e-boxbanner.vue"),
		'eLabel': () => import("../../eudesign/components/e-label.vue")
	}
}
</script>
<style>
.ucenter-face{width:100rpx !important; height:100rpx !important;}
.ucenter-face-image{width:100rpx !important; height:100rpx !important;}
.ucenter-line{height:12rpx; background-color:#F4F5F6; margin:16rpx 0;}


.top { height: 180rpx; }
.top .icon { margin-top: 40rpx; }
.grace-list-image image { margin-top: 20rpx; }
.top .body { margin-top: 40rpx; }
</style>