<template>
	<view class="grace-body">
		<view class="nv-ction shadow">
			<view class="font28 nv-ction-title">{{ title }}</view>
			<view class="grace-grids">
				<view class="grace-grids-items grace-relative" v-for="(item,index) in list" :key='item.menuName' @click="click(index)">
					<image class="grace-grids-icon-img" :src="getImgUrl(item.menuLogoPath)" mode="menuLogoPath"></image>
					<text class="grace-grids-text">{{item.menuName}}</text>
					<view v-if="item.tag>0" class="grace-badge grace-bg-red grace-badge-absolute grace-white" style="top:15rpx; right:15rpx;">{{ item.tag }}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			index: '',
		}
	},
	props:{
		title: String,
		list: {
			//最大长度
			type: Array,
			default: [],
		},
	},
	watch:{
		index : function(newVal, oldVal){
			this.$emit('click', newVal);
		}
	},
	methods:{
		getImgUrl(icon){
		   return icon; 
		},
		click(res){
			this.index = res
		}
	},
	
}
</script>
<style>
/*------ 功能模块(4) ------*/ 
.nv-ction { width: 100%; min-height: 200rpx; margin: 10rpx auto; padding: 8rpx 0; background-color: #fff;}
.nv-ction-title {width: 96%;margin: 0 auto;height: 60rpx;font-size: 28rpx; line-height: 60rpx; border-bottom: 2rpx solid rgba(238, 238, 238, 1);}
.nv-ction-image { display: flex; color: #4d4d4d; flex-wrap: wrap;}
</style>