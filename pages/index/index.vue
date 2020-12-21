<template>
	<view class="wrap">
		<pageNav :desc="desc"></pageNav>
		<view class="list-wrap">
			<u-cell-group title-bg-color="rgb(243, 244, 246)" :title="item.groupName" v-for="(item, index) in list" :key="index">
				<u-cell-item :titleStyle="{fontWeight: 500}" @click="openPage(item1.path)" :title="getFieldTitle(item1)" :value="item1.value"
				 v-for="(item1, index1) in item.list" :key="index1">
					<image slot="icon" class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
				</u-cell-item>
			</u-cell-group>
		</view>
		<u-gap height="70"></u-gap>
		<!-- <u-tabbar :list="vuex_tabbar" :mid-button="true"></u-tabbar> -->
	</view>
</template>

<script>
	import list from "./index.config.js";
	export default {
		data() {
			return {
				list: list,
				desc: '众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用。',
				noticeList: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
			}
		},
		
		onLoad() {
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			},
		},
		onShow() {
			
		},
		methods:{
			openPage(path) {
				this.$u.route({ 
					url: path
				})
			},
			getFieldTitle(item) {
				return item.title
			}
		}
	}
</script>

<style lang="scss">
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
</style>
