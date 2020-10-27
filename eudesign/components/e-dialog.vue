<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-list grace-margin-top">
				<view v-if="type == 'text'">
					<graceDialog ref="graceDialog2" title="普通形式的对话框" :isBtns="false" v-on:closeDialog="closeDialog2">
						<view class="content2" slot="content">
							<text>我见过春日夏风秋叶冬雪，也踏遍南水北山东麓西岭，可这四季春秋 苍山泱水，都不及你冲我展眉一眺。</text>
						</view>
						<view slot="btns" class="grace-space-between">
							<text class="grace-dialog-buttons" @tap="closeDialog2">关闭</text>
							<text class="grace-dialog-buttons grace-blue" @tap="confirm2">确认</text>
						</view>
					</graceDialog>
				</view>
				
				
				<!-- 图片格式 -->
				<view v-if="type == 'image'">
					<graceDialog :show='show' ref="graceDialog" :isTitle="isTitle" :title="title" :isBtns="isBtns" closeBtnColor="#FFFFFF" v-on:closeDialog="closeDialog3">
						<view slot="content" class="grace-img-in">
							<image class="demo-img" src="https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200805/3a3b07bd7db264febc0744bca97f6f8e.jpg" mode="widthFix"></image>
						</view>
					</graceDialog>
				</view>
				
			</view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../graceUI/components/gracePage.vue";
	import graceDialog from '../graceUI/components/graceDialog.vue';
	
	export default {
		components: {
			gracePage
		},
		data() {
			return {
				
			}
		},
		props:{
			// 公共
			show : {
				type : Boolean,
				default : false
			},
			title: String,
			type: { // 类型
				type: String,
				default: 'text',
			},
			isTitle: { // 是否显示标题
				type: Boolean,
				default: true,
			},
			isBtns: { // 名称
				type: Boolean,
				default: false,
			},
			
			
			// 选择框
			image: {
				type: String,
				default: '',
			},
			
		},
		watch:{
			show:function (val) {
				if(val){this.open();}else{this.hide();}
			}
		},
		methods:{
			show : function(){this.show = true;},
			close : function(){this.show = false;},
		}
	}	
</script>

<style>
/* demo */
.content1{padding:25rpx; font-size:26rpx; text-align:center; line-height:60rpx;background-color:#F8F8F8; display:block;}
.content2{padding:30rpx; padding-right:80rpx; line-height:50rpx; font-size:26rpx;}
/* 图片形式 */
.demo-img{width:580rpx; height:850rpx;}
.grace-dialog-buttons{width:700rpx; line-height:88rpx; height:88rpx; display:block; overflow:hidden; text-align:center; font-size:26rpx; color:#999999;}
</style>
