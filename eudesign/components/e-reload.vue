<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-flex-v1" id="gBody">
			<scroll-view class="grace-relative" scroll-y="true" :style="{height:scrollHeight+'px'}" 
			@touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" @scroll="scroll">
				<graceReload @reload="$emit('reload')" :width="width" :reloadColor="reloadColor" :reloadBgColor="reloadBgColor" :marginLeft="marginLeft" ref="graceReload"></graceReload>
				<slot></slot>
			</scroll-view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../graceUI/components/gracePage.vue";
import graceReload from '../graceUI/components/graceReload.vue';
export default {
	components:{gracePage, graceReload},
    data() {
    	return {
			scrollTop : 0,
			scrollHeight : 600
    	}
    },
	props:{
		reloadBgColor : {
			type : Array,
			default : function(){
				return ['', '', '#63D2BC']
			}
		},
		reloadColor : {
			type : Array,
			default : function(){
				return ['#999999', '#63D2BC', '#FFFFFF']
			}
		},
		width : {
			type : String,
			default:'750rpx'
		},
		marginLeft : {
			type : String,
			default:'0rpx'
		}
	},
	
	onReady:function(){
		setTimeout(()=>{
			uni.createSelectorQuery().select('#gBody').fields(
				{size: true}, (res) => {
					// 60 是滚动区域上方内容的高
					this.scrollHeight = res.height - 60;
				}
			).exec();
		},1000);
	},
	methods:{
		scroll:function(e){
			console.log(e);
			this.scrollTop = e.detail.scrollTop;
		},
		touchstart : function (e){
			var touchObj = {scrollTop :this.scrollTop, moveY : e.changedTouches[0].pageY};
			this.$refs.graceReload.touchstart(touchObj);
		},
		touchmove : function (e) {
			var touchObj = {scrollTop :this.scrollTop, moveY : e.changedTouches[0].pageY};
			this.$refs.graceReload.touchmove(touchObj);
		},
		touchend : function (e) {
			var touchObj = {scrollTop :this.scrollTop, moveY : e.changedTouches[0].pageY};
			this.$refs.graceReload.touchend(touchObj);
		},
		// 下拉刷新函数 ( 请根据项目需要自行编写代码 )
		reload:function(){
			this.$refs.graceReload.endReload();
		}
	},
	
}
</script>
<style>
</style>