<script>
	// import gracePage from "./graceUI/components/gracePage.vue";
	// import graceHeaderAlert from './graceUI/components/graceHeaderAlert.vue';
	// import graceDateTime from "./graceUI/components/graceDateTime.vue";
	// import graceNavBar from "./graceUI/components/graceNavBar.vue";
	// import graceBottomDialog from './graceUI/components/graceBottomDialog.vue';
	// export default {
	// 	components: {
	// 		gracePage,graceHeaderAlert,graceDateTime,graceNavBar,graceBottomDialog
	// 	},
	// 	onLaunch: function() {
	// 		console.log('App Launch')
	// 	},
	// 	onShow: function() {
	// 		console.log('App Show')
	// 	},
	// 	onHide: function() {
	// 		console.log('App Hide')
	// 	}
	// }
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@import "/eudesign/graceUI/graceUI.css";
	@import "/eudesign/graceUI/graceIcons.css";
	/* #endif */
	
	/* #ifdef APP-PLUS-NVUE */
	@import "/eudesign/graceUI/graceWeex.css";
	.grace-icons{font-family:graceIconfont;}
	/* #endif */
	
	
	/*
	如下修改和补充能够保证不修改 GraceUI 框架的核心源码，当 GraceUI 升级时可以直接使用框架核心文件包覆盖旧文件
	请根据业务原型或者设计稿规划出自己的 公共样式, 如:
	*/
	.color-black{color:#333333;}
	.color-red{color:#FF0036;}
	
	/* 空列表提示 */
	.empty { width:100%;text-align:center; margin-top:200rpx;}
	.empty image{ width: 80rpx; height: 80rpx;}
	
	.empty view{ font-size: 28rpx; color: #9b9b9b;}
	
	/* 列表提示 */
	.hasMore { font-size: 28rpx; text-align: center; }
	
	/* 超出隐藏 */
	.overload { overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
	.overloads { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
	/* 占位隐藏 */
	.hidden { visibility: hidden;} 
	
	/* 颜色 */
	.color_bd0 { border: 2rpx solid #1890ff;} /* 主色 */
	.color_bd1 { border: 2rpx solid #F43138;} /* 副色 */
	.color_bd2 { border: 2rpx solid #aaa;}    /* 副色 */
	
	.color_0 { color: #1890ff;} /* 主色 */
	.color_1 { color: #595959;} /* 主文字副色 */
	.color_2 { color: #bfbfbf;} /* 副文字副色 */
	.color_3 { color: #fff;}    /* 副色 */
	.color_4 { color: #8c8c8c;} /* 副色 */
	.color_5 { color: #f0f0f0;} /* 分割线副色 */
	.color_6 { color: #faad14;} /* 状态副色 */
	.color_7 { color: #f5222d;} /* 副色 */
	
	.color_bg0 { background-color: #1890ff;} /* 主色 */
	.color_bg1 { background-color: #f5222d;} /* 副色 */
	.color_bg2 { background-color: #aaa;}    /* 副色 */
	.color_bg3 { background-color: #F7A039;} /* 副色 */
	.color_bg4 { background-color: #fff;}    /* 副色 */
    .color_bg5 { background-color: #bfbfbf;} /* 副文字副色 */
	
	.baccol_0 { background-color: #1890ff; color: #fff;}
	.baccol_1 { background-color: #fff; color: #1890ff;}
	
	.color_bor0 { border: 2rpx solid #1890ff; }
	.color_bor1 { border: 2rpx solid #bbb; }
	.color_bor2 { border: 2rpx solid #ccc; }
	.color_bor3 { border: 2rpx solid #383838; }
	.color_bord0 { border: 2rpx dotted #1890ff; }
	.color_bord1 { border: 2rpx dotted #bbb; }
	.color_bord2 { border: 2rpx dotted #ccc; }
	.color_bord3 { border: 2rpx dotted #aaa; }
	
	/* 弹窗 */
	.model { display: flex; padding: 20rpx 48rpx; font-size: 28rpx; line-height: 48rpx; color: #333; border-bottom: 2rpx solid #f5f5f5; text-align: center; }
	.model .name { width: 100%; }
	.model image { text-align: right; width: 40rpx; height: 40rpx; }
	
	/*
	修改 graceUI 或者其他 UI 框架，如, 修改 grace-title:
	*/
	.grace-title{color:#333333;}
	/* 可以利用条件编译编写不同平台的样式 如 : 修改导航组件 */
	/* #ifndef APP-PLUS-NVUE */
	navigator{opacity:1; background:none;}
	.navigator-hover{background-color:none; opacity:0.8;}
	/* #endif */
	
	/* graceUI search */
	.grace-sbody[data-v-08c096bb] { min-height: 0% !important; }
</style>
