<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body" v-if="isShow">
			<graceEmptyNew>
				<view slot="img" class="empty-view" :style="{'margin-top':marginTop}">
					<image class="empty-img" mode="widthFix" :src="src"></image>
				</view>
				<text slot="text" class="grace-text-small grace-gray">{{ text }}</text>
			</graceEmptyNew>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceEmptyNew from "../../graceUI/components/graceEmptyNew.vue";
export default {
	data() {
		return {}
	},
	props:{
		isShow: {   // 是否显示
			type: Boolean,
			default: false,
		},
		text:{  // 提示文本
			type: String,
			default: '抱歉，没有搜索到任何数据',
		},
		src:{ 	// 提示图片
			type: String,
			default: "https://staticimgs.oss-cn-beijing.aliyuncs.com/empty.png",
		},
		marginTop:{ // 距上边距
			type: String,
			default: '300rpx',
		},
	},
	onLoad:function(){},
	methods:{},
	components:{
		gracePage, graceEmptyNew
	}
}
</script>
<style>
.empty-view{width:280rpx; height:280rpx; border-radius:280rpx; background-color:#F6F7F8; }
.empty-img{width:220rpx; height:200rpx; margin:40rpx; border-radius:200rpx;}
.grace-text-small{margin-top:10px;}
</style>