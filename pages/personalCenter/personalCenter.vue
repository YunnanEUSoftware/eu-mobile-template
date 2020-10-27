<template>
	<view class="grace-body">
		<view class="grace-list top">
				<view class="grace-list-items">
					<view class="grace-list-image ucenter-face grace-relative">
						<image class="grace-list-image ucenter-face-image" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
					</view>
					<view class="grace-list-body body">
						<view class="grace-list-title">
							<text class="grace-list-title-text">标题信息</text>
						</view>
						<view class="grace-list-body-desc">描述信息</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right icon"></text>
				</view>
			</view>
			<view class="ucenter-line"></view>
			<view>
				<eBoxBanner :items="items"></eBoxBanner>
			</view>
			<view class="ucenter-line"></view>
			<eLabel type="view" isImage :image="image" value="跳转" name="标题一" @click="jumpPage"></eLabel>
			<eLabel type="view" isImage :image="image" value="跳转" name="标题二" @click="jumpPage"></eLabel>
			<eLabel type="view" isImage noborder :image="image" value="跳转" name="标题三" @click="jumpPage"></eLabel>
			<view class="ucenter-line"></view>
			<eLabel type="view" isImage :image="image" value="跳转" name="标题四" @click="jumpPage"></eLabel>
			<eLabel type="view" isImage noborder :image="image" value="跳转" name="标题五" @click="jumpPage"></eLabel>
		</view>
</template>
<script>
// import graceBoxBanner from "../../eudesign/graceUI/components/graceBoxBanner.vue";
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
		 // graceBoxBanner,
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