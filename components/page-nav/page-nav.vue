<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<image class="logo" src="../../static/hre.jpg" mode="widthFix"></image>
			<view class="nav-info">
				<view class="nav-title__text">
					eudesign UI
				</view>
				<view class="nav-slogan">
					 兼容h5、小程序、app的移动端完整框架
				</view>
			</view>
		</view>
		<view class="nav-desc">
			{{desc}}
		</view>
		<view class="lang" @tap="switchLang">
			<u-icon size="46" color="warning" :name="lang"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String,
			common: Object,
		},
		computed: {
			lang() {
				// return this.$i18n.locale == 'zh' ? 'zh' : 'en';
			}
		},
		methods: {
			switchLang() {
				// this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' : 'en';
				this.vuex_tabbar[0].text = this.nav.components
				this.vuex_tabbar[1].text = this.nav.js
				this.vuex_tabbar[2].text = this.nav.template
				uni.setNavigationBarTitle({
					title: this.name
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 15px;
		position: relative;
	}
	
	.lang {
		position: absolute;
		top: 15px;
		right: 15px;
	}
	
	.nav-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	
	.nav-info {
		margin-left: 15px;
	}
	
	.nav-title__text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		color: $u-main-color;
		font-size: 25px;
		font-weight: bold;
	}
	
	.logo {
		width: 70px;
		/* #ifndef APP-NVUE */
		height: auto;
		/* #endif */
	}
	
	.nav-slogan {
		color: $u-tips-color;
		font-size: 14px;
	}
	
	.nav-desc {
		margin-top: 10px;
		font-size: 14px;
		color: $u-content-color;
	}
</style>
